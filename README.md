# AFRIBA · sitio web

Sitio web nuevo de **ALMACENES FRIGORIFICOS IBARZ, S. A.**, el almacén
frigorífico público de la Plataforma Baja de Mercamadrid.

Es el mismo negocio y el mismo contenido que había en `www.afriba.com`,
reorganizado y vuelto a construir desde cero: 22 páginas de HTML estático, sin
base de datos, sin servidor y sin ninguna librería de terceros.

---

## Lo primero: cómo se ve en tu ordenador

Necesitas Node instalado (vale cualquier versión de la 14 en adelante). En una
terminal, dentro de esta carpeta:

```bash
node _build/serve.js 4321
```

Y abres `http://localhost:4321` en el navegador. Para pararlo, `Ctrl + C`.

Si solo quieres mirar una página suelta, también puedes abrir el `.html`
haciendo doble clic. Se verá bien, aunque el mapa incrustado y la tipografía
de Google pueden tardar más.

---

## Cómo se sube a un alojamiento

Se copia la carpeta tal cual. No hay nada que compilar en el servidor, ni
`npm install`, ni versión mínima de PHP.

**Lo que hay que subir:**

```
*.html            las 22 páginas + los 6 archivos de redirección
assets/           css, js, imágenes y PDF
sitemap.xml
robots.txt
.htaccess         (Apache) — redirecciones, 404, compresión y caché
_redirects        (Netlify / Cloudflare Pages) — las mismas redirecciones
favicon.svg  favicon-32.png  apple-touch-icon.png
```

**Lo que no hace falta subir** (no rompe nada si va, pero deja el generador a
la vista): `_build/`, `build.js`, `_original-sitio/`, `_capturas/`,
`README.md`, `PENDIENTE.md`, `PRODUCT.md`, `DESIGN.md`, y `node_modules/` si
vuelve a aparecer.

### Si se publica con GitHub Pages

El repositorio (`github.com/DarioAlRio/Afriba`) lleva un `.nojekyll` para que
GitHub sirva los archivos tal cual, sin procesarlos. Con eso, activar Pages
desde *Settings → Pages → Deploy from a branch → main / (root)* deja el sitio
en línea sin tocar nada más.

Dos avisos, porque Pages no es un servidor completo:

- **No lee `.htaccess` ni `_redirects`.** De las redirecciones antiguas solo
  funcionarían los 6 archivos de refresco. Las 12 reglas 301 se pierden, así
  que como destino definitivo Pages es peor que un alojamiento normal.
- **El formulario no enviará nada**, porque `cgi-bin/afriba.exe` no existe
  allí. Quedaría solo la salida por correo. Ver `PENDIENTE.md`.

Para una vista previa que enseñar al cliente va perfecto. Para publicar de
verdad, mejor el alojamiento donde vive hoy `afriba.com`.

### La página de error 404

Hay una `404.html` propia, con el buscador de secciones y los teléfonos. Para
que el servidor la use:

- **Apache:** ya está puesto en el `.htaccess` (`ErrorDocument 404 /404.html`).
- **Nginx:** añadir en el bloque del sitio
  `error_page 404 /404.html;`
- **Netlify, Vercel y Cloudflare Pages:** la detectan solas por el nombre. No
  hay que hacer nada.
- **IIS (Windows):** en `web.config`, dentro de `<system.webServer>`:
  `<httpErrors errorMode="Custom"><remove statusCode="404"/><error statusCode="404" path="/404.html" responseMode="ExecuteURL"/></httpErrors>`

---

## Qué archivo hay que tocar para cambiar cada cosa

**Ninguna página `.html` se edita a mano.** Todas están generadas. Si editas un
`.html` directamente, el siguiente `node build.js` borrará el cambio.

Después de tocar cualquier archivo de `_build/`, se ejecuta:

```bash
node build.js
```

