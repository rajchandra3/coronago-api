const express = require('express');
const router = express.Router();
const controller = require('./controllers');

/* GET home page. */
router.get('/', function(req, res) {
    res.send({
        code:0,
        message:`The api is functional and looks good!`
    })
});

module.exports = router;
