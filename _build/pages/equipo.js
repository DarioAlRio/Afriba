/* Equipo y contactos directos. Antes «RR. HH.». */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, correo } = L;

const pagina = {
  url: 'equipo.html',
  tituloCorto: 'Equipo y contactos',
  hoja: 'Hoja 41 · Equipo',
  title: 'Equipo y contactos directos: extensión y correo de cada área | AFRIBA',
  description:
    'Dirección financiera, jefatura de planta y sistemas, mantenimiento, comercial e informática de AFRIBA, con teléfono, extensión y correo electrónico de cada persona.',
  h1: 'Cinco personas y sus extensiones',
  prioridad: '0.7',
  heroe: {
    entradilla:
      'Si ya sabes con qué área tienes que hablar, aquí tienes el nombre, la extensión y el correo. La centralita atiende de lunes a viernes de 09:00 a 14:00.',
  },
};

function cuerpo() {
  const fichas =
    '<section class="seccion seccion--equipo">' +
    '<div class="contenedor">' +
    '<ul class="equipo">' +
    D.EQUIPO.map(
      (p, i) =>
        '<li class="persona">' +
        '<span class="persona__ref" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div class="persona__cuerpo">' +
        '<h2 class="persona__nombre">' + esc(p.nombre) + '</h2>' +
        '<p class="persona__cargo">' + esc(p.cargo) + '</p>' +
        '<dl class="persona__datos">' +
        '<div><dt>Teléfono</dt><dd><a href="tel:+34915079255">' + esc(p.telefono) + '</a> ' +
        '<span class="persona__ext">ext. ' + esc(p.ext) + '</span></dd></div>' +
        '<div><dt>Correo</dt><dd>' + correo(p.correo) + '</dd></div>' +
        '</dl></div></li>'
    ).join('') +
    '</ul></div></section>';

  const generales =
    '<section class="seccion seccion--detalle seccion--alterna">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
    '<p class="hoja">41.1</p>' +
    '<h2 class="seccion__titulo">Contactos generales</h2>' +
    '</div>' +
    '<ul class="contactos">' +
    '<li class="contacto"><span class="contacto__icono">' + icono('telefono') + '</span>' +
    '<h3>Centralita</h3><p><a href="tel:' + SITE.telefonos.centralita.tel + '">' + esc(SITE.telefonos.centralita.texto) + '</a></p>' +
    '<p class="contacto__nota">' + esc(SITE.telefonos.centralita.horario) + '</p></li>' +
    '<li class="contacto"><span class="contacto__icono">' + icono('camion') + '</span>' +
    '<h3>Muelles</h3><p><a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) + '</a></p>' +
    '<p class="contacto__nota">' + esc(SITE.telefonos.muelles.horario) + '</p></li>' +
    '<li class="contacto"><span class="contacto__icono">' + icono('correo') + '</span>' +
    '<h3>Correo general</h3><p>' + correo('afriba|vanhessen.com') + '</p>' +
    '<p class="contacto__nota">Recepciones, expediciones e incidencias</p></li>' +
    '<li class="contacto"><span class="contacto__icono">' + icono('escudo') + '</span>' +
    '<h3>Protección de datos</h3><p>' + correo('lopd|vanhessen.com') + '</p>' +
    '<p class="contacto__nota">Ejercicio de derechos RGPD</p></li>' +
    '</ul></div></section>';

  return heroe(pagina) + fichas + generales + bandaCta({
    hoja: 'Comercial',
    titulo: '¿Prefieres que te llamemos nosotros?',
    cuerpo: 'Rellena la solicitud de presupuesto con tus datos y el comercial se pone en contacto.',
  });
}

module.exports = { pagina, cuerpo };
