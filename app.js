const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const app = express();
app.use(express.static(`${__dirname}/public`));

//Middleware

//HTTPS
app.use(helmet());

//parser,limit size
app.use(express.json({ limit: "10kb" }));

//cleaninng data sanitization query injections WAZNE
app.use(mongoSanitize());

//Data sanitstation wrzucanie jasvascriptowych skryptów
app.use(xss());

module.exports = app;
