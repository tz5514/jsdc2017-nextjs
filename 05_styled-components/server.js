// server.js
const next = require('next')
const routes = require('./config/routes')
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

// With express
const express = require('express');
app.prepare().then(() => {
  express().use(handler).listen(3000);
});