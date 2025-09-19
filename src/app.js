const express = require('express');
const routers = require('./routers');

const app = express();

routers(app);

module.exports = app;
