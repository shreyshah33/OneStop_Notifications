const express = require('express');
const mongoose = require('mongoose');
const { createUser } = require('../controllers/createUser');
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/onestop');

router.get('/', (req, res) => {
    res.send("Notification Home Page. This is cool");
});

router.post('/', async function(req,res) {
    let {email, username, password, passwordConf} = req.body;
    if (email &&
        username &&
        password &&
        passwordConf && password === passwordConf) {
      return res.send(await createUser(email, username, password));
    }
    return res.send('Error');
});

router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

router.get('/logout', function(req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });

module.exports = router;