que regenera las 22 páginas, el `sitemap.xml`, el `robots.txt`, el `.htaccess`
y el `_redirects`, y **comprueba** que no haya quedado ningún enlace roto,
ninguna imagen que falte, ninguna página con dos `<h1>` ni dos páginas con el
mismo título. Si algo falla, sale con error y dice qué es.

| Quiero cambiar… | Archivo |
|---|---|
| Un teléfono, un correo, la dirección, el CIF, los horarios | `_build/nav.js` → objeto `SITE` |
| El menú: familias, orden, textos de los desplegables | `_build/nav.js` → `NAV` |
| El pie de página | `_build/nav.js` → `FOOT` |
| El destino del formulario | `_build/nav.js` → `SITE.endpointFormulario` |
| El código de Google Analytics (o quitarlo) | `_build/nav.js` → `SITE.analytics` |
| Cifras de la instalación, servicios, certificados, equipo, textos legales | `_build/data.js` |
| El contenido de **una** página concreta | `_build/pages/<nombre>.js` |
| La cabecera, el mega-menú, el cajón, el pie, el `<head>`, los datos estructurados | `_build/layout.js` |
| Iconos, cuadros, galerías, cajetines: las piezas reutilizables | `_build/lib.js` |
| Colores, tipografías, espacios, cualquier detalle visual | `assets/css/site.css` |
| Comportamiento: menú, cajón, visor, validación, cookies | `assets/js/site.js` |
| Añadir o quitar una página | `_build/pages/` + la lista de `build.js` |
| Recomprimir imágenes nuevas | `npm install sharp@0.32.6` y luego `node _build/imagenes.js`. Se puede borrar `node_modules` al terminar: el sitio no lo necesita |

### Cómo se añade una página

1. Copiar un archivo parecido de `_build/pages/` con el nombre nuevo.
2. Ajustar el objeto `pagina` de arriba: `url`, `title`, `description`, `h1`,
   `tituloCorto`, `prioridad` y el héroe.
3. Añadirla a la lista `PAGINAS` de `build.js`.
4. Si tiene que salir en el menú, añadirla también en `NAV` (`_build/nav.js`);
   si va solo en el pie, en `FOOT`.
5. `node build.js`.

---

## Estructura de la carpeta

```
Afriba/
├── build.js                 genera el sitio y lo verifica
├── _build/
│   ├── nav.js               datos del negocio, menú y pie
│   ├── data.js              contenidos compartidos (cifras, servicios, textos)
│   ├── layout.js            <head>, cabecera, cajón, héroes, pie
│   ├── lib.js               iconos SVG y componentes (cuadros, galería…)
│   ├── imagenes.js          recompresión y generación de WebP
│   ├── imagenes.json        medidas reales de cada imagen (lo usa lib.js)
│   ├── serve.js             servidor de vista previa
│   └── pages/               una definición por página (22 archivos)
├── assets/
│   ├── css/site.css         la única hoja de estilo
│   ├── js/site.js           el único guion
│   ├── img/                 imágenes publicadas (jpg/png + webp)
│   │   └── _original/       las descargadas del sitio antiguo, sin tocar
│   └── docs/                los 6 PDF del sitio antiguo
├── _original-sitio/         copia del HTML y el CSS antiguos, como referencia
├── _capturas/               capturas de las diez páginas principales, a 1440 y 390 px
├── *.html                   las 22 páginas generadas
├── RRHH.html, 171225.html…   6 archivos de redirección al nuevo destino
├── sitemap.xml  robots.txt  .htaccess  _redirects
├── PRODUCT.md               qué es el negocio y qué promete el sitio
├── DESIGN.md                el sistema de diseño, token a token
└── PENDIENTE.md             lo que falta decidir antes de publicar
```

---

## Cómo se ha reorganizado el menú

El sitio antiguo tenía **un menú plano de nueve entradas** en el que convivían
una sección de servicios, una convocatoria de Junta General y el aviso legal.
El nuevo agrupa lo mismo en **cinco familias temáticas**, cada una con su
página general y su desplegable.

