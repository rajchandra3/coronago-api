const express = require('express');
const router = express.Router();
const controller = require('./controller');

//router.get('/upload',controller.csv_upload);
//router.get('/upload/corona',controller.up);
router.get('/corona/data',controller.corona_data);

module.exports = router;