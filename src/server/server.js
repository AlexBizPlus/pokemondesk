/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import Hapi from '@hapi/hapi';
import ReactDom from 'react-dom/server';
import { setPath } from 'hookrouter';
import App from '../components/App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'public', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
      setPath(request.path);
      const pathIndexHTML = path.join(process.cwd(), 'public', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf-8'));
      const result = ReactDom.renderToString(<App />);
      const page = template({
        content: result,
      });
      return page;
    },
  });

  await server.start();
  // console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  // console.log(err);
  process.exit(1);
});

init();
