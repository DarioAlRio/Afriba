/*
 * serve.js — servidor estático de previsualización.
 *
 *     node _build/serve.js            (http://localhost:4321)
 *     node _build/serve.js 8080       (otro puerto)
 *
 * No forma parte de la web: solo sirve la carpeta tal y como la serviría un
 * alojamiento normal, para poder revisarla en el navegador. Devuelve
 * 404.html cuando la ruta no existe, igual que hará el servidor de verdad.
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const PUERTO = Number(process.argv[2]) || 4321;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
};

function enviar(res, codigo, cuerpo, tipo) {
  res.writeHead(codigo, {
    'Content-Type': tipo || 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(cuerpo);
}

http
  .createServer(function (req, res) {
    let ruta = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
    if (ruta === '/' || ruta === '') ruta = '/index.html';

    const destino = path.join(RAIZ, ruta);
    // Nunca salir de la carpeta del proyecto.
    if (!destino.startsWith(RAIZ)) {
      enviar(res, 403, 'Prohibido');
      return;
    }

    fs.stat(destino, function (err, info) {
      if (err || !info.isFile()) {
        const err404 = path.join(RAIZ, '404.html');
        if (fs.existsSync(err404)) {
          enviar(res, 404, fs.readFileSync(err404), TIPOS['.html']);
        } else {
          enviar(res, 404, 'No encontrado');
        }
        return;
      }
      const ext = path.extname(destino).toLowerCase();
      enviar(res, 200, fs.readFileSync(destino), TIPOS[ext] || 'application/octet-stream');
    });
  })
  .listen(PUERTO, function () {
    console.log('AFRIBA en http://localhost:' + PUERTO);
  });
