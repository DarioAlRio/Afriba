/*
 * Página de error 404. Las instrucciones para activarla en cada alojamiento
 * están en el README.
 */

'use strict';

const { SITE } = require('../nav');
const L = require('../lib');
const { esc, icono, boton, isotipo } = L;

const pagina = {
  url: '404.html',
  tituloCorto: 'Página no encontrada',
  hoja: 'Hoja 99 · Error',
  title: 'Esta página no existe (error 404) | AFRIBA',
  description:
    'La dirección que has abierto no corresponde a ninguna página de www.afriba.com. Aquí tienes los accesos principales del sitio y los teléfonos de contacto de AFRIBA.',
  h1: 'Aquí no hay nada guardado',
  prioridad: '0.1',
};

function cuerpo() {
  return (
    '<section class="error">' +
    '<div class="contenedor error__interior">' +
    '<p class="hoja">' + esc(pagina.hoja) + '</p>' +
    '<p class="error__codigo" aria-hidden="true">404</p>' +
    '<h1 class="error__titulo">Aquí no hay nada guardado</h1>' +
    '<p class="error__texto">La dirección que has abierto no corresponde a ninguna página de este sitio. ' +
    'Puede que el enlace estuviera mal escrito o que la página se haya movido al reorganizar la web.</p>' +
    '<div class="error__acciones">' +
    boton('index.html', 'Ir a la portada', { tipo: 'senal', iconoDespues: 'flecha' }) +
    boton('contacto.html', 'Datos de contacto', { tipo: 'contorno' }) +
    '</div>' +
    '<ul class="error__enlaces">' +
    [
      ['instalacion.html', 'La instalación'],
      ['servicios.html', 'Servicios'],
      ['clientes.html', 'Horarios y operativa'],
      ['transportistas.html', 'Acceso de transportistas'],
      ['certificaciones.html', 'Certificaciones'],
      ['presupuesto.html', 'Solicitar presupuesto'],
    ]
      .map((e) => '<li><a href="' + e[0] + '">' + esc(e[1]) + icono('flecha') + '</a></li>')
      .join('') +
    '</ul>' +
    '<p class="error__telefonos">¿Prefieres llamar? Centralita ' +
    '<a href="tel:' + SITE.telefonos.centralita.tel + '">' + esc(SITE.telefonos.centralita.texto) + '</a> · ' +
    'Muelles <a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) + '</a></p>' +
    '</div></section>'
  );
}

module.exports = { pagina, cuerpo };