| Familia | Qué contiene |
|---|---|
| **Instalación** | Vista general · Cámara frigorífica · Muelles y antecámara · Sala de máquinas y parque móvil · Seguridad y vigilancia · Oficinas en alquiler |
| **Servicios** | Qué hacemos · Trazabilidad y radiofrecuencia · Certificaciones y calidad |
| **Operativa** | Horarios y operativa · Acceso de transportistas · Gestión en línea de stocks |
| **Empresa** | Quiénes somos · Equipo y contactos directos · Junta General de accionistas |
| **Contacto** | Cómo llegar y a quién llamar · Solicitar presupuesto |

En pantalla grande cada familia abre un desplegable de dos columnas con una
frase explicando cada enlace y una foto de apoyo. En móvil, un cajón lateral
con las cinco familias plegadas.

### Tabla de URL: dónde ha ido a parar cada página

Todas las direcciones antiguas siguen funcionando. Las que cambian de nombre
llevan una redirección **301 permanente** (en `.htaccess` y en `_redirects`), y
las que además cambian de mayúsculas llevan un archivo de refresco por si el
alojamiento no admite reglas.

| URL antigua | Ahora | Cómo |
|---|---|---|
| `Index.html` | `index.html` | 301 |
| `Servicios.html` | `servicios.html` | 301 |
| `Equipamiento.html` | `equipamiento.html` | 301 |
| `Clientes.html` | `clientes.html` | 301 |
| `Presupuesto.html` | `presupuesto.html` | 301 |
| `Contacto.html` | `presupuesto.html` | 301 · era una página huérfana con el mismo formulario |
| `RRHH.html` | `equipo.html` | 301 · el contenido eran los contactos del equipo, no ofertas de empleo |
| `171225.html` | `junta-general.html` | 301 · convocatoria vigente |
| `221124.html` | `junta-general.html` | 301 · convocatoria anterior, plegada en la misma página |
| `Aviso_legal.html` | `aviso-legal.html` | 301 |
| `Politica_privacidad.html` | `politica-de-privacidad.html` | 301 |
| `Politica_cookies.html` | `politica-de-cookies.html` | 301 |
| `Resumen.asp?…` | igual | No se toca: es la aplicación de stocks, que sigue donde estaba |
| `cgi-bin/afriba.exe/contacto` | igual | Sigue siendo el destino del formulario |

**Páginas nuevas** (contenido que existía pero estaba amontonado en tres
páginas larguísimas): `instalacion.html`, `camara-frigorifica.html`,
`muelles.html`, `seguridad.html`, `oficinas.html`, `trazabilidad.html`,
`certificaciones.html`, `transportistas.html`, `gestion-en-linea.html`,
`empresa.html`, `contacto.html` y `404.html`.

---

## El sistema de diseño, en corto

La explicación completa está en `DESIGN.md`. Lo esencial: **el sitio se dibuja
como el plano de la instalación que describe**. Fondo de papel de plano, tinta
azul marino, la masa construida en el azul del isotipo y una sola señal ámbar,
la misma que usa el recinto para las líneas del suelo.

**Ningún color es inventado.** Todos salen del logotipo, del CSS antiguo o de
la pantalla del SCADA:

| Token | Valor | De dónde sale |
|---|---|---|
| `--tinta` | `#00156E` | Color de los títulos y del menú en `EstilosAfriba.css`, y azul marino dominante del logotipo |
| `--azul-marca` | `#002D9A` | Píxel dominante del triángulo del isotipo (`detalle1.gif`) |
| `--azul-medio` | `#0024BB` | Fondo de cabecera y color de `:hover` del menú antiguo |
| `--azul-vivo` | `#0040FA` | Destacados en línea del HTML antiguo |
| `--ambar` | `#FAB500` | Botón del aviso de cookies del sitio antiguo |
| `--ambar-claro` | `#FFEA91` | Fondo de las cajas de detalle del CSS antiguo |
| `--ambar-tinta` | `#6E5800` | Tono de oro oscuro del CSS antiguo |
| `--hielo` | `#EDF1F8` | Muestreado del halo claro del logotipo (`#E6E6F0`, `#D7DFEF`) |
| `--texto` | `#000622` | Color de texto del `body` en el CSS antiguo |
| `--lector-cian` | `#4FE3F2` | Numeral de la pantalla del SCADA (`scada.png`) |

