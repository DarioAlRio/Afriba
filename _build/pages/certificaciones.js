/* Certificaciones y calidad. Los datos salen de los propios PDF del dominio. */

'use strict';

const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, cuadro, enlacePdf, imagen } = L;

const pagina = {
  url: 'certificaciones.html',
  tituloCorto: 'Certificaciones y calidad',
  hoja: 'Hoja 22 · Calidad',
  title: 'Certificaciones: IFS Logistics V3, SAE nivel 3 y HACCP | AFRIBA',
  description:
    'Certificado IFS Logistics V3 de AENOR con COID 80521 y nivel superior del 97,17 %, certificado SAE nivel 3 de Certicalidad para exportación de carne y sistema HACCP.',
  h1: 'Tres certificados, con su número y su alcance',
  prioridad: '0.8',
  heroe: {
    entradilla:
      'No basta con decir que se cumple. Cada uno de estos certificados lo emite un tercero, tiene un número, un alcance escrito y una fecha. Aquí están los tres, con el PDF original descargable.',
  },
};

function cuerpo() {
  const fichas = D.CERTIFICACIONES.map(
    (c) =>
      '<section class="seccion seccion--cert" id="' + c.id + '">' +
      '<div class="contenedor cert__interior">' +
      '<div class="cert__sello">' +
      imagen(c.sello, c.alt, { sizes: '14rem' }) +
      '</div>' +
      '<div class="cert__cuerpo">' +
      '<p class="hoja">' + esc(c.emisor ? 'Emitido por ' + c.emisor : 'Sistema de autocontrol') + '</p>' +
      '<h2 class="seccion__titulo">' + esc(c.nombre) + '</h2>' +
      cuadro(
        c.nombre + ' — datos del certificado',
        ['Concepto', 'Valor'],
        c.datos.map((d) => [esc(d[0]), esc(d[1])])
      ) +
      '<p class="cert__pdf">' + enlacePdf(c.pdf, 'Descargar el certificado', 'PDF') + '</p>' +
      '</div></div></section>'
  ).join('');

  const politica =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('documento') + 'Política de calidad</p>' +
    '<p>Nuestra política de calidad se publica firmada, en PDF. Es el documento del que cuelgan los ' +
    'procedimientos que después auditan AENOR y Certicalidad.</p>' +
    '<p>' + enlacePdf('assets/docs/politica-de-calidad.pdf', 'Política de calidad', 'PDF') + '</p>' +
    '</div></div></section>';

  const alcance =
    '<section class="seccion seccion--detalle seccion--alterna">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">22.1</p>' +
    '<h2 class="seccion__titulo">Qué significa cada uno</h2>' +
    '<h3>IFS Logistics V3</h3>' +
    '<p>Norma internacional de seguridad alimentaria específica para actividades logísticas. Certifica que ' +
    'el almacenamiento de productos alimentarios a temperatura de congelación controlada cumple los ' +
    'requisitos de la norma. AFRIBA la tiene con <strong>nivel superior</strong> y una puntuación del ' +
    '<strong>97,17 %</strong>, bajo el COID 80521.</p>' +
    '<h3>Sistema de Autocontrol Específico (SAE)</h3>' +
    '<p>Certificado de conformidad de producto emitido por Certicalidad en el marco del ' +
    '<strong>RD 993/2014</strong>, que regula el procedimiento y los requisitos de la certificación ' +
    'veterinaria oficial para la exportación a países terceros con requisitos distintos a los ' +
    'intracomunitarios. AFRIBA lo tiene en <strong>nivel 3</strong> para la categoría de carne: canales, ' +
    'carnes frescas, despojos y preparados de carne.</p>' +
    '<h3>HACCP</h3>' +
    '<p>Sistema de análisis de peligros y puntos de control crítico, conforme a <strong>RP-B13 y CXC ' +
    '1-1969, Rev. 6 2023</strong>.</p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    '<div class="nota nota--compacta">' +
    '<p class="nota__rotulo">' + icono('escudo') + 'Registros sanitarios</p>' +
    '<p class="mono">10.00016066/M<br>40.16267/M</p>' +
    '<p class="nota__rotulo">' + icono('palet') + 'GLN</p>' +
    '<p class="mono">8438002242005</p>' +
    '</div>' +
    '</aside></div></section>';

  return heroe(pagina) + fichas + alcance + politica + bandaCta();
}

module.exports = { pagina, cuerpo };
