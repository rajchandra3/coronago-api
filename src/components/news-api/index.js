const express = require('express');
const router = express.Router();
// const controller = require('./controllers');
const axios=require('axios');
const cheerio=require('cheerio');

/* GET home page. */
router.get('/', function(req, res) {

    
  //axios.get('https://www.deccanherald.com/national/coronavirus-news-live-updates-india-sees-a-surge-in-positive-cases-as-tally-reaches-660-799686.html#1')
  axios.get('https://www.deccanherald.com/national/coronavirus-india-news-live-updates-statewise-total-number-of-cases-deaths-statistics-lockdown-latest-news-817763.html#1')
  .then((response)=>{

        //console.log('Loaded..');

        const $=cheerio.load(response.data);
        const total=$('.updates-wrapper-list__items');
        var data=new Array();
      //  console.log('Extracting.....');
        for(let i=0;i<total.length;i++)
        {
            let eacharr=new Object();
            eacharr.time=$(total[i]).find('.sanspro-b').text();
            eacharr.datahtml=$(total[i]).find('.data').html();

            data.push(eacharr);

        }

        res.statusCode=200;
        res.json(JSON.parse(JSON.stringify(data)));

    })
    .catch((err)=>{
        console.log(err);
    })



  // console.log('Extracting....');
});

module.exports = router;