Dos colores tuvieron que ganarse una variante propia porque el original **no
llega a contraste**, y la regla fue no cambiar el color de marca sino crear su
versión de tinta:

- `--ambar` da **1,80:1** sobre blanco: sirve como fondo de botón, nunca como
  borde ni como texto. Para eso está `--ambar-borde` `#A87B00` (3,82:1 sobre blanco, 3,37:1 sobre hielo) y
  `--ambar-tinta` `#6E5800`.
- El gris azulado de los separadores se oscureció hasta `--borde-fuerte`
  `#6B7AA8` (3,73:1 sobre hielo) para que los bordes de los controles se vean.

**Tipografías:** `Jost` para rótulos (continúa la Century Gothic / Gill Sans MT
del sitio antiguo), `Archivo` para el texto y `Roboto Mono` para códigos,
medidas y horarios. Se cargan de Google Fonts con `preconnect` y
`display=swap`, y las tres tienen pila de reserva del sistema.

**Escala:** siete pasos en `clamp()`, calculados entre 360 px y 1440 px. No hay
saltos: cualquier ancho intermedio interpola.

---

## Decisiones técnicas, y por qué

**HTML estático generado por un script propio.** El contenido cambia poco y las
mismas cifras se repiten en varias páginas. Un generador de 300 líneas evita
copiarlas a mano y garantiza que un cambio en `data.js` llegue a todas. Sin
framework: nada que actualizar, nada que se rompa dentro de tres años.

**El generador verifica antes de terminar.** `node build.js` falla con código 1
si hay un enlace interno a una página inexistente, una imagen referenciada que
no está, una página sin `<h1>` o con dos, un título o una descripción
repetidos, un correo escrito en claro fuera de los textos legales, o si la hoja
de estilo tiene las llaves descuadradas.

**Cero librerías.** Sin jQuery, sin Bootstrap, sin Swiper, sin Font Awesome.
Los 17 iconos son SVG incrustados sobre una retícula de 24×24 con trazo de
1,5. El único tercero es Google Fonts, más el mapa incrustado que ya traía el
sitio antiguo.

**El sitio funciona sin JavaScript.** El guion añade una clase `js` desde el
`<head>`; todo lo que se pliega o se anima cuelga de esa clase. Sin
JavaScript: los desplegables no se abren, pero **todos los enlaces del menú
están repetidos en el pie** (comprobado: 0 enlaces sin repetir); los bloques
plegables son `<details>` nativos y siguen funcionando; la galería enlaza
directamente al archivo de imagen; y el formulario envía con la validación
propia del navegador.

**Los correos no están escritos en el HTML.** Van como
`data-correo="cuenta|dominio"` y el navegador los monta al cargar. Sin
JavaScript se lee «afriba (arroba) vanhessen.com», que sigue siendo
comprensible. Las únicas direcciones en claro están dentro de los textos
legales, porque esos van literales.

**El formulario no finge.** Envía al mismo CGI de siempre y, si eso falla o no
existe en el alojamiento nuevo, ofrece un botón que abre el correo con todo ya
escrito. Nunca muestra un «gracias, hemos recibido su mensaje» que no sea
verdad. Detalle en `PENDIENTE.md`.

