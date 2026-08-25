/* La cámara de congelación. */

'use strict';

const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, despiece, figura, lector, cajetin, imagen } = L;

const pagina = {
  url: 'camara-frigorifica.html',
  tituloCorto: 'Cámara frigorífica',
  hoja: 'Hoja 11 · Cámara',
  title: 'Cámara frigorífica de −22 °C con 8.943 palés | AFRIBA',
  description:
    'Cámara de congelación de 3.388 m² y 15 m de altura, con capacidad para 8.943 palés, 26 pasillos de estanterías móviles, 640 kW de potencia y ocho sondas de temperatura independientes.',
  h1: '3.388 m² a quince metros de altura, siempre por debajo de −22 °C',
  prioridad: '0.8',
  heroe: {
    entradilla:
      'Una única cámara con estanterías móviles: 26 pasillos, hasta siete alturas de ubicación y 8.943 huecos de palé. La atmósfera se mantiene seca para que no se forme hielo.',
  },
};

function cuerpo() {
  const vista =
    '<section class="seccion seccion--vista">' +
    '<div class="contenedor">' +
    '<div class="vista-cotas">' +
    imagen('camara-pasillo-estanterias.jpg', 'Pasillo de la cámara de congelación entre estanterías móviles cargadas de palés hasta siete alturas, con una carretilla trilateral al fondo', { prioritaria: true, sizes: '(min-width: 76rem) 72rem, 96vw' }) +
    '<div class="cotas" aria-hidden="true">' +
    '<span class="cota cota--v"><span class="cota__valor">15 m</span></span>' +
    '<span class="cota cota--h"><span class="cota__valor">26 pasillos</span></span>' +
    '<span class="cota cota--p"><span class="cota__valor">7 alturas</span></span>' +
    '</div></div>' +
    '<p class="pie-vista"><span class="figura__ref">V-01</span> Pasillo entre estanterías móviles. ' +
    'Las cotas señalan la altura libre, el número de pasillos y las alturas de ubicación.</p>' +
    '</div></section>';

  const detalle =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">Despiece 11.1</p>' +
    '<h2 class="seccion__titulo">Cámara almacén en régimen de −22 °C</h2>' +
    despiece(D.CAMARA.map(esc)) +
    '</div>' +
    '<aside class="detalle__lateral">' +
    lector('−22,7', '°C', 'Temperatura media de cámara', {
      nota: 'Ocho sondas independientes, E1 a E8, en el centro del recinto',
    }) +
    cajetin({
      ref: '11.1',
      titulo: 'Resumen',
      filas: [
        ['Superficie', '3.388 m²'],
        ['Altura', '15 m'],
        ['Huecos de palé', '8.943'],
        ['Pasillos', '26'],
        ['Alturas', 'Hasta 7'],
        ['Potencia', '640 kW'],
      ],
    }) +
    '</aside>' +
    '</div></section>';

  const scada =
    '<section class="seccion seccion--frio">' +
    '<div class="contenedor frio__interior">' +
    '<div class="frio__texto">' +
    '<p class="hoja hoja--claro">Registro termográfico</p>' +
    '<h2 class="seccion__titulo seccion__titulo--claro">Ocho sondas, ocho lecturas</h2>' +
    '<p>El control y los registros termográficos se hacen mediante <strong>ocho sondas de temperatura ' +
    'independientes</strong> dispuestas en el centro de la cámara. Cada una tiene su propio evaporador ' +
    'asociado, de 89,17 kW con tres ventiladores de 1,40 kW.</p>' +
    '<p>La pantalla del SCADA de la sala de máquinas muestra la media de cámara y las ocho lecturas ' +
    'individuales, con el estado de marcha de ventiladores, enfriamiento, desescarche y protecciones ' +
    'eléctricas de cada unidad.</p>' +
    '</div>' +
    '<div class="frio__pantalla">' +
    figura('scada-lectura-camara.png', 'Pantalla del SCADA con la temperatura media de la cámara 1 en −22,7 grados y las lecturas de las ocho sondas E1 a E8, entre −22,4 y −23,3 grados, con los estados de marcha de ventiladores, enfriamiento, desescarche y protecciones eléctricas', {
      pie: 'SCADA de la sala de máquinas: media de cámara y sondas E1 a E8.',
      ref: 'V-02',
      sizes: '(min-width: 62rem) 34rem, 92vw',
    }) +
    '</div></div></section>';

  const alrededor =
    '<section class="seccion seccion--partes">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza"><p class="hoja">Continúa</p>' +
    '<h2 class="seccion__titulo">Lo que rodea a la cámara</h2></div>' +
    '<ul class="partes partes--dos">' +
    [
      ['muelles.html', 'Muelles y antecámara', 'muelles-camiones.jpg', 'Camiones frigoríficos estacionados frente a las dársenas de carga', 'Dos puertas térmicas automatizadas separan la cámara de la antecámara a +8 °C.'],
      ['equipamiento.html', 'Sala de máquinas', 'sala-de-maquinas-compresores.jpg', 'Compresores y tuberías calorifugadas de la sala de máquinas', 'Los 640 kW que mantienen la cámara salen de aquí: dos compresores de tornillo y uno alternativo.'],
    ]
      .map(
        (p) =>
          '<li class="parte"><a href="' + p[0] + '">' +
          '<span class="parte__foto">' + imagen(p[2], p[3], { sizes: '(min-width: 62rem) 26rem, 45vw' }) + '</span>' +
          '<span class="parte__cuerpo"><span class="parte__titulo">' + esc(p[1]) + '</span>' +
          '<span class="parte__dato">' + esc(p[4]) + '</span></span>' + icono('flecha') + '</a></li>'
      )
      .join('') +
    '</ul></div></section>';

  return heroe(pagina) + vista + detalle + scada + alrededor + bandaCta();
}

module.exports = { pagina, cuerpo };
