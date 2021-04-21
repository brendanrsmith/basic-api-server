'use strict';

// 3rd party modules
const express = require('express');
const app = express();

// internal modules
const notFound = require('../src/error-handlers/404');
const internalError = require('../src/error-handlers/500');

// global middleware
app.use(express.json()); // handles parsing of req.body

// catch-all 404 handler
app.use('*', notFound);
// internal server error handler
app.use(internalError);

// export module for index.js
module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server up on port ${port}`);
    });
  }
}