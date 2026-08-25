/* Seguridad, vigilancia y prevención. */

'use strict';

const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, figura, cajetin, lector } = L;

const pagina = {
  url: 'seguridad.html',
  tituloCorto: 'Seguridad y vigilancia',
  hoja: 'Hoja 14 · Seguridad',
  title: 'Seguridad y vigilancia: 32 cámaras y central de alarmas 24 h | AFRIBA',
  description:
    'Treinta y dos cámaras de videovigilancia digitales, sistema de intrusión conectado a central de alarmas en coordinación con Mercamadrid, detección de incendios 24 horas y 1.000 kVA propios.',
  h1: 'Vigilada, coordinada con Mercamadrid y con corriente propia',
  prioridad: '0.7',
  heroe: {
    entradilla:
      'La mercancía es de nuestros clientes, así que la protección no es un extra. Videovigilancia, intrusión e incendios están conectados a una central de alarmas que trabaja las veinticuatro horas.',
  },
};

function cuerpo() {
  const bloques = [
    {
      ref: '14.1',
      titulo: 'Videovigilancia',
      lector: ['32', 'cámaras', 'Videovigilancia digital'],
      parrafos: ['Disponemos de 32 cámaras de video-vigilancia digitales.'],
      figura: {
        src: 'monitor-videovigilancia.jpg',
        alt: 'Monitor de videovigilancia dividido en doce imágenes de muelles, oficina de control, entrada principal, entrada de conductores y recepción',
        pie: 'Monitor de control con doce de las cámaras de la instalación.',
        ref: 'V-08',
      },
    },
    {
      ref: '14.2',
      titulo: 'Intrusión',
      parrafos: [
        'Sistema de seguridad en intrusión dispuesto por toda la instalación y conectado a una «Central de Alarmas» en coordinación con el Servicio de Seguridad propio de Mercamadrid, lo cual nos garantiza una rápida atención in situ.',
      ],
    },
    {
      ref: '14.3',
      titulo: 'Prevención de incendios',
      parrafos: [
        'Sistema digital avanzado para la prevención contra incendios instalado en las zonas sensibles de riesgo de incendio, conectada a la «Central de Alarmas» (24 horas), que permite el aviso urgente al responsable de las instalaciones y al Servicio de Bomberos y Emergencias ante cualquier incidencia al respecto.',
      ],
      figura: {
        src: 'scada-esquema-instalacion.png',
        alt: 'Esquema del SCADA con depósitos, líneas de refrigerante y bloques de estado de la instalación frigorífica sobre fondo azul',
        pie: 'Esquema de la instalación en el SCADA.',
        ref: 'V-09',
      },
    },
    {
      ref: '14.4',
      titulo: 'Suministro eléctrico',
      lector: ['1.000', 'kVA', 'Centro de transformación'],
      parrafos: ['La instalación eléctrica está provista de un centro de transformación en exclusiva de 1.000 KVA.'],
    },
  ];

  const cuerpoBloques = bloques
    .map(
      (b, i) =>
        '<section class="seccion seccion--detalle' + (i % 2 ? ' seccion--alterna' : '') + '">' +
        '<div class="contenedor detalle__interior">' +
        '<div class="detalle__principal">' +
        '<p class="hoja">' + esc(b.ref) + '</p>' +
        '<h2 class="seccion__titulo">' + esc(b.titulo) + '</h2>' +
        b.parrafos.map((p) => '<p>' + esc(p) + '</p>').join('') +
        (b.figura
          ? figura(b.figura.src, b.figura.alt, {
              pie: b.figura.pie,
              ref: b.figura.ref,
              prioritaria: i === 0,
              sizes: '(min-width: 62rem) 36rem, 92vw',
            })
          : '') +
        '</div>' +
        '<aside class="detalle__lateral">' +
        (b.lector ? lector(b.lector[0], b.lector[1], b.lector[2]) : '') +
        '</aside></div></section>'
    )
    .join('');

  const foodDefense =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('escudo') + 'Control de acceso</p>' +
    '<p>El protocolo de control de acceso a la instalación exige cumplir una serie de requisitos y aceptar ' +
    'las normas establecidas, según los procedimientos de <strong>Food Defense</strong> e <strong>IFS ' +
    'Logistics</strong> implantados. Nadie ajeno a AFRIBA entra en la zona de antecámara y muelles sin ' +
    'autorización y supervisión.</p>' +
    '<p><a href="transportistas.html">Ver las normas de acceso' + icono('flecha') + '</a></p>' +
    '</div></div></section>';

  return heroe(pagina) + cuerpoBloques + foodDefense + bandaCta();
}

module.exports = { pagina, cuerpo };
