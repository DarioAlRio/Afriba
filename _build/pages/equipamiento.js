/* Sala de máquinas y parque móvil. */

'use strict';

const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, despiece, figura, cajetin, lector } = L;

const pagina = {
  url: 'equipamiento.html',
  tituloCorto: 'Sala de máquinas y parque móvil',
  hoja: 'Hoja 13 · Equipamiento',
  title: 'Sala de máquinas y parque móvil: 640 kW y R-717 NH₃ | AFRIBA',
  description:
    'Sala de máquinas con 640 kW de potencia frigorífica, dos compresores de tornillo, uno alternativo, refrigerante R-717 con 1.514 kg de amoníaco, y parque móvil Linde y Toyota para estiba en altura.',
  h1: 'El corazón de la garantía de frío',
  prioridad: '0.8',
  heroe: {
    entradilla:
      'Dos compresores de tornillo, uno alternativo, un intercambiador de placas y un circuito de glicol con casi 3.900 litros. De aquí sale el frío de toda la instalación.',
  },
};

function cuerpo() {
  const sala =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">Despiece 13.1</p>' +
    '<h2 class="seccion__titulo">Sala de máquinas</h2>' +
    figura('sala-de-maquinas-compresores.jpg', 'Compresores, separadores y tuberías calorifugadas de la sala de máquinas de AFRIBA', {
      prioritaria: true,
      pie: 'Sala de máquinas: compresores y colectores calorifugados.',
      ref: 'V-05',
      clase: 'figura--flotante',
      sizes: '(min-width: 62rem) 20rem, 45vw',
    }) +
    despiece(D.SALA_MAQUINAS.map(esc)) +
    '<p>El sistema está provisto de un <strong>Intercambiador Térmico de Placas</strong> de 10,9 decímetros ' +
    'cúbicos a 16 bares. Enfriamos «glicol» a −12 °C con un depósito de casi 3.900 litros, y esto nos permite ' +
    'el suministro en continuo para refrigerar la antecámara y la manutención en régimen de +8 °C.</p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    lector('640', 'kW', 'Potencia frigorífica', { nota: 'Regímenes −32 / −12 / +35 °C' }) +
    cajetin({
      ref: '13.1',
      titulo: 'Sala de máquinas',
      filas: [
        ['Refrigerante', 'R-717, NH₃'],
        ['Carga', '1.514 kg de amoníaco'],
        ['Compresores de tornillo', '2 × 165 kW'],
        ['Potencia frigorífica', '344 kW'],
        ['Compresor alternativo', '1 × 27,7 kW'],
        ['Potencia frigorífica', '103,5 kW'],
        ['Intercambiador', '10,9 dm³ a 16 bares'],
        ['Depósito de glicol', '≈ 3.900 litros a −12 °C'],
      ],
    }) +
    '</aside></div></section>';

  const cuadroElec =
    '<section class="seccion seccion--cuadro-elec">' +
    '<div class="contenedor cuadro-elec__interior">' +
    '<div class="cuadro-elec__foto">' +
    figura('cuadro-electrico-control.jpg', 'Tres armarios de cuadro eléctrico abiertos, con esquemas, magnetotérmicos y pilotos de señalización', {
      pie: 'Cuadro de Gestión y Control de la producción de frío.',
      ref: 'V-06',
      sizes: '(min-width: 62rem) 24rem, 92vw',
    }) +
    '</div>' +
    '<div class="cuadro-elec__texto">' +
    '<p class="hoja">13.2</p>' +
    '<h2 class="seccion__titulo">Gestión y control</h2>' +
    '<p>El <strong>Cuadro de Gestión y Control</strong> está compuesto y protegido eléctricamente, y ' +
    'administra el funcionamiento de la producción de frío para los puntos de consumo.</p>' +
    '<p>La instalación eléctrica está provista de un <strong>centro de transformación en exclusiva de ' +
    '1.000 kVA</strong>.</p>' +
    '<p><a href="seguridad.html">Seguridad, vigilancia y prevención' + icono('flecha') + '</a></p>' +
    '</div></div></section>';

  const parque =
    '<section class="seccion seccion--detalle seccion--alterna">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">Despiece 13.3</p>' +
    '<h2 class="seccion__titulo">Parque móvil</h2>' +
    '<p>Disponemos de una amplia variedad de maquinaria para la estiba, trasiego y carga/descarga de ' +
    'mercancías, lo que nos permite una rápida y máxima atención de nuestros clientes.</p>' +
    figura('transpaleta-electrica.jpg', 'Transpaleta eléctrica naranja en primer plano y carretilla retráctil al fondo, sobre el suelo azul de la antecámara', {
      pie: 'Transpaleta eléctrica y retráctil en la antecámara.',
      ref: 'V-07',
      clase: 'figura--flotante',
      sizes: '(min-width: 62rem) 20rem, 45vw',
    }) +
    despiece(D.PARQUE_MOVIL.map(esc)) +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '13.3',
      titulo: 'Alturas de trabajo',
      filas: [
        ['Trilateral Combi LINDE EK 15', 'más de 14 m'],
        ['Retráctil TOYOTA RRE200CC', 'hasta 12,70 m'],
        ['Transpaleta TOYOTA BT LPE200', 'carga y traslado'],
        ['Contrapesada TOYOTA', '1.600 kg'],
      ],
      pie: 'Trilaterales y retráctiles van cabinadas y con calefacción: trabajan dentro de la cámara.',
    }) +
    '</aside></div></section>';

  return heroe(pagina) + sala + cuadroElec + parque + bandaCta();
}

module.exports = { pagina, cuerpo };
