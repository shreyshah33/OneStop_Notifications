const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Notification Home Page. This is cool");
});

module.exports = router;