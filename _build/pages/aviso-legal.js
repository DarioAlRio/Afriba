/*
 * Aviso legal. TEXTO LITERAL de Aviso_legal.html del sitio original.
 * No se reescribe, no se resume y no se «mejora».
 */

'use strict';

const L = require('../lib');
const { heroe } = require('../layout');
const { esc } = L;

const pagina = {
  url: 'aviso-legal.html',
  tituloCorto: 'Aviso legal',
  hoja: 'Legal 01',
  title: 'Aviso legal de www.afriba.com | Almacenes Frigoríficos Ibarz, S.A.',
  description:
    'Aviso legal del sitio web www.afriba.com, titularidad de ALMACENES FRIGORIFICOS IBARZ, S.A.: objeto, identificación, comunicaciones, condiciones de acceso y legislación aplicable.',
  h1: 'Aviso legal',
  prioridad: '0.3',
  heroe: {
    entradilla:
      'El presente aviso legal regula el uso y utilización del sitio web www.afriba.com, del que es titular ALMACENES FRIGORIFICOS IBARZ, S.A.',
  },
};

const APARTADOS = [
  {
    titulo: 'OBJETO',
    contenido: [
      { p: 'El presente aviso legal regula el uso y utilización del sitio web www.afriba.com, del que es titular ALMACENES FRIGORIFICOS IBARZ, S.A. (en adelante, EL PROPIETARIO DE LA WEB).' },
      { p: 'La navegación por el sitio web de EL PROPIETARIO DE LA WEB le atribuye la condición de USUARIO del mismo y conlleva su aceptación plena y sin reservas de todas y cada una de las condiciones publicadas en este aviso legal, advirtiendo de que dichas condiciones podrán ser modificadas sin notificación previa por parte de EL PROPIETARIO DE LA WEB, en cuyo caso se procederá a su publicación y aviso con la máxima antelación posible.' },
      { p: 'Por ello es recomendable leer atentamente su contenido en caso de desear acceder y hacer uso de la información y de los servicios ofrecidos desde este sitio web.' },
      { p: 'El usuario, además, se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal, y responderá frente a EL PROPIETARIO DE LA WEB o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.' },
      { p: 'Cualquier utilización distinta a la autorizada está expresamente prohibida, pudiendo EL PROPIETARIO DE LA WEB denegar o retirar el acceso y su uso en cualquier momento.' },
    ],
  },
  {
    titulo: 'IDENTIFICACION',
    contenido: [
      { p: 'EL PROPIETARIO DE LA WEB, en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informa de que:' },
      {
        ul: [
          'Su denominación social es: ALMACENES FRIGORIFICOS IBARZ, S.A.',
          'Su CIF es: A82423641',
          'Su domicilio social está en: C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID',
          'Registro Mercantil de MADRID T 30602 , F 6, S 8, H M 247598, I/A 34',
        ],
      },
      { p: 'Todas las notificaciones y comunicaciones entre los usuarios y PROPIETARIO DE LA WEB se considerarán eficaces, a todos los efectos, cuando se realicen a través de cualquier medio de los detallados anteriormente.' },
    ],
  },
  {
    titulo: 'COMUNICACIONES',
    contenido: [
      { p: 'Para comunicarse con nosotros, ponemos a su disposición diferentes medios de contacto que detallamos a continuación:' },
      { ul: ['Tfno.: 915 07 92 55', 'Email: lopd@vanhessen.com'] },
    ],
  },
  {
    titulo: 'CONDICIONES DE ACCESO Y UTILIZACIÓN',
    contenido: [
      { p: 'El sitio web y sus servicios son de acceso libre y gratuito. No obstante, PROPIETARIO DE LA WEB puede condicionar la utilización de algunos de los servicios ofrecidos en su web a la previa cumplimentación del correspondiente formulario.' },
      { p: 'El usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique a PROPIETARIO DE LA WEB y será el único responsable de las manifestaciones falsas o inexactas que realice.' },
      { p: 'El usuario se compromete expresamente a hacer un uso adecuado de los contenidos y servicios de PROPIETARIO DE LA WEB y a no emplearlos para, entre otros:' },
      {
        ul: [
          'Difundir contenidos delictivos, violentos, pornográficos, racistas, xenófobos, ofensivos, de apología del terrorismo o, en general, contrarios a la ley o al orden público.',
          'Introducir en la red virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en los documentos electrónicos, datos o sistemas físicos y lógicos de PROPIETARIO DE LA WEB o de terceras personas; así como obstaculizar el acceso de otros usuarios al sitio web y a sus servicios mediante el consumo masivo de los recursos informáticos a través de los cuales PROPIETARIO DE LA WEB presta sus servicios.',
          'Intentar acceder a las cuentas de correo electrónico de otros usuarios o a áreas restringidas de los sistemas informáticos de PROPIETARIO DE LA WEB o de terceros y, en su caso, extraer información.',
          'Vulnerar los derechos de propiedad intelectual o industrial, así como violar la confidencialidad de la información de PROPIETARIO DE LA WEB o de terceros.',
          'Suplantar la identidad de cualquier otro usuario.',
          'Reproducir, copiar, distribuir, poner a disposición de, o cualquier otra forma de comunicación pública, transformar o modificar los contenidos, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido.',
          'Recabar datos con finalidad publicitaria y de remitir publicidad de cualquier clase y comunicaciones con fines de venta u otras de naturaleza comercial sin que medie su previa solicitud o consentimiento.',
        ],
      },
      { p: 'Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a PROPIETARIO DE LA WEB, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.' },
      { p: 'En definitiva, los usuarios que accedan a este sitio web pueden visualizar los contenidos y efectuar, en su caso, copias privadas autorizadas siempre que los elementos reproducidos no sean cedidos posteriormente a terceros, ni se instalen a servidores conectados a redes, ni sean objeto de ningún tipo de explotación.' },
      { p: 'Asimismo, todas las marcas, nombres comerciales o signos distintivos de cualquier clase que aparecen en el sitio web son propiedad de PROPIETARIO DE LA WEB, sin que pueda entenderse que el uso o acceso al mismo atribuya al usuario derecho alguno sobre los mismos.' },
      { p: 'La distribución, modificación, cesión o comunicación pública de los contenidos y cualquier otro acto que no haya sido expresamente autorizado por el titular de los derechos de explotación quedan prohibidos.' },
      { p: 'El establecimiento de un hiperenlace no implica en ningún caso la existencia de relaciones entre PROPIETARIO DE LA WEB y el propietario del sitio web en la que se establezca, ni la aceptación y aprobación por parte de PROPIETARIO DE LA WEB de sus contenidos o servicios.' },
      { p: 'PROPIETARIO DE LA WEB no se responsabiliza del uso que cada usuario les dé a los materiales puestos a disposición en este sitio web ni de las actuaciones que realice en base a los mismos.' },
      { h4: '4.1. EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD EN EL ACCESO Y LA UTILIZACIÓN' },
      { p: 'El contenido del presente sitio web es de carácter general y tiene una finalidad meramente informativa, sin que se garantice plenamente el acceso a todos los contenidos, ni su exhaustividad, corrección, vigencia o actualidad, ni su idoneidad o utilidad para un objetivo específico.' },
      { p: 'PROPIETARIO DE LA WEB excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:' },
      {
        ul: [
          'La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos, así como la existencia de vicios y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados, puestos a disposición, a los que se haya accedido a través del sitio web o de los servicios que se ofrecen.',
          'La presencia de virus o de otros elementos en los contenidos que puedan producir alteraciones en los sistemas informáticos, documentos electrónicos o datos de los usuarios.',
          'El incumplimiento de las leyes, la buena fe, el orden público, los usos del tráfico y el presente aviso legal como consecuencia del uso incorrecto del sitio web. En particular, y a modo ejemplificativo, PROPIETARIO DE LA WEB no se hace responsable de las actuaciones de terceros que vulneren derechos de propiedad intelectual e industrial, secretos empresariales, derechos al honor, a la intimidad personal y familiar y a la propia imagen, así como la normativa en materia de competencia desleal y publicidad ilícita.',
        ],
      },
      { p: 'Asimismo, PROPIETARIO DE LA WEB declina cualquier responsabilidad respecto a la información que se halle fuera de esta web y no sea gestionada directamente por nuestro webmaster. La función de los links que aparecen en esta web es exclusivamente la de informar al usuario sobre la existencia de otras fuentes susceptibles de ampliar los contenidos que ofrece este sitio web. PROPIETARIO DE LA WEB no garantiza ni se responsabiliza del funcionamiento o accesibilidad de los sitios enlazados; ni sugiere, invita o recomienda la visita a los mismos, por lo que tampoco será responsable del resultado obtenido. PROPIETARIO DE LA WEB no se responsabiliza del establecimiento de hipervínculos por parte de terceros.' },
      { h4: '4.2. PROCEDIMIENTO EN CASO DE REALIZACIÓN DE ACTIVIDADES DE CARÁCTER ILÍCITO' },
      { p: 'En el caso de que cualquier usuario o un tercero considere que existen hechos o circunstancias que revelen el carácter ilícito de la utilización de cualquier contenido y/o de la realización de cualquier actividad en las páginas web incluidas o accesibles a través del sitio web, deberá enviar una notificación a PROPIETARIO DE LA WEB identificándose debidamente y especificando las supuestas infracciones.' },
      { h4: '4.3. PUBLICACIONES' },
      { p: 'La información administrativa facilitada a través del sitio web no sustituye la publicidad legal de las leyes, normativas, planes, disposiciones generales y actos que tengan que ser publicados formalmente a los diarios oficiales de las administraciones públicas, que constituyen el único instrumento que da fe de su autenticidad y contenido. La información disponible en este sitio web debe entenderse como una guía sin propósito de validez legal.' },
    ],
  },
  {
    titulo: 'LEGISLACIÓN APLICABLE',
    contenido: [
      { p: 'Las condiciones presentes se regirán por la legislación española vigente.' },
      { p: 'La lengua utilizada será el Castellano.' },
    ],
  },
];

function bloque(b) {
  if (b.p) return '<p>' + esc(b.p) + '</p>';
  if (b.ul) return '<ul class="lista-marcada">' + b.ul.map((t) => '<li>' + esc(t) + '</li>').join('') + '</ul>';
  if (b.h4) return '<h3 class="legal__sub">' + esc(b.h4) + '</h3>';
  return '';
}

function cuerpo() {
  const apartados = APARTADOS.map(
    (a, i) =>
      '<section class="legal__apartado">' +
      '<h2 class="legal__titulo"><span class="legal__n">' + (i + 1) + '</span>' + esc(a.titulo) + '</h2>' +
      a.contenido.map(bloque).join('') +
      '</section>'
  ).join('');

  return (
    heroe(pagina) +
    '<div class="seccion seccion--legal"><div class="contenedor contenedor--texto legal">' +
    apartados +
    '</div></div>'
  );
}

module.exports = { pagina, cuerpo };
