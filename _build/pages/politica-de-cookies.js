/*
 * Política de cookies. TEXTO LITERAL de Politica_cookies.html.
 */

'use strict';

const L = require('../lib');
const { heroe } = require('../layout');
const { esc, icono } = L;

const pagina = {
  url: 'politica-de-cookies.html',
  tituloCorto: 'Política de cookies',
  hoja: 'Legal 03',
  title: 'Política de cookies de www.afriba.com | Almacenes Frigoríficos Ibarz, S.A.',
  description:
    'Qué son las cookies, qué tipos existen según su titularidad, plazo y finalidad, cómo desactivarlas y eliminarlas en cada navegador y cómo se acepta la política de cookies de www.afriba.com.',
  h1: 'Política de cookies',
  prioridad: '0.3',
  heroe: {
    entradilla: 'La web www.afriba.com informa acerca del uso de las cookies en su página web.',
  },
};

const NAVEGADORES = [
  ['Microsoft Internet Explorer o Microsoft Edge', 'http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies'],
  ['Mozilla Firefox', 'http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia'],
  ['Chrome', 'https://support.google.com/accounts/answer/61416?hl=es'],
  ['Safari', 'http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/'],
  ['Opera', 'http://help.opera.com/Linux/10.60/es-ES/cookies.html'],
];

const APARTADOS = [
  {
    titulo: '¿Qué son las cookies?',
    contenido: [
      { p: 'Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.' },
    ],
  },
  {
    titulo: 'Tipos de cookies',
    contenido: [
      { p: 'Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan se pueden distinguir dos tipos:' },
      {
        ul: [
          'Cookies propias: aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.',
          'Cookies de terceros: aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.',
        ],
      },
      { p: 'En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio editor, pero la información que se recoja mediante éstas sea gestionada por un tercero, no pueden ser consideradas como cookies propias.' },
      { p: 'Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de:' },
      {
        ul: [
          'Cookies de sesión: diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión (p.e. una lista de productos adquiridos).',
          'Cookies persistentes: los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.',
        ],
      },
      { p: 'Por último, existe otra clasificación con cinco tipos de cookies según la finalidad para la que se traten los datos obtenidos:' },
      {
        ul: [
          'Cookies técnicas: aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales.',
          'Cookies de personalización: permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.',
          'Cookies de análisis: permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.',
          'Cookies publicitarias: permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.',
          'Cookies de publicidad comportamental: almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función de este.',
          'Cookies de redes sociales externas: se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales (facebook, youtube, twitter, linedIn, etc..) y que se generen únicamente para los usuarios de dichas redes sociales. Las condiciones de utilización de estas cookies y la información recopilada se regulan por la política de privacidad de la plataforma social correspondiente.',
        ],
      },
    ],
  },
  {
    titulo: 'Desactivación y eliminación de cookies',
    contenido: [
      { p: 'Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en su equipo. Al desactivar cookies, algunos de los servicios disponibles podrían dejar de estar operativos. La forma de deshabilitar las cookies es diferente para cada navegador, pero normalmente puede hacerse desde el menú Herramientas u Opciones. También puede consultarse el menú de Ayuda del navegador dónde puedes encontrar instrucciones.' },
      { p: 'El usuario podrá en cualquier momento elegir qué cookies quiere que funcionen en este sitio web.' },
      { p: 'Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:' },
      { navegadores: true },
      { p: 'Además, también puede gestionar el almacén de cookies en su navegador a través de herramientas como las siguientes:' },
      { ul: ['Ghostery: www.ghostery.com/'] },
    ],
  },
  {
    titulo: 'Aceptación de la Política de cookies',
    contenido: [
      { p: 'www.afriba.com muestra información sobre su Política de cookies en la parte inferior o superior de cualquier página del portal con cada inicio de sesión con el objeto de que usted sea consciente.' },
      { p: 'Ante esta información es posible llevar a cabo las siguientes acciones:' },
      {
        ul: [
          'Aceptar cookies. No se volverá a visualizar este aviso al acceder a cualquier página del portal durante la presente sesión.',
          'Modificar su configuración. Podrá obtener más información sobre qué son las cookies, conocer la Política de cookies de www.afriba.com y modificar la configuración de su navegador.',
        ],
      },
    ],
  },
];

function bloque(b) {
  if (b.p) return '<p>' + esc(b.p) + '</p>';
  if (b.ul) return '<ul class="lista-marcada">' + b.ul.map((t) => '<li>' + esc(t) + '</li>').join('') + '</ul>';
  if (b.navegadores) {
    return (
      '<ul class="lista-enlaces">' +
      NAVEGADORES.map(
        (n) =>
          '<li><a href="' + esc(n[1]) + '" target="_blank" rel="noopener nofollow">' +
          esc(n[0]) + icono('externo') + '</a></li>'
      ).join('') +
      '</ul>'
    );
  }
  return '';
}

function cuerpo() {
  const usadas =
    '<section class="legal__apartado legal__apartado--destacado">' +
    '<h2 class="legal__titulo">Cookies que utiliza este sitio</h2>' +
    '<p>ALMACENES FRIGORIFICOS IBARZ, S.A. utiliza cookies técnicas propias y de terceros para la ' +
    'navegación en el sitio web. Este sitio carga <strong>Google Analytics</strong> (identificador ' +
    '<span class="mono">' + esc(require('../nav').SITE.analytics) + '</span>) para medir el uso de las ' +
    'páginas, y el <strong>mapa incrustado de Google Maps</strong> en las páginas de inicio y de contacto. ' +
    'Ambos son servicios de Google y pueden instalar cookies de terceros.</p>' +
    '</section>';

  const apartados = APARTADOS.map(
    (a) =>
      '<section class="legal__apartado">' +
      '<h2 class="legal__titulo">' + esc(a.titulo) + '</h2>' +
      a.contenido.map(bloque).join('') +
      '</section>'
  ).join('');

  return (
    heroe(pagina) +
    '<div class="seccion seccion--legal"><div class="contenedor contenedor--texto legal">' +
    usadas + apartados +
    '</div></div>'
  );
}

module.exports = { pagina, cuerpo };
