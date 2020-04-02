const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.ATLAS_URL,{useNewUrlParser: true,useUnifiedTopology: true},(e)=>{
    if(e){
        throw console.error(`Database connection error -> ${e}`);
    }else{
        console.log('connected to the database');
    }
});