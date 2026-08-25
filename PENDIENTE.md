# Pendiente antes de publicar

Todo lo que aparece aquí es algo que **no se ha inventado**: o falta el dato,
o depende de una decisión vuestra, o hay que comprobarlo en el alojamiento
definitivo. Está ordenado por urgencia.

---

## 1. Hay que decidirlo antes de publicar

### 1.1 El formulario de presupuesto: confirmar que el CGI sigue vivo

El formulario de `presupuesto.html` envía por `POST` a:

```
cgi-bin/afriba.exe/contacto
```

Es **el mismo destino que usaba el sitio anterior**, con los mismos nombres de
campo (`nombre`, `cargo`, `empresa`, `telefono`, `email`, `PaletA`, `PaletE`,
`H180`, `H230`, `P1000`, `P1250`, `stock`, `entradas`, `mensaje`, `Privacidad`,
`Publicidad`) y con `accept-charset="ISO-8859-1"`, que es lo que ese ejecutable
espera.

**Qué hay que comprobar:** que en el alojamiento nuevo siga existiendo y
ejecutándose `cgi-bin/afriba.exe`. Es un ejecutable de Windows: si el sitio se
publica en un servidor Linux, en Netlify, en Vercel o en Cloudflare Pages,
**no funcionará**.

Mientras no se confirme, el formulario **no miente**: valida en el navegador,
avisa de lo que falta y ofrece un segundo botón, *«Enviarlo por correo»*, que
abre el programa de correo con todos los datos ya escritos. En ningún momento
dice «mensaje enviado».

Tres formas de dejarlo funcionando:

| Opción | Qué hace falta | Coste |
|---|---|---|
| **Mantener el CGI** | Publicar en el mismo servidor Windows con `cgi-bin` activo | Ninguno |
| **Formspree** | Crear una cuenta, cambiar el `action` por la URL que dan | Gratis hasta 50 envíos/mes |
| **Netlify Forms** | Publicar en Netlify y añadir `netlify` al `<form>` | Incluido en el plan gratuito |

El `action` se cambia en un solo sitio: `_build/nav.js`, campo
`endpointFormulario`.

### 1.2 Consentimiento de cookies: el aviso actual solo informa

El sitio carga dos terceros **antes** de que nadie acepte nada:

- **Google Analytics 4** (`G-95GE4BGW5C`), que venía del sitio anterior.
- **El mapa incrustado de Google Maps** en `contacto.html` e `index.html`.

El aviso que se muestra es el mismo que tenía el sitio antiguo: informa, pero
no bloquea. La Agencia Española de Protección de Datos exige **consentimiento
previo** para las cookies que no son estrictamente necesarias, y las de
analítica y las del mapa no lo son.

Hay tres salidas, y la decisión es vuestra:

1. **Quitar Analytics.** Se borra la línea `analytics` de `_build/nav.js` y
   desaparece de las 22 páginas. Es lo más limpio.
2. **Cargar Analytics solo tras aceptar.** Hay que tocar `assets/js/site.js`
   (sección 5) para que el `gtag` se inyecte al pulsar «Aceptar».
3. **Dejarlo como está**, asumiendo el riesgo, que es exactamente el que ya
   tenía el sitio anterior.

Con el mapa pasa lo mismo: se puede sustituir por una imagen estática con
enlace a Google Maps, que además pesa menos.

### 1.3 El dominio no tiene HTTPS

`http://www.afriba.com/` responde solo por HTTP. Un formulario con datos de
contacto viajando en claro es un problema, y los navegadores ya marcan el sitio
como «No seguro».

Casi todos los alojamientos dan un certificado Let's Encrypt gratis. Cuando
esté, hay que:

- Cambiar `dominio` en `_build/nav.js` de `http://` a `https://` (afecta a las
  URL canónicas, al `sitemap.xml`, a Open Graph y a los datos estructurados).
- Añadir la redirección de HTTP a HTTPS en el `.htaccess`.

### 1.4 `Resumen.asp` deja ver una consulta SQL

El botón «Área de clientes» apunta a `Resumen.asp?inicio=true&orden=STOCK.ARTDES`,
que es el acceso al sistema de stocks que ya existía.

Durante el rastreo se comprobó que, **al abrirlo sin haber iniciado sesión**,
esa página devuelve un mensaje de error del servidor que **incluye la consulta
SQL completa**, con nombres de tablas y de columnas. No se ha explotado nada
más allá de abrir la URL, pero conviene decirlo: dar a conocer la estructura
de la base de datos facilita el trabajo a quien busque una inyección SQL.

Esto **no es del sitio nuevo**: es de la aplicación ASP que hay detrás y que no
se ha tocado. Habría que pedir a quien la mantenga que capture el error y
muestre una página de acceso normal.

---

## 2. Datos que no estaban y por eso no están

Ninguno de estos aparece en el sitio nuevo. No se ha rellenado ninguno «a ojo».

