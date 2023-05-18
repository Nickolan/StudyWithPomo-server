const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();
const mainRouter = require('./routes/index')

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(mainRouter);


module.exports = server;
