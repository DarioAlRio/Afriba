/*
 * Junta General de accionistas. Texto LITERAL de 171225.html (vigente) y de
 * 221124.html (convocatoria anterior, que se conserva por continuidad porque
 * el menú de las páginas legales del sitio antiguo seguía apuntando a ella).
 */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroe } = require('../layout');
const { esc, icono } = L;

const pagina = {
  url: 'junta-general.html',
  tituloCorto: 'Junta General',
  hoja: 'Hoja 42 · Avisos legales',
  title: 'Convocatoria de Junta General de accionistas | Almacenes Frigoríficos Ibarz',
  description:
    'Convocatoria de Junta General ordinaria de ALMACENES FRIGORÍFICOS IBARZ, S.A., con el orden del día y los derechos de información, asistencia y representación de los accionistas.',
  h1: 'Convocatoria de Junta General',
  prioridad: '0.4',
  cambio: 'yearly',
  heroe: {
    entradilla:
      'Anuncios societarios de ALMACENES FRIGORÍFICOS IBARZ, S.A. El texto se reproduce literalmente, tal y como se publicó.',
  },
};

function convocatoria(c, vigente) {
  return (
    '<article class="convocatoria' + (vigente ? '' : ' convocatoria--anterior') + '">' +
    '<header class="convocatoria__cabeza">' +
    '<p class="convocatoria__estado">' + (vigente ? 'Convocatoria publicada' : 'Convocatoria anterior') + '</p>' +
    '<h2 class="convocatoria__titulo">Junta General ordinaria del ' + esc(c.fecha) + '</h2>' +
    '</header>' +
    '<p class="convocatoria__entradilla">' + esc(c.entradilla) + '</p>' +
    '<h3 class="convocatoria__orden-titulo">Orden del día</h3>' +
    '<ol class="convocatoria__orden">' + c.orden.map((o) => '<li>' + esc(o) + '</li>').join('') + '</ol>' +
    (c.derechos
      ? '<dl class="convocatoria__derechos">' +
        c.derechos
          .map((d) => '<div><dt>' + esc(d[0]) + '</dt><dd>' + esc(d[1]) + '</dd></div>')
          .join('') +
        '</dl>'
      : '') +
    '<footer class="convocatoria__firma">' +
    '<p>' + esc(c.firmada) + '</p>' +
    '<p class="convocatoria__firmante">' + esc(SITE.administrador) + '<br><span>Administrador único</span></p>' +
    '</footer></article>'
  );
}

function cuerpo() {
  const vigente =
    '<section class="seccion seccion--convocatoria">' +
    '<div class="contenedor contenedor--texto">' +
    '<p class="hoja">' + esc(SITE.razonSocialMayus) + '</p>' +
    convocatoria(D.JUNTA_GENERAL.vigente, true) +
    '</div></section>';

  const anterior =
    '<section class="seccion seccion--convocatoria seccion--alterna">' +
    '<div class="contenedor contenedor--texto">' +
    '<details class="plegable">' +
    '<summary>Convocatoria anterior · Junta General del ' + esc(D.JUNTA_GENERAL.anterior.fecha) + '</summary>' +
    '<div class="plegable__cuerpo">' + convocatoria(D.JUNTA_GENERAL.anterior, false) + '</div>' +
    '</details>' +
    '<p class="nota-inline">' + icono('documento') +
    'Se conserva porque el sitio anterior seguía enlazándola desde sus páginas legales.</p>' +
    '</div></section>';

  return heroe(pagina) + vigente + anterior;
}

module.exports = { pagina, cuerpo };
