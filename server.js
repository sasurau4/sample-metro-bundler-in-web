const Metro = require('metro');
const express = require('express');
const app = express();

Metro.loadConfig().then(async config => {
  const metroBundlerServer = await Metro.runMetro(config);
  app.use(metroBundlerServer.processRequest.bind(metroBundlerServer));

  app.use('/', express.static('public'));

  const { server: serverConfig } = config;
  const { port } = serverConfig;
  app.listen(port);
});
