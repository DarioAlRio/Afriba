/* Trazabilidad y radiofrecuencia. */

'use strict';

const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, figura, cajetin } = L;

const pagina = {
  url: 'trazabilidad.html',
  tituloCorto: 'Trazabilidad y radiofrecuencia',
  hoja: 'Hoja 21 · Trazabilidad',
  title: 'Trazabilidad por radiofrecuencia y EAN 128 | AFRIBA',
  description:
    'Sistema de Gestión de Almacén con terminales de radiofrecuencia: seguimiento de cada palé recepcionado, almacenado y preparado, con trazabilidad conforme al Reglamento 178/2002.',
  h1: 'Cada palé deja rastro en el momento en que se mueve',
  prioridad: '0.8',
  heroe: {
    entradilla:
      'AFRIBA tiene implantado un Sistema de Gestión de Almacén con tecnología de radiofrecuencia que permite mantener un seguimiento y control riguroso de todos los productos recepcionados, almacenados y preparados.',
  },
};

function cuerpo() {
  const bloque =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">21.1</p>' +
    '<h2 class="seccion__titulo">El sistema</h2>' +
    figura('terminal-radiofrecuencia.jpg', 'Terminal de radiofrecuencia de mano apoyado sobre una etiqueta logística con código de barras, encima de un palé retractilado', {
      prioritaria: true,
      pie: 'Terminal de radiofrecuencia leyendo la etiqueta de un palé.',
      ref: 'V-12',
      clase: 'figura--flotante',
      sizes: '(min-width: 62rem) 20rem, 45vw',
    }) +
    '<p>El Sistema de Gestión de Almacén garantiza la trazabilidad y el cumplimiento de las normas ' +
    'establecidas en el <strong>Reglamento 178/2002</strong> del Parlamento y el Consejo Europeo.</p>' +
    '<p>La implantación de equipamiento y hardware de última generación como soporte al S.G.A. se ' +
    'complementa con el trabajo de técnicos del departamento de desarrollo informático, que permite diseñar ' +
    'soluciones a medida y personalizadas para cada uno de nuestros clientes.</p>' +
    '<p>A esto se suma el sistema de <strong>captura y emisión de datos en formato electrónico</strong> y la ' +
    'gestión de la etiqueta logística <strong>EAN 128</strong>.</p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '21.1',
      titulo: 'Qué queda registrado',
      filas: [
        ['Recepción', 'Entrada y ubicación del palé'],
        ['Almacenaje', 'Posición en pasillo y altura'],
        ['Preparación', 'Salida y expedición'],
        ['Etiqueta', 'EAN 128'],
        ['Marco legal', 'Reglamento 178/2002'],
      ],
    }) +
    '</aside></div></section>';

  const equipos =
    '<section class="seccion seccion--vista">' +
    '<div class="contenedor">' +
    figura('equipos-radiofrecuencia.jpg', 'Terminal de radiofrecuencia de mano, antena de vehículo, un código de barras ampliado y un lector de pistola inalámbrico', {
      pie: 'Los equipos: terminal de mano, antena de carretilla, etiqueta y lector.',
      ref: 'V-13',
      clase: 'figura--ancha',
      sizes: '(min-width: 76rem) 60rem, 92vw',
    }) +
    '</div></section>';

  const calidad =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('escudo') + 'Auditado por terceros</p>' +
    '<p>La trazabilidad no se declara: se audita. El alcance certificado en IFS Logistics V3 es el ' +
    'almacenamiento de productos alimentarios a temperatura de congelación controlada, con nivel superior.</p>' +
    '<p><a href="certificaciones.html">Ver los certificados' + icono('flecha') + '</a></p>' +
    '</div></div></section>';

  return heroe(pagina) + bloque + equipos + calidad + bandaCta();
}

module.exports = { pagina, cuerpo };
