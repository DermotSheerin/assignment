'use strict';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require("express-handlebars").engine;

const indexRouter = require('./routes');

const app = express();

app.use(express.static("public"));
app.engine(
    ".hbs",
    handlebars ({
        extname: ".hbs",
        defaultLayout: "layout"
    })
);

// view engine setup
app.set('view engine', '.hbs');

app.use(logger('dev'));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res, next) => {
    next(createError(404));
});

module.exports = app;