| Falta | Dónde se echaría de menos | Qué haría falta |
|---|---|---|
| **Tarifas** | `presupuesto.html` | El sitio anterior tampoco publicaba precios: solo pedía datos para presupuestar. Si queréis publicar tarifas, hay hueco preparado. |
| **Plazos de respuesta** | `presupuesto.html` | No se dice «respondemos en 24 h» porque no consta en ninguna parte. |
| **Clientes y casos** | `empresa.html` | No hay ni un nombre de cliente en el dominio original. No se ha puesto ninguno. |
| **Testimonios** | — | No existía ninguno. No se ha escrito ninguno. |
| **Año de inicio de actividad** | `empresa.html` | Solo consta la fecha de constitución en el Registro Mercantil (18/04/2001), que es la que se usa. |
| **Número de empleados** | `empresa.html` | No consta. Se listan las cinco personas de contacto que sí publicaba el sitio. |
| **ISO 9001** | `certificaciones.html` | El sitio antiguo mostraba el sello y enlazaba `Certificado ISO 9001 ER-0015-2018_ES_2021-01-27.pdf`, pero **ese archivo devuelve 404 en el propio servidor**: el enlace estaba roto. Como no se ha podido comprobar la vigencia, la certificación no aparece en el sitio nuevo. Si sigue viva, basta con aportar el PDF. |
| **Fotos a resolución utilizable** | `muelles.html`, `trazabilidad.html`, `seguridad.html`, `oficinas.html`, `equipamiento.html`, `gestion-en-linea.html` | Seis fotografías **solo existen a 192×118 px** en el sitio anterior: es la única versión publicada, no hay original mayor. Para que no se vieran deshechas, ninguna imagen se amplía ya más del doble de su tamaño real, así que esas seis salen pequeñas y centradas. Volver a fotografiar los muelles, la sala de máquinas, el terminal de radiofrecuencia y las oficinas es la mejora visual más rentable que tiene este sitio. |
| **Fotografías de la sala de máquinas** | `equipamiento.html` | Las únicas imágenes disponibles son las 30 que había en el sitio anterior, y ninguna es de la sala de máquinas. La página funciona con datos y cuadros, pero ganaría con dos o tres fotos. |
| **Foto de la fachada actualizada** | `contacto.html` | La disponible es antigua y de baja resolución. |

---

## 3. Documentos que no se han podido transcribir

Los seis PDF del sitio anterior están copiados tal cual en `assets/docs/` y se
enlazan desde las páginas correspondientes. Tres de ellos son **escaneos sin
capa de texto**:

| Archivo | Estado |
|---|---|
| `certificado-ifs-logistics.pdf` | Escaneado. Los datos del cuadro de `certificaciones.html` (COID 80521, IFSLOG-2022/0003, nivel superior 97,17 %, GLN 8438002242005, registros 10.00016066/M y 40.16267/M) se han leído a mano del documento. |
| `certificado-sae.pdf` | Escaneado. Igual: EX128053051 Rev. 2, PR-EXP REV.4 CCVE (01/07/2023), RD 993/2014, categoría CARNE, nivel SAE 3. |
| `certificado-haccp.pdf` | Escaneado. Solo se ha extraído la referencia de norma. |

**Consecuencia práctica:** esos tres PDF no se pueden leer con un lector de
pantalla ni indexar por buscadores. Si tenéis los originales en digital, hay
que sustituirlos; y si no, la solución es pedirle a la certificadora una copia
con texto.

Los otros tres (`politica-de-calidad.pdf`, `comunicado-a-transportistas.pdf`,
`instrucciones-control-acceso-transportistas.pdf`) sí llevan texto.

---

## 4. Averías que traía el sitio anterior

Encontradas durante el rastreo. Ninguna se ha heredado, pero conviene saber que
existían:

| Avería | Detalle | Qué se ha hecho |
|---|---|---|
| **Mezcla de codificaciones** | Unas páginas iban en ISO-8859-1 y otras en UTF-8, con acentos rotos («operaciÃ³n») en varias. | Todo el sitio nuevo va en UTF-8, declarado en el `<meta charset>` y en el `.htaccess`. |
| **`Contacto.html` huérfana** | Existía, pero ningún enlace del menú llegaba a ella. | Redirige 301 a `presupuesto.html`, que es donde está su contenido. |
| **Enlace a `221124.html`** | Las páginas legales seguían enlazando la convocatoria de Junta de 2024, ya caducada. | Ambas convocatorias viven ahora en `junta-general.html`; la de 2024 queda plegada como «convocatoria anterior». |
| **Correos en claro** | `afriba@vanhessen.com` aparecía escrito tal cual en el HTML de siete páginas. | Ahora se montan en el navegador desde `data-correo="cuenta\|dominio"`. Solo quedan en claro dentro de los textos legales, porque **son literales y no se tocan**. |
| **Imágenes sin dimensiones** | Ninguna `<img>` llevaba `width`/`height`; la página saltaba al cargar. | Todas las llevan, más `loading="lazy"` y `decoding="async"`. |
| **Sin `sitemap.xml` ni `robots.txt`** | No existían. | Se generan en cada compilación. |

---

## 5. Cosas menores, por si queréis afinar

- **El aviso de cookies tapa parte de la portada en móvil.** Es un aviso
  centrado, como el del sitio anterior. Si preferís una franja inferior, se
  cambia en `assets/css/site.css`, sección 12.
- **Las páginas pesan unos 60 kB de HTML** porque los iconos van incrustados
  como SVG (para no cargar ninguna librería) y el mega-menú se repite en cada
  página. Con la compresión que activa el `.htaccess` bajan a unos 12 kB. Si
  vuestro alojamiento no tiene `mod_deflate`, hay que activar la compresión
  desde su panel.
- **Los archivos de refresco** (`RRHH.html`, `171225.html`, `221124.html`,
  `Aviso_legal.html`, `Politica_privacidad.html`, `Politica_cookies.html`) son un apaño para alojamientos sin `.htaccess`. Si
  el vuestro admite las 301 del `.htaccess` o del `_redirects`, se pueden
  borrar sin problema.
- **`_build/`, `build.js` y `_original-sitio/` no hacen falta en el
  servidor.** El sitio publicado son los `.html`, `assets/`, `sitemap.xml`,
  `robots.txt`, `.htaccess`, `_redirects` y los iconos de la raíz. Subir el
  resto no rompe nada, pero deja el generador a la vista.
