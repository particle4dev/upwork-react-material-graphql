// https://nextjs.org/docs/advanced-features/custom-server

const path = require('path');
const fs = require('fs');
const express = require('express');
const next = require('next');
const requestIp = require('request-ip');
// import useragent from 'express-useragent'
// import cookieParser from 'cookie-parser'
const compression = require('compression');
// import favicon from 'serve-favicon'
const cookiesMiddleware = require('universal-cookie-express');
// import setupLogger from '../libraries/logger'
// import getFullURL from '../utils/getFullURL'
// import {PORT} from '../constants'


// inside middleware handler
const ipMiddleware = function(req, res, next) {
  const clientIp = requestIp.getClientIp(req);
  console.log(clientIp, 'clientIp');
  next();
};

// const logger = setupLogger('server:index');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  // server.use(cookieParser());
  // server.use(useragent.express());
  server.use(cookiesMiddleware());

  server.use(ipMiddleware);

  const publicPath = path.join(__dirname, '..', 'public');

  // server.use(favicon(path.join(publicPath, '/static/favicon.ico')));

  // public folder
  // server.use(express.static(publicPath))

  server.get('/robots.txt', (_, res) => {
    res.type('text/plain');
    const robots = fs.readFileSync(path.join(publicPath, 'robots.txt'), 'utf8');
    res.send(robots);
  });

  // server.get('/feed.xml', (_, res) => {
  //   res.type('text/plain');
  //   const rss = fs.readFileSync(path.join(publicPath, '/static/feed.xml'), 'utf8');
  //   res.send(rss);
  // });

  // server.get('/posts/:id', (req: Request, res: Response) => {
  //     return app.render(req, res, '/posts', { id: req.params.id })
  // })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, () => {
    // logger.info(`> Ready on ${getFullURL({})}`);
    console.log(`> Ready on ${process.env.PORT}`);
  });
});

