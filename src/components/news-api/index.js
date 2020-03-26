const express = require('express');
const router = express.Router();
const controller = require('./controllers');

/* GET home page. */
router.get('/', function(req, res) {
    res.statusCode=200;
    let newsData=controller.getData();
    res.json(newsData);
});

module.exports = router;
