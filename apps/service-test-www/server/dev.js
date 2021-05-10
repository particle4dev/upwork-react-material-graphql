// https://github.com/nrwl/nx/blob/master/packages/next/src/builders/server/lib/default-server.ts
const path = require('path');
const express = require('express');

module.exports = async function customServer(app, settings, proxyConfig) {
  const handle = app.getRequestHandler();
  await app.prepare();

  const server = express();
  server.disable('x-powered-by');

  // Serve shared assets copied to `public` folder
  server.use('/public',
    express.static(path.resolve(settings.dir, settings.conf.outdir, 'public'))
  );

  // Set up the proxy.
  if (proxyConfig) {
    const createProxyMiddleware = require('http-proxy-middleware');
    Object.keys(proxyConfig).forEach((context) => {
      server.use(createProxyMiddleware(context, proxyConfig[context]));
    });
  }

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => handle(req, res));

  server.listen(settings.port, settings.hostname);
};
