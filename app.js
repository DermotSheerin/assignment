'use strict';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require("express-handlebars").engine;
// const { Sequelize } = require('sequelize');

const indexRouter = require('./routes');

const app = express();
// const sequelize = new Sequelize('pos');

//Sets our app to use the handlebars engine
//app.set('view engine', 'handlebars');

// //Sets handlebars configurations (we will go through them later on)
// app.engine('handlebars', handlebars({
//     layoutsDir: __dirname + '/views/layouts',
// }));
// app.use(express.static('public'))

app.use(express.static("public"));
app.engine(
    ".hbs",
    handlebars ({
        extname: ".hbs",
        defaultLayout: "layout"
    })
);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
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

// error handler
// app.use((err, req, res, next) => {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;
