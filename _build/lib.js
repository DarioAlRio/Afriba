/*
 * lib.js — iconos SVG en línea y componentes de la interfaz.
 *
 * Todos los componentes devuelven cadenas de HTML. No hay ninguna librería:
 * los iconos se dibujan aquí, con la misma retícula y el mismo grosor de
 * trazo que el resto del sistema (24 × 24, trazo de 1,5).
 *
 * El vocabulario visual es el de un plano técnico: cajetín, cotas, cuadros de
 * despiece, referencias de hoja. Los nombres de las funciones lo respetan.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const IMAGENES = JSON.parse(fs.readFileSync(path.join(__dirname, 'imagenes.json'), 'utf8'));

/* ---------------------------------------------------------------- *
 * Utilidades
 * ---------------------------------------------------------------- */

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Ruta relativa a la raíz: todas las páginas viven en la raíz, así que las
 * rutas son directas. Se centraliza por si algún día hay subcarpetas. */
function ruta(u) {
  return u;
}

/* ---------------------------------------------------------------- *
 * Iconos. Retícula 24 × 24, trazo 1,5, sin relleno.
 * ---------------------------------------------------------------- */

function svg(cuerpo, extra) {
  return (
    '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"' +
    (extra || '') +
    '>' + cuerpo + '</svg>'
  );
}

const ICONOS = {
  telefono: () => svg('<path d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"/>'),
  correo: () => svg('<rect x="2.5" y="4.5" width="19" height="15" rx="1"/><path d="m3 6 9 6.5L21 6"/>'),
  ubicacion: () => svg('<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>'),
  reloj: () => svg('<circle cx="12" cy="12" r="9"/><path d="M12 6.8V12l3.4 2"/>'),
  documento: () => svg('<path d="M14 2.8H7a1.5 1.5 0 0 0-1.5 1.5v15.4A1.5 1.5 0 0 0 7 21.2h10a1.5 1.5 0 0 0 1.5-1.5V7.3Z"/><path d="M14 2.8v4.5h4.5"/><path d="M8.8 12.5h6.4M8.8 16h4.4"/>'),
  palet: () => svg('<path d="M2.8 16.5h18.4M2.8 20h18.4M6 16.5V20M12 16.5V20M18 16.5V20"/><rect x="5.5" y="4" width="13" height="9"/><path d="M12 4v9"/>'),
  camion: () => svg('<path d="M2.8 6.5h10.4v9.8H2.8z"/><path d="M13.2 9.5h3.6l2.8 3v3.8h-6.4z"/><circle cx="7" cy="18.3" r="1.9"/><circle cx="17" cy="18.3" r="1.9"/>'),
  usuario: () => svg('<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20a7.2 7.2 0 0 1 14.4 0"/>'),
  llave: () => svg('<circle cx="8" cy="12" r="3.8"/><path d="M11.8 12H21M18 12v3M15 12v2.2"/>'),
  escudo: () => svg('<path d="M12 2.8 4.8 5.6v6c0 4.4 3 8.3 7.2 9.6 4.2-1.3 7.2-5.2 7.2-9.6v-6Z"/><path d="m9 12 2.2 2.2L15.4 10"/>'),
  chevron: () => svg('<path d="m6 9.5 6 6 6-6"/>'),
  flecha: () => svg('<path d="M4.5 12h15M13.5 6l6 6-6 6"/>'),
  menu: () => svg('<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/>'),
  cerrar: () => svg('<path d="m6 6 12 12M18 6 6 18"/>'),
  descarga: () => svg('<path d="M12 3.5v11.5M7.5 10.5 12 15l4.5-4.5"/><path d="M4.5 18.5v1.2a.8.8 0 0 0 .8.8h13.4a.8.8 0 0 0 .8-.8v-1.2"/>'),
  externo: () => svg('<path d="M14 4.5h5.5V10"/><path d="m19.5 4.5-8 8"/><path d="M18 14v4.7a1 1 0 0 1-1 1H5.3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1H10"/>'),
  termometro: () => svg('<path d="M14 14.2V5a2 2 0 1 0-4 0v9.2a4 4 0 1 0 4 0Z"/><path d="M12 9v6.5"/>'),
};

function icono(nombre) {
  const f = ICONOS[nombre];
  if (!f) throw new Error('Icono desconocido: ' + nombre);
  return f();
}

/* ---------------------------------------------------------------- *
 * Isotipo. Triángulo equilátero con copo de nieve, con la geometría y el
 * color medidos píxel a píxel sobre el isotipo original (detalle1.gif).
 * El oso polar del original va en blanco con filo gris claro y desaparece
 * por debajo de unos 80 px, así que la versión pequeña conserva triángulo y
 * copo, y la grande usa el mapa de bits original.
 * ---------------------------------------------------------------- */

