const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

//TODO: This should be https - look for a way to make express use https here

const corsOptions = {
  origin: 'http://localhost:5173',
};

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;
