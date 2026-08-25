/* Cómo llegar y a quién llamar. */

'use strict';

const { SITE } = require('../nav');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, correo, cajetin } = L;

const pagina = {
  url: 'contacto.html',
  tituloCorto: 'Cómo llegar',
  hoja: 'Hoja 51 · Contacto',
  title: 'Cómo llegar a AFRIBA: Calle Eje 3-18, 8, Mercamadrid | Contacto',
  description:
    'Edificio AFRIBA, Calle Eje 3-18, 8, Plataforma Baja de Mercamadrid, 28053 Madrid. Centralita 915 079 255 y muelles 915 079 256, con horarios y mapa de situación.',
  h1: 'Calle Eje 3-18, 8. Plataforma Baja de Mercamadrid',
  prioridad: '0.9',
  heroe: {
    entradilla:
      'Estamos dentro del recinto de Mercamadrid, en la Plataforma Baja. Si vienes con camión, la ventanilla de control está en la fachada principal, entre los muelles 11 y 12.',
  },
};

function cuerpo() {
  const bloque =
    '<section class="seccion seccion--contacto">' +
    '<div class="contenedor contacto__interior">' +
    '<div class="contacto__datos">' +
    '<p class="hoja">51.1</p>' +
    '<h2 class="seccion__titulo">Dirección</h2>' +
    '<address class="contacto__direccion">' +
    esc(SITE.direccion.edificio) + '<br>' +
    esc(SITE.direccion.calle) + '<br>' +
    esc(SITE.direccion.detalle) + '<br>' +
    esc(SITE.direccion.cp) + ' ' + esc(SITE.direccion.ciudad) + ', ' + esc(SITE.direccion.pais) +
    '</address>' +
    '<p class="contacto__coord"><span class="mono">' + esc(SITE.direccion.lat) + '</span> N · ' +
    '<span class="mono">' + esc(SITE.direccion.lon.replace('-', '')) + '</span> O</p>' +
    '<p><a class="boton boton--contorno" href="' + esc(SITE.direccion.mapaAmpliado) + '" target="_blank" rel="noopener">' +
    icono('ubicacion') + '<span>Abrir en Google Maps</span>' + icono('externo') + '</a></p>' +

    '<h2 class="seccion__titulo seccion__titulo--menor">Teléfonos</h2>' +
    '<ul class="contactos contactos--dos">' +
    '<li class="contacto"><span class="contacto__icono">' + icono('telefono') + '</span>' +
    '<h3>Centralita</h3><p><a href="tel:' + SITE.telefonos.centralita.tel + '">' + esc(SITE.telefonos.centralita.texto) + '</a></p>' +
    '<p class="contacto__nota">' + esc(SITE.telefonos.centralita.horario) + '</p></li>' +
    '<li class="contacto"><span class="contacto__icono">' + icono('camion') + '</span>' +
    '<h3>Muelles</h3><p><a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) + '</a></p>' +
    '<p class="contacto__nota">' + esc(SITE.telefonos.muelles.horario) + '</p></li>' +
    '</ul>' +

    '<h2 class="seccion__titulo seccion__titulo--menor">Correo</h2>' +
    '<ul class="contactos contactos--dos">' +
    '<li class="contacto"><span class="contacto__icono">' + icono('correo') + '</span>' +
    '<h3>General</h3><p>' + correo('afriba|vanhessen.com') + '</p>' +
    '<p class="contacto__nota">Recepciones, expediciones e incidencias</p></li>' +
    '<li class="contacto"><span class="contacto__icono">' + icono('escudo') + '</span>' +
    '<h3>Protección de datos</h3><p>' + correo('lopd|vanhessen.com') + '</p>' +
    '<p class="contacto__nota">Ejercicio de derechos RGPD</p></li>' +
    '</ul>' +
    '<p class="mas"><a href="equipo.html">Contactos directos por área' + icono('flecha') + '</a></p>' +
    '</div>' +

    '<div class="contacto__lateral">' +
    '<div class="contacto__mapa">' +
    '<iframe src="' + esc(SITE.direccion.mapaEmbebido) + '" title="Mapa de situación de AFRIBA en Mercamadrid" loading="lazy" width="600" height="450"></iframe>' +
    '<p class="donde__mapa-pie"><a href="' + esc(SITE.direccion.mapaAmpliado) + '" target="_blank" rel="noopener">' +
    'Ver AFRIBA en un mapa más grande' + icono('externo') + '</a></p>' +
    '</div>' +
    cajetin({
      ref: '51.1',
      titulo: 'Horario de la instalación',
      filas: [
        ['Recepciones', 'L a V · 07:00 – 15:00'],
        ['Expediciones', 'L a V · 07:00 – 15:00'],
        ['Muelles (teléfono)', 'L a V · 07:00 – 17:00'],
        ['Centralita', 'L a V · 09:00 – 14:00'],
        ['Fines de semana', 'Cerrado'],
        ['Festivos nacionales', 'Cerrado'],
      ],
      pie: 'Festivos locales y de la Comunidad de Madrid: horario reducido, consultar unos días antes.',
    }) +
    '</div></div></section>';

  const sociedad =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('documento') + 'Datos de la sociedad</p>' +
    '<p><strong>' + esc(SITE.razonSocialMayus) + '</strong> · CIF ' + esc(SITE.cif) + '<br>' +
    'Domicilio social: C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID<br>' +
    esc(SITE.registro) + '</p>' +
    '<p><a href="aviso-legal.html">Aviso legal' + icono('flecha') + '</a></p>' +
    '</div></div></section>';

  return heroe(pagina) + bloque + sociedad + bandaCta();
}

module.exports = { pagina, cuerpo };