function isotipo(clase) {
  return (
    '<svg class="' + (clase || 'isotipo') + '" viewBox="0 0 192 168" aria-hidden="true" focusable="false">' +
    '<path fill="var(--azul-marca)" d="M96 2 190 165H2Z"/>' +
    '<g stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none">' +
    '<path d="M96 44v66M67.4 60.5l57.2 33M124.6 60.5l-57.2 33"/>' +
    '<path d="m88 50 8 7.5 8-7.5M88 104l8-7.5 8 7.5"/>' +
    '<path d="m60.8 71.5 10.9 1.1-1.7 10.8M131.2 82.5l-10.9-1.1 1.7-10.8"/>' +
    '<path d="m60.8 82.5 10.9-1.1-1.7-10.8M131.2 71.5l-10.9 1.1 1.7 10.8"/>' +
    '</g></svg>'
  );
}

/* ---------------------------------------------------------------- *
 * Imágenes. Siempre con width/height, siempre con WebP cuando existe.
 * ---------------------------------------------------------------- */

function imagen(src, alt, opciones) {
  const o = opciones || {};
  const meta = IMAGENES[src];
  if (!meta) throw new Error('Imagen sin registrar en imagenes.json: ' + src);
  const clase = o.clase ? ' class="' + o.clase + '"' : '';
  const carga = o.prioritaria
    ? ' fetchpriority="high" decoding="async"'
    : ' loading="lazy" decoding="async"';
  const sizes = o.sizes ? ' sizes="' + o.sizes + '"' : '';
  const img =
    '<img src="assets/img/' + src + '" alt="' + esc(alt) + '" width="' + meta.ancho +
    '" height="' + meta.alto + '"' + clase + carga + sizes + '>';
  if (!meta.webp) return img;
  const webp = src.replace(/\.(jpg|png)$/, '.webp');
  return (
    '<picture><source type="image/webp" srcset="assets/img/' + webp + '">' + img + '</picture>'
  );
}

/*
 * Figura: fotografía enmarcada como una vista de plano, con su referencia de
 * hoja y su pie. `cotas` añade líneas de referencia sobre la imagen.
 */
function figura(src, alt, opciones) {
  const o = opciones || {};
  const cotas = (o.cotas || [])
    .map(
      (c, i) =>
        '<span class="figura__cota figura__cota--' + (i + 1) + '"><span class="figura__cota-valor">' +
        esc(c) + '</span></span>'
    )
    .join('');
  /* Ninguna fotografía se amplía más del doble de su resolución real.
     Tres de las del sitio anterior solo existen a 192 px de ancho y a todo
     ancho se veían deshechas; ahora se muestran centradas y a su tamaño.
     Ver PENDIENTE.md: hay que volver a fotografiarlas. */
  const meta = IMAGENES[src];
  const tope = meta
    ? ' style="max-width:min(' + meta.ancho * 2 + 'px, 100%)"'
    : '';

  return (
    '<figure class="figura' + (o.clase ? ' ' + o.clase : '') + '"' + tope + '>' +
    '<div class="figura__marco">' +
    /* La clase es de la figura, no de la imagen: si se le pasa también a
       <img>, la imagen hereda cosas como el flotado y se sale del marco. */
    imagen(src, alt, Object.assign({}, o, { clase: null })) +
    cotas +
    '</div>' +
    (o.pie
      ? '<figcaption class="figura__pie">' +
        (o.ref ? '<span class="figura__ref">' + esc(o.ref) + '</span>' : '') +
        '<span>' + o.pie + '</span></figcaption>'
      : '') +
    '</figure>'
  );
}

/* ---------------------------------------------------------------- *
 * Cajetín: el bloque rotulado que lleva todo plano en una esquina.
 * Es una lista de definición con reglas, no una fila de tarjetas.
 * ---------------------------------------------------------------- */

function cajetin(opciones) {
  const o = opciones;
  const filas = o.filas
    .map(
      (f) =>
        '<div class="cajetin__fila"><dt>' + esc(f[0]) + '</dt><dd>' + f[1] + '</dd></div>'
    )
    .join('');
  return (
    '<div class="cajetin' + (o.clase ? ' ' + o.clase : '') + '">' +
    (o.titulo
      ? '<p class="cajetin__titulo"><span class="cajetin__ref">' + esc(o.ref || '') +
        '</span>' + esc(o.titulo) + '</p>'
      : '') +
    '<dl class="cajetin__cuerpo">' + filas + '</dl>' +
    (o.pie ? '<p class="cajetin__pie">' + o.pie + '</p>' : '') +
    '</div>'
  );
}

/*
 * Lector: la pieza que enseña la temperatura como la enseña el SCADA de la
 * sala de máquinas: numerales claros sobre fondo negro.
 */
function lector(valor, unidad, rotulo, opciones) {
  const o = opciones || {};
  return (
    '<div class="lector' + (o.clase ? ' ' + o.clase : '') + '">' +
    '<p class="lector__rotulo">' + esc(rotulo) + '</p>' +
    '<p class="lector__valor"><span>' + esc(valor) + '</span>' +
    (unidad ? '<span class="lector__unidad">' + esc(unidad) + '</span>' : '') + '</p>' +
    (o.nota ? '<p class="lector__nota">' + esc(o.nota) + '</p>' : '') +
    '</div>'
  );
}

