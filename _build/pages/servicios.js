/* Servicios: la lista completa, con el texto literal del original. */

'use strict';

const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, cajetin, figura } = L;

const pagina = {
  url: 'servicios.html',
  tituloCorto: 'Servicios',
  hoja: 'Hoja 20 · Servicios',
  title: 'Servicios del almacén frigorífico: congelación, crossdocking y trazabilidad | AFRIBA',
  description:
    'Almacenamiento en congelación hasta −22 °C, carga y descarga sobre palé homologado AME y EUR, crossdocking, gestión por radiofrecuencia, EAN 128, stocks en línea y oficinas en alquiler.',
  h1: 'Ocho servicios, ninguno improvisado',
  prioridad: '0.9',
  heroe: {
    entradilla:
      'Somos un almacén frigorífico público: el espacio, la manipulación y el sistema de gestión son nuestros; la mercancía es de nuestros clientes. Esto es todo lo que hacemos con ella.',
  },
};

function cuerpo() {
  const lista =
    '<section class="seccion seccion--servicios">' +
    '<div class="contenedor">' +
    '<ol class="lista-servicios lista-servicios--amplia">' +
    D.SERVICIOS.map(
      (s, i) =>
        '<li class="servicio">' +
        '<span class="servicio__n" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div class="servicio__cuerpo">' +
        '<h2 class="servicio__titulo">' + esc(s.titulo) + '</h2>' +
        '<p class="servicio__literal">' + esc(s.literal) + '</p>' +
        '<p class="servicio__detalle">' + esc(s.detalle) + '</p>' +
        (s.enlace
          ? '<p class="servicio__enlace"><a href="' + s.enlace.url + '">' + esc(s.enlace.texto) + icono('flecha') + '</a></p>'
          : '') +
        '</div></li>'
    ).join('') +
    '</ol></div></section>';

  const condiciones =
    '<section class="seccion seccion--detalle seccion--alterna">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">20.1</p>' +
    '<h2 class="seccion__titulo">Cómo trabajamos el palé</h2>' +
    '<p>Estas son las condiciones sobre las que se calcula un presupuesto de almacenamiento. Aparecen tal ' +
    'cual en nuestro formulario, y conviene leerlas antes de pedirlo:</p>' +
    '<ul class="lista-marcada">' +
    D.CONDICIONES_PRESUPUESTO.map((c) => '<li>' + esc(c) + '</li>').join('') +
    '</ul>' +
    '<p>Admitimos palé <strong>americano de 120 × 100 cm</strong> y <strong>europeo de 120 × 80 cm</strong>, ' +
    'con alturas de hasta 180 cm o hasta 230 cm y pesos de hasta 1.000 kg o hasta 1.250 kg. Las bases han de ' +
    'ser de madera y homologadas, AME o EUR.</p>' +
    '<p><a href="presupuesto.html">Pedir presupuesto con estos datos' + icono('flecha') + '</a></p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '20.1',
      titulo: 'Palés admitidos',
      filas: [
        ['Americano', '120 × 100 cm'],
        ['Europeo', '120 × 80 cm'],
        ['Alturas', 'Hasta 180 cm · hasta 230 cm'],
        ['Pesos', 'Hasta 1.000 kg · hasta 1.250 kg'],
        ['Base', 'Madera homologada AME o EUR'],
      ],
    }) +
    '</aside></div></section>';

  const enlaces =
    '<section class="seccion seccion--partes">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza"><p class="hoja">Ampliación</p>' +
    '<h2 class="seccion__titulo">Cómo se sostiene cada servicio</h2></div>' +
    '<ul class="partes partes--tres">' +
    [
      ['trazabilidad.html', 'Trazabilidad y radiofrecuencia', 'terminal-radiofrecuencia.jpg', 'Terminal de radiofrecuencia de mano sobre una etiqueta de palé con código de barras', 'SGA, EAN 128 y Reglamento 178/2002.'],
      ['certificaciones.html', 'Certificaciones y calidad', 'sello-ifs-logistics.jpg', 'Sello de certificación IFS Logistics de AENOR', 'IFS Logistics V3, SAE nivel 3 y HACCP.'],
      ['gestion-en-linea.html', 'Gestión en línea de stocks', 'pantalla-area-clientes.png', 'Captura de la pantalla del área de clientes con el menú de consultas de stock y formularios de pedidos', 'Consulta de stock y pedidos desde el navegador.'],
    ]
      .map(
        (p) =>
          '<li class="parte"><a href="' + p[0] + '">' +
          '<span class="parte__foto">' + L.imagen(p[2], p[3], { sizes: '(min-width: 62rem) 18rem, 45vw' }) + '</span>' +
          '<span class="parte__cuerpo"><span class="parte__titulo">' + esc(p[1]) + '</span>' +
          '<span class="parte__dato">' + esc(p[4]) + '</span></span>' + icono('flecha') + '</a></li>'
      )
      .join('') +
    '</ul></div></section>';

  return heroe(pagina) + lista + condiciones + enlaces + bandaCta();
}

module.exports = { pagina, cuerpo };
