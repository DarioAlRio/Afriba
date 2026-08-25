/*
 * Acceso de transportistas. El texto de las normas es literal del PDF
 * «Instrucciones para el control de acceso de transportistas a la zona de
 * antecámara y muelles en AFRIBA», que publica el propio dominio.
 */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, enlacePdf, cajetin } = L;

const pagina = {
  url: 'transportistas.html',
  tituloCorto: 'Acceso de transportistas',
  hoja: 'Hoja 31 · Acceso',
  title: 'Normas de acceso de transportistas a antecámara y muelles | AFRIBA',
  description:
    'Ventanilla de control entre los muelles 11 y 12, chaleco reflectante, línea naranja del suelo e identificación de visita autorizada. Horario de operaciones y descarga de los comunicados.',
  h1: 'Cómo se entra a los muelles',
  prioridad: '0.8',
  heroe: {
    entradilla:
      'Si vienes a cargar o a descargar, esto es lo que hay que cumplir. Son las instrucciones que AFRIBA publica en su comunicado a transportistas, reproducidas aquí sin cambios.',
    imagen: {
      src: 'muelles-camiones.jpg',
      alt: 'Camiones frigoríficos estacionados frente a las dársenas de carga del edificio AFRIBA',
    },
  },
};

function cuerpo() {
  const clave =
    '<section class="seccion seccion--clave">' +
    '<div class="contenedor">' +
    '<ul class="clave">' +
    [
      ['ubicacion', 'Ventanilla de control', 'En la fachada principal de AFRIBA, entre los muelles 11 y 12.'],
      ['escudo', 'Chaleco reflectante', 'Obligatorio para acceder a la instalación.'],
      ['flecha', 'Línea naranja', 'Solo se circula siguiendo la línea naranja del suelo, frente a los muelles.'],
      ['usuario', 'Visita autorizada', 'Identificación colgada al cuello y visible; se devuelve al salir.'],
    ]
      .map(
        (c) =>
          '<li class="clave__item"><span class="clave__icono">' + icono(c[0]) + '</span>' +
          '<h2 class="clave__titulo">' + esc(c[1]) + '</h2>' +
          '<p class="clave__texto">' + esc(c[2]) + '</p></li>'
      )
      .join('') +
    '</ul></div></section>';

  const normas =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">31.1 · Texto literal del comunicado</p>' +
    '<h2 class="seccion__titulo">Instrucciones para el control de acceso</h2>' +
    '<ol class="normas">' +
    D.ACCESO_TRANSPORTISTAS.map(
      (n) =>
        '<li class="norma"><span class="norma__n" aria-hidden="true">' + esc(n.n) + '</span>' +
        '<div class="norma__cuerpo"><p>' + esc(n.texto) + '</p>' +
        (n.subapartados
          ? '<ol class="norma__sub">' + n.subapartados.map((s) => '<li>' + esc(s) + '</li>').join('') + '</ol>'
          : '') +
        '</div></li>'
    ).join('') +
    '</ol>' +
    '<p class="norma__cierre">Todos los visitantes deberán cumplir con todas las normas y señalizaciones ' +
    'relacionadas con medidas preventivas de salud o de prevención de riesgos laborales, visibles en toda ' +
    'la instalación.</p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '31.1',
      titulo: 'Contacto de muelles',
      filas: [
        ['Teléfono', '<a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) + '</a>'],
        ['Atención', '07:00 – 17:00'],
        ['Dirección', esc(SITE.direccion.calle) + '<br>' + esc(SITE.direccion.detalle)],
      ],
      pie: '<a href="' + esc(SITE.direccion.mapaAmpliado) + '" target="_blank" rel="noopener">Abrir en el mapa</a>',
    }) +
    '</aside></div></section>';

  const horario =
    '<section class="seccion seccion--horario seccion--alterna">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
    '<p class="hoja">31.2 · Texto literal del comunicado</p>' +
    '<h2 class="seccion__titulo">Horario de operaciones del almacén</h2>' +
    '</div>' +
    '<ul class="lista-marcada lista-marcada--ancha">' +
    D.HORARIO_ALMACEN_PDF.map((h) => '<li>' + esc(h) + '</li>').join('') +
    '</ul>' +
    '<p class="nota-inline">' + icono('reloj') + '<span>' +
    'En la página de operativa para clientes están los horarios de recepción y expedición vigentes: ' +
    '<a href="clientes.html">recepciones y expediciones de 07:00 a 15:00</a>.</span></p>' +
    '</div></section>';

  const docs =
    '<section class="seccion seccion--docs">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
    '<p class="hoja">31.3</p>' +
    '<h2 class="seccion__titulo">Descarga los comunicados</h2>' +
    '</div>' +
    '<ul class="docs">' +
    '<li>' + enlacePdf('assets/docs/comunicado-a-transportistas.pdf', 'Comunicado a transportistas', 'PDF') + '</li>' +
    '<li>' + enlacePdf('assets/docs/instrucciones-control-acceso-transportistas.pdf', 'Instrucciones para el control de acceso de transportistas a la zona de antecámara y muelles', 'PDF') + '</li>' +
    '</ul></div></section>';

  return heroe(pagina) + clave + normas + horario + docs + bandaCta({
    hoja: 'Si eres cliente',
    titulo: '¿Necesitas lanzar un pedido?',
    cuerpo: 'Los pedidos de salidas del día se hacen por la web el día anterior, antes de las 16:50.',
  });
}

module.exports = { pagina, cuerpo };
