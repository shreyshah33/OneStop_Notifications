
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost:27017/onestop');
const db = mongoose.connection;

const notificationRouter = require('./project/routing/notifications');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use('/notifications', notificationRouter);

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
      })
  }));

app.listen(config.PORT, () => console.log(`Notification API listening on port ${config.PORT}\nOpen http://localhost:${config.PORT}/notifications to view`));