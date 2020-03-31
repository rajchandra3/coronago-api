const express = require('express');
const router = express.Router();
const bot = require('./tweet');
const Respond = require('../../middlewares/responses');

//Triggers twitter bot to tweet instantly
router.get('/tweet/:user/:token', (req, res) =>{
    //only for maintainers 
    let user=req.params.user;
    let token=req.params.token;
    if(user==process.env.TWITTER_USERNAME && token==process.env.TWITTER_PASSWORD){
        bot.main();
        Respond.successResponse(res);
    }else{
        Respond.invalidQueryResponse(res);
    }
});

module.exports = router;
