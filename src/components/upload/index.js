const express = require('express');
const router = express.Router();
const controller = require('./controller');
const cron = require('node-cron');

//router.get('/upload',controller.csv_upload);
//router.get('/upload/corona',controller.up);


// fetch data every 15 minutes
cron.schedule("0 */15 * * * *",(req,res)=>{
    console.log('fetching every 15 minute');
    controller.csv_upload(req,res);
});
  
router.get('/corona/data',controller.corona_data);


module.exports = router;