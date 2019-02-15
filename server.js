const Metro = require('metro');
const express = require('express');
const app = express();

Metro.loadConfig().then(async config => {
  const metroBundlerServer = await Metro.runMetro(config);
  // routeing at index.bundle
  app.use(metroBundlerServer.processRequest.bind(metroBundlerServer));

  app.use('/', express.static('public'));

  app.listen(8081);
});