**Compatibilidad.** Safari 15 en adelante, Chrome, Edge y Firefox. En la hoja
de estilo: prefijos `-webkit-` en `backdrop-filter` y `mask-image`; `100svh`
siempre detrás de una reserva en `vh`; `@supports` para `aspect-ratio`;
`color-mix()` siempre con un color sólido delante; nada de `:has()`, nada de
`@container`, nada de `background-attachment: fixed`; las rejillas `auto-fit`
escritas como `minmax(min(Npx, 100%), 1fr)`; y `env(safe-area-inset-bottom)`
para la barra inferior del móvil en pantallas con muesca.

---

## Rendimiento

| | Antes | Después |
|---|---|---|
| Imágenes | 3,23 MB (30 archivos) | **1,05 MB** (43 archivos: JPEG/PNG + su variante WebP) |
| Ahorro | | **67,4 %** |

Cada imagen se ha recomprimido a su tamaño real de uso —máximo 1.600 px de
ancho, calidad 82 en JPEG y 80 en WebP— sin ampliar nunca ninguna. Se sirven
con `<picture>`: WebP primero y el JPEG o PNG como reserva. Todas llevan
`width`, `height`, `loading="lazy"` y `decoding="async"`; solo la primera
imagen de la portada lleva `fetchpriority="high"`.

Las copias originales, sin tocar, están en `assets/img/_original/`.

**Lo que pesa la portada al cargarla:** 325 kB en 11 peticiones — 60 kB de
HTML, 67 kB de CSS, 17 kB de JavaScript, 77 kB de imágenes y 104 kB de
tipografías. Con la compresión que activa el `.htaccess`, el HTML y el CSS
bajan a la quinta parte.

---

## Comprobaciones hechas antes de entregar

No es una lista de intenciones: es el resultado de haberlo medido.

| Comprobación | Resultado |
|---|---|
| `node build.js` | **0 problemas.** 22 páginas, 6 archivos de refresco + 12 reglas 301, `sitemap.xml` con 22 URL |
| Enlaces internos e imágenes | **0 rotos**, sobre las 22 páginas y 72 recursos |
| Respuestas del servidor | **0 respuestas distintas de 200** en las 22 páginas y sus 72 recursos |
| Desbordamiento horizontal | **0** en 132 comprobaciones (22 páginas × 320, 375, 768, 1024, 1440 y 1920 px) |
| Contraste AA | **0 fallos** midiendo cada elemento con texto contra su fondo real: 22 páginas × 2 anchos |
| Objetivos táctiles de 44 px | **0 insuficientes** en las 22 páginas a 375 px |
| Un solo `<h1>` por página | **22 de 22** |
| Consola del navegador | **sin errores** |
| Detector de patrones (`detect.mjs`) | **0 hallazgos** en las 22 páginas, el CSS y el JavaScript |

Y a mano, en el navegador: mega-menú (abre, es excluyente, cierra con
`Escape`), cajón móvil (atrapa el foco, se cierra con `Escape` y devuelve el
foco al botón), visor de galería (abre, avanza y retrocede con botones y con
flechas, cierra con `Escape`), formulario (bloquea el envío vacío, marca los
campos, describe los errores con `aria-describedby`, lleva el foco al primero,
detecta el grupo sin marcar, para el envío si la trampa antispam viene rellena
y deja pasar cuando está todo) y los correos, que se montan en el navegador.

---

## Lo que falta antes de publicar

Está todo en **`PENDIENTE.md`**, con su detalle. En una línea cada cosa:

1. Confirmar que `cgi-bin/afriba.exe` sigue vivo en el alojamiento nuevo, o
   elegir alternativa para el formulario.
2. Decidir qué se hace con Google Analytics y con el mapa incrustado, que hoy
   cargan antes de que nadie acepte las cookies.
3. Poner HTTPS en el dominio.
4. Avisar a quien mantiene `Resumen.asp`: enseña una consulta SQL cuando se
   entra sin sesión.
5. Aportar el certificado ISO 9001 si sigue vigente, y versiones con texto de
   los tres PDF escaneados.
