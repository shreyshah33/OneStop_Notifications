
const express = require('express');
var notificationRouter = require('./project/routing/notifications');
var config = require('./config');

const app = express();

app.use('/notifications', notificationRouter);

app.listen(config.PORT, () => console.log(`Notification API listening on port ${config.PORT}\nOpen http://localhost:3000/notifications to view`));