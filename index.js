'use strict';

// 3rd party modules
const dotenv = require('dotenv');

// internal modules
const server = require('./src/server');

// app and config files
dotenv.config();
const port = process.env.PORT || 3333;

// file logic
server.start(port);
