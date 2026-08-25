/* La empresa. */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, figura, cuadro, galeria, boton } = L;

const pagina = {
  url: 'empresa.html',
  tituloCorto: 'La empresa',
  hoja: 'Hoja 40 · Empresa',
  title: 'Almacenes Frigoríficos Ibarz, S. A.: quiénes somos | AFRIBA',
  description:
    'AFRIBA abrió sus instalaciones de Mercamadrid el 18 de abril de 2001. Almacén frigorífico público con capacidad para 8.943 palés y objetivo declarado: que la cadena de frío no se rompa.',
  h1: 'Su operador logístico del frío, desde 2001',
  prioridad: '0.8',
  heroe: {
    entradilla:
      'Almacenes Frigoríficos Ibarz, S. A. presta servicio especializado al sector alimentario como almacén frigorífico público de productos congelados, bajo las más estrictas normas medioambientales y de calidad.',
    imagen: {
      src: 'edificio-afriba-entrada.jpg',
      alt: 'Fachada principal del edificio AFRIBA en Mercamadrid, con el isotipo del oso polar pintado sobre el testero',
    },
  },
};

function cuerpo() {
  const historia =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">40.1</p>' +
    '<h2 class="seccion__titulo">18 de abril de 2001</h2>' +
    '<p>El 18 de Abril de 2001, el Ministro de Agricultura, Pesca y Alimentación, D. Miguel Arias Cañete, ' +
    'presidió el acto de inauguración de las nuevas instalaciones de <strong>Almacenes Frigoríficos Ibarz, ' +
    'S.A. (AFRIBA)</strong> acompañado por el Alcalde de Madrid, D. José María Álvarez del Manzano.</p>' +
    '<p>Nuestras instalaciones se encuentran ubicadas en Mercamadrid, el segundo mercado mayorista de ' +
    'pescados del mundo y el primero de cárnicos de Europa, centro neurálgico de distribución en la ' +
    'península Ibérica.</p>' +
    '<p>Nuestro objetivo es dar un servicio especializado al sector alimentario como almacén frigorífico ' +
    'público de productos congelados y a un régimen de hasta −22 °C, bajo las más estrictas normas ' +
    'medioambientales y de calidad, para asegurar la no rotura de la cadena de frío.</p>' +
    '<p>En nuestras instalaciones ofertamos una capacidad en congelación de <strong>8.943 paletas</strong>. ' +
    'Con ello estamos en disposición de suministrar capacidad de espacio frigorífico a cualquier operador ' +
    'logístico del mercado Europeo, para cubrir tanto sus necesidades actuales como futuras.</p>' +
    '<p><strong>AFRIBA</strong> cuenta, además, con la tecnología más avanzada del mercado que, unida a ' +
    'nuestra profesionalidad, garantiza el mantenimiento de la calidad de los productos elaborados y de las ' +
    'materias primas.</p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    figura('edificio-afriba-lateral.jpg', 'Vista lateral del edificio AFRIBA desde el vial de Mercamadrid, con árboles en primer plano y camiones frigoríficos en los muelles', {
      pie: 'El edificio desde el vial de la Plataforma Baja.',
      ref: 'V-15',
      sizes: '(min-width: 62rem) 22rem, 92vw',
    }) +
    '</aside></div></section>';

  const identidad =
    '<section class="seccion seccion--detalle seccion--alterna">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
    '<p class="hoja">40.2</p>' +
    '<h2 class="seccion__titulo">Datos de la sociedad</h2>' +
    '</div>' +
    cuadro(
      'Datos identificativos de la sociedad',
      ['Concepto', 'Valor'],
      [
        ['Denominación social', esc(SITE.razonSocialMayus)],
        ['CIF', esc(SITE.cif)],
        ['Domicilio social', esc('C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID')],
        ['También citado como', esc(SITE.direccion.domicilioSocial)],
        ['Registro Mercantil', esc('Registro Mercantil de MADRID T 30602, F 6, S 8, H M 247598, I/A 34')],
        ['Administrador único', esc(SITE.administrador)],
        ['Teléfono', '<a href="tel:' + SITE.telefonos.centralita.tel + '">' + esc(SITE.telefonos.centralita.texto) + '</a>'],
        ['Sitio web', '<span class="mono">www.afriba.com</span>'],
      ]
    ) +
    '<p class="mas"><a href="aviso-legal.html">Aviso legal completo' + icono('flecha') + '</a> · ' +
    '<a href="junta-general.html">Junta General de accionistas' + icono('flecha') + '</a></p>' +
    '</div></section>';

  const vistas =
    '<section class="seccion seccion--galeria">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza">' +
    '<p class="hoja">40.3</p>' +
    '<h2 class="seccion__titulo">La casa por dentro</h2>' +
    '<p class="seccion__intro">Fotografías de la propia instalación. Pulsa cualquiera para verla en grande.</p>' +
    '</div>' +
    galeria(D.GALERIA) +
    '</div></section>';

  const equipo =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('usuario') + 'Con quién hablar</p>' +
    '<p>Dirección financiera, jefatura de planta y sistemas, mantenimiento, comercial e informática: cinco ' +
    'personas con nombre, extensión y correo directo.</p>' +
    '<p>' + boton('equipo.html', 'Ver el equipo', { tipo: 'contorno', iconoDespues: 'flecha' }) + '</p>' +
    '</div></div></section>';

  return heroe(pagina) + historia + identidad + vistas + equipo + bandaCta();
}

module.exports = { pagina, cuerpo };
