const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const CORS = require('./src/middlewares/cors');
require('dotenv').config();

const news_api = require('./src/components/news-api/index');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//handle cors
app.use((req,res,next)=>{
    CORS.removeCORS(req,res,next);
});


app.use('/getNews', news_api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    if(process.env.NODE_ENV === 'development'){
        console.log(err);
    }
    res.status(err.status || 500).send({
        code : 1,
        message : err.message,
        error : {
            message : err.message,
            code : err.status
        }
    })
});

module.exports = app;