/*
 * Cuadro: la tabla de un plano. Siempre con caption, th scope y su propio
 * desplazamiento horizontal para que no rompa la página.
 */
function cuadro(titulo, cabeceras, filas, opciones) {
  const o = opciones || {};
  const th = cabeceras
    .map((c, i) => '<th scope="col"' + (i > 0 ? ' class="cuadro__num"' : '') + '>' + esc(c) + '</th>')
    .join('');
  const tr = filas
    .map(
      (f) =>
        '<tr><th scope="row">' + f[0] + '</th>' +
        f.slice(1).map((c) => '<td>' + c + '</td>').join('') +
        '</tr>'
    )
    .join('');
  return (
    '<div class="cuadro' + (o.clase ? ' ' + o.clase : '') + '">' +
    '<div class="cuadro__scroll" tabindex="0" role="region" aria-label="' + esc(titulo) + '">' +
    '<table><caption>' + esc(titulo) + '</caption>' +
    '<thead><tr>' + th + '</tr></thead><tbody>' + tr + '</tbody></table>' +
    '</div></div>'
  );
}

/*
 * Despiece: la lista numerada de partidas de un plano. Cada línea lleva su
 * número de referencia a la izquierda, como en una leyenda.
 */
function despiece(items, opciones) {
  const o = opciones || {};
  const li = items
    .map(
      (t, i) =>
        '<li class="despiece__item"><span class="despiece__n" aria-hidden="true">' +
        String(i + 1).padStart(2, '0') + '</span><span class="despiece__t">' + t + '</span></li>'
    )
    .join('');
  return '<ol class="despiece' + (o.clase ? ' ' + o.clase : '') + '">' + li + '</ol>';
}

/*
 * Acordeón accesible. Sin JavaScript se ven todos los paneles abiertos,
 * porque el atributo hidden solo lo pone el script.
 */
let contadorAcordeon = 0;
function galeria(items) {
  const li = items
    .map(
      (g, i) =>
        '<li class="galeria__item">' +
        '<a class="galeria__enlace" href="assets/img/' + g.src + '" data-visor="' + i + '" ' +
        'data-alt="' + esc(g.alt) + '" data-pie="' + esc(g.pie) + '">' +
        imagen(g.src, g.alt, { sizes: '(min-width: 60rem) 30rem, 90vw' }) +
        '<span class="galeria__pie">' + esc(g.pie) + '</span></a></li>'
    )
    .join('');
  return '<ul class="galeria" data-galeria>' + li + '</ul>';
}

/* ---------------------------------------------------------------- *
 * Correo electrónico. El HTML no contiene la dirección completa: se
 * ensambla en el navegador desde data-correo="cuenta|dominio". Sin
 * JavaScript se lee «cuenta (arroba) dominio», que sigue siendo legible.
 * ---------------------------------------------------------------- */

function correo(spec, opciones) {
  const o = opciones || {};
  const partes = spec.split('|');
  return (
    '<span class="correo" data-correo="' + esc(spec) + '"' +
    (o.asunto ? ' data-asunto="' + esc(o.asunto) + '"' : '') +
    (o.clase ? ' class="' + o.clase + '"' : '') + '>' +
    '<span class="correo__texto">' + esc(partes[0]) + '<span class="correo__arroba"> (arroba) </span>' +
    esc(partes[1]) + '</span></span>'
  );
}

/* ---------------------------------------------------------------- *
 * Enlaces
 * ---------------------------------------------------------------- */

function botón(url, texto, opciones) {
  const o = opciones || {};
  const clases = ['boton'];
  if (o.tipo) clases.push('boton--' + o.tipo);
  if (o.clase) clases.push(o.clase);
  return (
    '<a class="' + clases.join(' ') + '" href="' + ruta(url) + '"' +
    (o.externo ? ' target="_blank" rel="noopener"' : '') + '>' +
    (o.iconoAntes ? icono(o.iconoAntes) : '') +
    '<span>' + esc(texto) + '</span>' +
    (o.iconoDespues ? icono(o.iconoDespues) : '') +
    '</a>'
  );
}

function enlacePdf(url, texto, nota) {
  return (
    '<a class="pdf" href="' + ruta(url) + '" target="_blank" rel="noopener">' +
    icono('documento') +
    '<span class="pdf__texto">' + esc(texto) +
    (nota ? '<span class="pdf__nota">' + esc(nota) + '</span>' : '') +
    '</span>' + icono('descarga') + '</a>'
  );
}

module.exports = {
  esc,
  ruta,
  icono,
  isotipo,
  imagen,
  figura,
  cajetin,
  lector,
  cuadro,
  despiece,
  galeria,
  correo,
  boton: botón,
  enlacePdf,
  IMAGENES,
};
