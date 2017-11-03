// server.js
const next = require('next')
const routes = require('./config/routes')
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handler = routes.getRequestHandler(nextApp);

// With express
const express = require('express');

nextApp.prepare().then(() => {
  const app = express();
  
  app.get('/api/news/list/:page', async(req, res) => {
    const page = req.params.page;
    setTimeout(async() => {
      const fetchRes = await fetch(`http://m.ncu.edu.tw/api/zh/news/list/${page}`);
      res.json(await fetchRes.json());
    }, 1000);
  });

  app.get('/api/news/detail/:id', async(req, res) => {
    setTimeout(async() => {
      const fetchResponse = await fetch(`http://m.ncu.edu.tw/api/zh/news/detail/${req.params.id}`);
      res.json(await fetchResponse.json());
    }, 1000);
    
  });

  app.use(handler);
  app.listen(3000);
});