const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://restcountries-4v5l.onrender.com",
      changeOrigin: true,
    })
  );
};