/*
 * imagenes.js — recompresión de las fotografías del sitio.
 *
 * NO forma parte de `node build.js`. Se ejecuta a mano, y solo cuando se
 * añaden o se reemplazan imágenes en assets/img/_original/:
 *
 *     npm install sharp     (solo para esto)
 *     node _build/imagenes.js
 *     rm -rf node_modules   (no se sube al alojamiento)
 *
 * El resultado (los .jpg/.png y los .webp de assets/img/, más
 * _build/imagenes.json con las medidas) sí está en el proyecto, así que un
 * despliegue normal nunca necesita ejecutar esto ni instalar nada.
 *
 * REGLA DEL PROYECTO: ninguna imagen se amplía. El material del dominio mide
 * como mucho 960 px de ancho y varias piezas solo 192 px. Ampliarlas solo
 * produce desenfoque, así que se recomprimen a su tamaño nativo y el CSS las
 * sirve siempre a un tamaño igual o menor.
 */

'use strict';

const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Falta sharp. Instálalo con:  npm install sharp');
  process.exit(1);
}

const RAIZ = path.join(__dirname, '..');
const ORIGEN = path.join(RAIZ, 'assets', 'img', '_original');
const DESTINO = path.join(RAIZ, 'assets', 'img');

const ANCHO_MAXIMO = 1600; // ninguna original llega, queda como tope declarado
const CALIDAD_JPEG = 82;
const CALIDAD_WEBP = 80;

/*
 * [archivo original, nombre nuevo, formato de salida]
 *
 * El nombre nuevo describe lo que se ve, porque de ahí sale también el texto
 * alternativo. Las capturas de pantalla (SCADA, área de clientes) y los sellos
 * de certificación se quedan en PNG/JPEG plano: son gráficos de colores
 * planos o texto pequeño, y el JPEG los emborrona.
 */
const IMAGENES = [
  // Fotografías grandes del original (960 px de ancho)
  ['entrada.png', 'edificio-afriba-entrada.jpg', 'jpeg'],
  ['estanterias.png', 'camara-pasillo-estanterias.jpg', 'jpeg'],
  ['equipamiento.png', 'parque-movil-carretillas.jpg', 'jpeg'],
  ['radiofrecuencia.png', 'equipos-radiofrecuencia.jpg', 'jpeg'],
  ['oficinas.png', 'oficinas-sala-de-juntas.jpg', 'jpeg'],
  ['vigilancia.png', 'monitor-videovigilancia.jpg', 'jpeg'],
  ['fondo_contenido.png', 'edificio-afriba-lateral.jpg', 'jpeg'],
  ['scada.png', 'scada-lectura-camara.png', 'png'],

  // Fotografías pequeñas del original (192 px de ancho)
  ['camara1.png', 'camara-pasillo-central.jpg', 'jpeg'],
  ['muelles.png', 'muelles-camiones.jpg', 'jpeg'],
  ['maquina.png', 'sala-de-maquinas-compresores.jpg', 'jpeg'],
  ['traspaleta.png', 'transpaleta-electrica.jpg', 'jpeg'],
  ['pistola1.png', 'terminal-radiofrecuencia.jpg', 'jpeg'],
  ['vigilancia1.png', 'monitor-vigilancia-detalle.jpg', 'jpeg'],
  ['oficina2.png', 'despacho-oficina.jpg', 'jpeg'],
  ['cuadro.png', 'cuadro-electrico-control.jpg', 'jpeg'],
  ['scada1.png', 'scada-esquema-instalacion.png', 'png'],
  ['web.png', 'pantalla-area-clientes.png', 'png'],

  // Sellos de certificación y logotipo
  ['ifs.jpg', 'sello-ifs-logistics.jpg', 'jpeg'],
  ['sae2020.jpg', 'sello-certicalidad-sae.jpg', 'jpeg'],
  ['hapcc.jpg', 'sello-haccp.jpg', 'jpeg'],
  ['Logo.jpg', 'logotipo-afriba.jpg', 'jpeg'],
];

// Piezas que no llevan variante WebP: pesan tan poco que el segundo archivo
// no compensa la petición extra.
const SIN_WEBP = new Set(['scada-esquema-instalacion.png', 'pantalla-area-clientes.png']);

function kb(n) {
  return (n / 1024).toFixed(1) + ' kB';
}

(async () => {
  const registro = {};
  let antes = 0;
  let despues = 0;

  for (const [origen, destino, formato] of IMAGENES) {
    const rutaOrigen = path.join(ORIGEN, origen);
    if (!fs.existsSync(rutaOrigen)) {
      console.error('  falta el original: ' + origen);
      process.exitCode = 1;
      continue;
    }
    antes += fs.statSync(rutaOrigen).size;

    let img = sharp(rutaOrigen);
    const meta = await img.metadata();
    const ancho = Math.min(meta.width, ANCHO_MAXIMO);
    if (ancho < meta.width) img = img.resize({ width: ancho });

    const rutaDestino = path.join(DESTINO, destino);
    if (formato === 'jpeg') {
      await img.jpeg({ quality: CALIDAD_JPEG, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(rutaDestino);
    } else {
      await img.png({ compressionLevel: 9, palette: true }).toFile(rutaDestino);
    }
    despues += fs.statSync(rutaDestino).size;

    const finales = await sharp(rutaDestino).metadata();
    const conWebp = !SIN_WEBP.has(destino);
    if (conWebp) {
      const rutaWebp = rutaDestino.replace(/\.(jpg|png)$/, '.webp');
      await sharp(rutaOrigen)
        .resize({ width: ancho })
        .webp({ quality: CALIDAD_WEBP })
        .toFile(rutaWebp);
      despues += fs.statSync(rutaWebp).size;
    }

    registro[destino] = { ancho: finales.width, alto: finales.height, webp: conWebp };
    console.log(
      destino.padEnd(36) +
        finales.width + '×' + finales.height + '  ' +
        kb(fs.statSync(rutaOrigen).size) + ' → ' + kb(fs.statSync(rutaDestino).size)
    );
  }

  // Imagen para redes sociales: 1200×630, compuesta sobre el azul de marca a
  // partir de la fotografía real del edificio. No añade ningún dato nuevo.
  const OG_ANCHO = 1200;
  const OG_ALTO = 630;
  const foto = await sharp(path.join(ORIGEN, 'entrada.png'))
    .resize({ width: OG_ANCHO, height: 470, fit: 'cover', position: 'centre' })
    .toBuffer();
  await sharp({
    create: { width: OG_ANCHO, height: OG_ALTO, channels: 3, background: '#00156E' },
  })
    .composite([{ input: foto, top: 160, left: 0 }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(DESTINO, 'og-afriba.jpg'));
  despues += fs.statSync(path.join(DESTINO, 'og-afriba.jpg')).size;
  registro['og-afriba.jpg'] = { ancho: OG_ANCHO, alto: OG_ALTO, webp: false };
  console.log('og-afriba.jpg'.padEnd(36) + OG_ANCHO + '×' + OG_ALTO);

  fs.writeFileSync(
    path.join(__dirname, 'imagenes.json'),
    JSON.stringify(registro, null, 2) + '\n'
  );

  const ahorro = (100 * (1 - despues / antes)).toFixed(1);
  console.log('');
  console.log('Originales : ' + (antes / 1048576).toFixed(2) + ' MB');
  console.log('Publicadas : ' + (despues / 1048576).toFixed(2) + ' MB (con las variantes WebP)');
  console.log('Ahorro     : ' + ahorro + ' %');
})();
