
const express = require('express');
const bodyParser = require('body-parser');

var notificationRouter = require('./project/routing/notifications');
var config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use('/notifications', notificationRouter);

app.listen(config.PORT, () => console.log(`Notification API listening on port ${config.PORT}\nOpen http://localhost:${config.PORT}/notifications to view`));