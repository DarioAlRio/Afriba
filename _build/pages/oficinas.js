/* Oficinas en alquiler. */

'use strict';

const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, figura, cajetin, boton } = L;

const pagina = {
  url: 'oficinas.html',
  tituloCorto: 'Oficinas en alquiler',
  hoja: 'Hoja 15 · Oficinas',
  title: 'Oficinas en alquiler en Mercamadrid, de 40 a 120 m² | AFRIBA',
  description:
    'Ochocientos metros cuadrados de oficinas en alquiler en dos plantas dentro de Mercamadrid, desde 40 hasta 120 m², con climatización central, aseos, ascensor y sala de juntas.',
  h1: 'Oficinas dentro de Mercamadrid, encima de tu propia mercancía',
  prioridad: '0.7',
  heroe: {
    entradilla:
      'Ochocientos metros cuadrados repartidos en dos plantas, con climatización central y zonas comunes a disposición de los clientes. Se alquilan desde 40 hasta 120 metros cuadrados.',
  },
};

function cuerpo() {
  const principal =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">15.1</p>' +
    '<h2 class="seccion__titulo">Servicios de oficinas y auxiliares</h2>' +
    '<p>Nuestras instalaciones disponen de <strong>800 metros cuadrados de oficinas en alquiler</strong>, ' +
    'en 2 plantas, con servicio de climatización central y zonas comunes a disposición de los clientes: ' +
    'aseos, ascensor y sala de juntas.</p>' +
    figura('oficinas-sala-de-juntas.jpg', 'A la izquierda, una oficina diáfana con ventanal corrido y falso techo con climatización; a la derecha, la sala de juntas con mesa alargada, pantalla y el cuadro del isotipo de AFRIBA en la pared', {
      prioritaria: true,
      pie: 'Oficina diáfana en alquiler y sala de juntas del edificio AFRIBA.',
      ref: 'V-10',
      sizes: '(min-width: 62rem) 40rem, 92vw',
    }) +
    figura('despacho-oficina.jpg', 'Despacho con mesa de reuniones redonda, sillones y ventanal corrido', {
      pie: 'Uno de los despachos, con mesa de reuniones.',
      ref: 'V-11',
      clase: 'figura--flotante',
      sizes: '(min-width: 62rem) 18rem, 45vw',
    }) +
    '<p>Estar aquí significa tener el equipo administrativo en el mismo edificio que la cámara, dentro del ' +
    'recinto de Mercamadrid y con acceso directo a la oficina de recepción y expedición de mercancías.</p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '15.1',
      titulo: 'Oficinas',
      filas: [
        ['Superficie total', '800 m²'],
        ['Plantas', '2'],
        ['Módulo mínimo', '40 m²'],
        ['Módulo máximo', '120 m²'],
        ['Climatización', 'Central'],
        ['Zonas comunes', 'Aseos, ascensor y sala de juntas'],
      ],
      pie: '<a href="contacto.html">Pregunta por disponibilidad</a>',
    }) +
    '</aside></div></section>';

  const cta =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('telefono') + 'Disponibilidad y condiciones</p>' +
    '<p>El alquiler de oficinas se acuerda caso por caso. Llama a la centralita en horario de 09:00 a 14:00 ' +
    'o escríbenos y te decimos qué módulos hay libres.</p>' +
    '<p>' + boton('contacto.html', 'Ver los datos de contacto', { tipo: 'contorno', iconoDespues: 'flecha' }) + '</p>' +
    '</div></div></section>';

  return heroe(pagina) + principal + cta + bandaCta();
}

module.exports = { pagina, cuerpo };
