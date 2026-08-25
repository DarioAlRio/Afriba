/* Vista general de la instalación: todas las cifras en una sola hoja. */

'use strict';

const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, boton, cuadro, lector, figura } = L;

const pagina = {
  url: 'instalacion.html',
  tituloCorto: 'La instalación',
  hoja: 'Hoja 10 · Instalación',
  title: 'La instalación de AFRIBA: cifras, cámara, muelles y sala de máquinas',
  description:
    'Ficha técnica completa del almacén frigorífico de AFRIBA en Mercamadrid: cámara de 3.388 m² a −22 °C, antecámara a +8 °C, 12 dársenas, 640 kW de potencia frigorífica y 1.000 kVA propios.',
  h1: 'Una nave, cuatro sistemas y ninguna cifra redondeada',
  prioridad: '0.9',
  cambio: 'yearly',
  heroe: {
    entradilla:
      'Todo lo que se puede medir de esta instalación está aquí abajo, en las mismas unidades en que lo miden nuestros técnicos: superficie, altura, huecos, kilovatios, sondas y dársenas.',
    imagen: {
      src: 'edificio-afriba-entrada.jpg',
      alt: 'Fachada principal del edificio AFRIBA en Mercamadrid, con el isotipo del oso polar pintado sobre el testero y un camión frigorífico en los muelles',
    },
  },
};

function cuerpo() {
  const lecturas =
    '<section class="seccion seccion--lecturas">' +
    '<div class="contenedor">' +
    '<div class="lecturas">' +
    lector('8.943', 'palés', 'Capacidad en congelación') +
    lector('−22', '°C', 'Régimen de cámara') +
    lector('3.388', 'm²', 'Superficie de cámara') +
    lector('640', 'kW', 'Potencia frigorífica') +
    '</div></div></section>';

  const fichas = D.FICHA_INSTALACION.map(
    (f, i) =>
      '<section class="seccion seccion--ficha">' +
      '<div class="contenedor">' +
      '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
      '<p class="hoja">' + esc('Cuadro ' + String(i + 1).padStart(2, '0')) + '</p>' +
      '<h2 class="seccion__titulo">' + esc(f.grupo) + '</h2>' +
      '</div>' +
      cuadro(
        f.grupo + ' — características',
        ['Concepto', 'Valor'],
        f.filas.map((fila) => [esc(fila[0]), esc(fila[1])])
      ) +
      '</div></section>'
  ).join('');

  const partes =
    '<section class="seccion seccion--partes">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza">' +
    '<p class="hoja">Despiece</p>' +
    '<h2 class="seccion__titulo">Cada parte, en su hoja</h2>' +
    '</div>' +
    '<ul class="partes">' +
    [
      ['camara-frigorifica.html', 'Cámara frigorífica', 'camara-pasillo-central.jpg', 'Pasillo central de la cámara de congelación entre estanterías cargadas de palés', '3.388 m² · 8.943 palés · 26 pasillos'],
      ['muelles.html', 'Muelles y antecámara', 'muelles-camiones.jpg', 'Camiones frigoríficos estacionados frente a las dársenas de carga de AFRIBA', '12 dársenas · antecámara a +8 °C'],
      ['equipamiento.html', 'Sala de máquinas y parque móvil', 'sala-de-maquinas-compresores.jpg', 'Compresores y tuberías calorifugadas de la sala de máquinas', '640 kW · R-717 NH₃ · trilaterales y retráctiles'],
      ['seguridad.html', 'Seguridad y vigilancia', 'monitor-vigilancia-detalle.jpg', 'Monitor de videovigilancia con las imágenes de doce cámaras de la instalación', '32 cámaras · intrusión · incendios · 1.000 kVA'],
      ['oficinas.html', 'Oficinas en alquiler', 'despacho-oficina.jpg', 'Despacho con mesa de reuniones y ventanal corrido en las oficinas de AFRIBA', '800 m² en dos plantas · desde 40 m²'],
    ]
      .map(
        (p) =>
          '<li class="parte"><a href="' + p[0] + '">' +
          '<span class="parte__foto">' + L.imagen(p[2], p[3], { sizes: '(min-width: 62rem) 20rem, 45vw' }) + '</span>' +
          '<span class="parte__cuerpo">' +
          '<span class="parte__titulo">' + esc(p[1]) + '</span>' +
          '<span class="parte__dato">' + esc(p[4]) + '</span>' +
          '</span>' + icono('flecha') + '</a></li>'
      )
      .join('') +
    '</ul></div></section>';

  const nota =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('escudo') + 'Sobre estas cifras</p>' +
    '<p>Todos los datos de esta página son los que Almacenes Frigoríficos Ibarz publica sobre su propia ' +
    'instalación. Si necesitas un detalle que no aparezca aquí —una tolerancia, una condición concreta, ' +
    'una tarifa— pídelo por escrito y te lo damos por escrito.</p>' +
    '<p>' + boton('presupuesto.html', 'Pedir información', { tipo: 'contorno', iconoDespues: 'flecha' }) + '</p>' +
    '</div></div></section>';

  return heroe(pagina) + lecturas + fichas + partes + nota + bandaCta();
}

module.exports = { pagina, cuerpo };
