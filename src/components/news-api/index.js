const express = require('express');
const router = express.Router();
const Controller = require('./controller');
const Respond = require('../../middlewares/responses');

/* GET home page. */
router.get('/get', (req, res) =>{
    const count= req.query.count || 10;
    Controller.fetchNews(count,(data)=>{
        if(data.news){
            Respond.sendResponseWithData(res,0,'Fetched Data!',data.news);
        }else if(data.error){
            Respond.errorResponse(res,data.error);
        }else{
            Respond.sendResponseWithData(res,1,'No news found!',{});
        }
    });
});

module.exports = router;
