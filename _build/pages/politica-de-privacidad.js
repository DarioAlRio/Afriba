/*
 * Política de privacidad. TEXTO LITERAL de Politica_privacidad.html.
 * Dos tratamientos: datos de clientes y datos de potenciales clientes y
 * contactos. Las tablas de «Información básica» se conservan como tablas.
 */

'use strict';

const L = require('../lib');
const { heroe } = require('../layout');
const { esc, cuadro } = L;

const pagina = {
  url: 'politica-de-privacidad.html',
  tituloCorto: 'Política de privacidad',
  hoja: 'Legal 02',
  title: 'Política de privacidad y protección de datos | Almacenes Frigoríficos Ibarz, S.A.',
  description:
    'Información sobre el tratamiento de datos personales de clientes y de potenciales clientes y contactos en ALMACENES FRIGORIFICOS IBARZ, S.A.: finalidad, legitimación, destinatarios y derechos.',
  h1: 'Política de privacidad',
  prioridad: '0.3',
  heroe: {
    entradilla:
      'En ALMACENES FRIGORIFICOS IBARZ, S.A. nos preocupamos por la privacidad y la transparencia. A continuación, le indicamos en detalle los tratamientos de datos personales que realizamos, así como toda la información relativa a los mismos.',
  },
};

const DERECHOS_COMUNES = [
  'Cualquier persona tiene derecho a obtener confirmación sobre si en ALMACENES FRIGORIFICOS IBARZ, S.A. estamos tratando, o no, datos personales que les conciernan.',
  'Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Igualmente tiene derecho a la portabilidad de sus datos.',
  'En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.',
  'En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. En este caso, ALMACENES FRIGORIFICOS IBARZ, S.A. dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.',
  'Podrá ejercitar materialmente sus derechos de la siguiente forma: dirigiéndose a lopd@vanhessen.com o C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID.',
  'Cuando se realice el envío de comunicaciones comerciales utilizando como base jurídica el interés legítimo del responsable, el interesado podrá oponerse al tratamiento de sus datos con ese fin.',
  'Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.',
  'En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente a través de su sitio web: www.aepd.es.',
];

const RESPONSABLE = [
  ['Denominación', 'ALMACENES FRIGORIFICOS IBARZ, S.A.'],
  ['CIF', 'A82423641'],
  ['Dirección', 'C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID'],
  ['Teléfono', '915 07 92 55'],
  ['Correo electrónico', 'lopd@vanhessen.com'],
];

const CATEGORIAS = ['Datos identificativos.', 'Direcciones postales y electrónicas.', 'Información comercial.'];

