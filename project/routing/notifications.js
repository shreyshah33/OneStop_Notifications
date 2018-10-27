const express = require('express');
const mongoose = require('mongoose');
const { createUser } = require('../controllers/auth');
const router = express.Router();


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
})

module.exports = router;