const TRATAMIENTOS = [
  {
    id: 'clientes',
    titulo: 'Tratamiento de los datos de clientes',
    basica: [
      ['Responsable', 'ALMACENES FRIGORIFICOS IBARZ, S.A.'],
      ['Finalidad', 'Prestar los servicios solicitados y enviar comunicaciones promocionales.'],
      ['Legitimación', 'Ejecución de un contrato. Interés legítimo del Responsable.'],
      ['Destinatarios', 'Están previstas cesiones de datos a: Administración Tributaria y Entidades Financieras.'],
      ['Derechos', 'Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a lopd@vanhessen.com o C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID.'],
      ['Procedencia', 'El propio interesado'],
    ],
    apartados: [
      {
        titulo: '¿Quién es el responsable del tratamiento de sus datos?',
        tabla: RESPONSABLE,
      },
      {
        titulo: '¿Con qué finalidad tratamos sus datos personales?',
        parrafos: [
          'En ALMACENES FRIGORIFICOS IBARZ, S.A. tratamos la información que nos facilitan las personas interesadas con el fin de realizar la gestión administrativa, contable y fiscal de los servicios solicitados, así como enviar comunicaciones promocionales sobre nuestros productos y servicios. En el caso de que no facilite sus datos personales, no podremos cumplir con las finalidades descritas.',
          'No se van a tomar decisiones automatizadas en base a los datos proporcionados.',
        ],
      },
      {
        titulo: '¿Por cuánto tiempo conservaremos sus datos?',
        parrafos: ['Los datos se conservarán mientras el interesado no solicite su supresión, y en su caso, durante los años necesarios para cumplir con las obligaciones legales.'],
      },
      {
        titulo: '¿Cuál es la legitimación para el tratamiento de sus datos?',
        parrafos: ['Le indicamos la base legal para el tratamiento de sus datos:'],
        lista: [
          'Ejecución de un contrato: Gestión fiscal, contable y administrativa de clientes. (RGPD art. 6.1.b).',
          'Interés legítimo del Responsable: Envío de comunicaciones promocionales incluso por vía electrónica. (RGPD Considerando 47, LSSICE art. 21.2).',
        ],
      },
      {
        titulo: '¿A qué destinatarios se comunicarán sus datos?',
        parrafos: ['Los datos se comunicarán a los siguientes destinatarios:'],
        lista: [
          'Administración Tributaria, con la finalidad de cumplir con las obligaciones legales (requisito legal).',
          'Entidades financieras, con la finalidad de girar los recibos correspondientes (requisito contractual).',
        ],
      },
      {
        titulo: 'Transferencias de datos a terceros países',
        parrafos: ['No están previstas transferencias de datos a terceros países.'],
      },
      {
        titulo: '¿Cuáles son sus derechos cuando nos facilita sus datos?',
        parrafos: DERECHOS_COMUNES,
      },
      {
        titulo: '¿Cómo hemos obtenido sus datos?',
        parrafos: ['Los datos personales que tratamos en ALMACENES FRIGORIFICOS IBARZ, S.A. proceden de: El propio interesado.', 'Las categorías de datos que se tratan son:'],
        lista: CATEGORIAS,
      },
    ],
  },
  {
    id: 'contactos',
    titulo: 'Tratamiento de los datos de potenciales clientes y contactos',
    basica: [
      ['Responsable', 'ALMACENES FRIGORIFICOS IBARZ, S.A.'],
      ['Finalidad', 'Atender su solicitud y enviarle comunicaciones promocionales.'],
      ['Legitimación', 'Ejecución de un contrato. Consentimiento del interesado. Interés legítimo del Responsable.'],
      ['Destinatarios', 'No se cederán datos a terceros, salvo obligación legal.'],
      ['Derechos', 'Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a lopd@vanhessen.com o C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID.'],
      ['Procedencia', 'El propio interesado'],
    ],
    apartados: [
      {
        titulo: '¿Quién es el responsable del tratamiento de sus datos?',
        tabla: RESPONSABLE,
      },
      {
        titulo: '¿Con qué finalidad tratamos sus datos personales?',
        parrafos: [
          'En ALMACENES FRIGORIFICOS IBARZ, S.A. tratamos la información que nos facilitan las personas interesadas con el fin de realizar la gestión de potenciales clientes que se han interesado sobre nuestros productos y/o servicios, así como otros contactos comerciales y realizar, en su caso, el envío de comunicaciones promocionales, inclusive por vía electrónica. En el caso de que no facilite sus datos personales, no podremos cumplir con las finalidades descritas.',
          'No se van a tomar decisiones automatizadas en base a los datos proporcionados.',
        ],
      },
      {
        titulo: '¿Por cuánto tiempo conservaremos sus datos?',
        parrafos: ['Los datos se conservarán mientras el interesado no solicite su supresión.'],
      },
      {
        titulo: '¿Cuál es la legitimación para el tratamiento de sus datos?',
        parrafos: ['Le indicamos la base legal para el tratamiento de sus datos:'],
        lista: [
          'Ejecución de un contrato: Gestión de potenciales clientes que se han interesado sobre nuestros productos y/o servicios. (RGPD, art. 6.1.b).',
          'Consentimiento del interesado: Enviar comunicaciones promocionales, inclusive por vía electrónica. (RGPD, art. 6.1.a, LSSICE art.21).',
          'Interés legítimo del Responsable: Gestión de los datos de contacto profesionales (LOPDGDD art.19, RGPD art. 6.1.f).',
        ],
      },
      {
        titulo: '¿A qué destinatarios se comunicarán sus datos?',
        parrafos: ['No se cederán datos a terceros, salvo obligación legal.'],
      },
      {
        titulo: 'Transferencias de datos a terceros países',
        parrafos: ['No están previstas transferencias de datos a terceros países.'],
      },
      {
        titulo: '¿Cuáles son sus derechos cuando nos facilita sus datos?',
        parrafos: DERECHOS_COMUNES,
      },
      {
        titulo: '¿Cómo hemos obtenido sus datos?',
        parrafos: ['Los datos personales que tratamos en ALMACENES FRIGORIFICOS IBARZ, S.A. proceden de: El propio interesado.', 'Las categorías de datos que se tratan son:'],
        lista: CATEGORIAS,
      },
    ],
  },
];

function apartado(a, i) {
  return (
    '<section class="legal__apartado">' +
    '<h3 class="legal__titulo legal__titulo--menor"><span class="legal__n">' + (i + 1) + '</span>' + esc(a.titulo) + '</h3>' +
    (a.parrafos ? a.parrafos.map((p) => '<p>' + esc(p) + '</p>').join('') : '') +
    (a.lista ? '<ul class="lista-marcada">' + a.lista.map((t) => '<li>' + esc(t) + '</li>').join('') + '</ul>' : '') +
    (a.tabla
      ? cuadro('Datos del responsable del tratamiento', ['Concepto', 'Valor'], a.tabla.map((f) => [esc(f[0]), esc(f[1])]))
      : '') +
    '</section>'
  );
}

function cuerpo() {
  const bloques = TRATAMIENTOS.map(
    (t) =>
      '<section class="legal__tratamiento" id="' + t.id + '">' +
      '<h2 class="legal__titulo">' + esc(t.titulo) + '</h2>' +
      cuadro(
        'Información básica sobre Protección de datos — ' + t.titulo,
        ['Concepto', 'Información'],
        t.basica.map((f) => [esc(f[0]), esc(f[1])])
      ) +
      '<p class="legal__intro"><strong>Información completa sobre Protección de Datos.</strong></p>' +
      t.apartados.map(apartado).join('') +
      '</section>'
  ).join('');

  return (
    heroe(pagina) +
    '<div class="seccion seccion--legal"><div class="contenedor contenedor--texto legal">' +
    bloques +
    '</div></div>'
  );
}

module.exports = { pagina, cuerpo };
