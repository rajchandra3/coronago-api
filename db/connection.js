const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URL,{useNewUrlParser: true,useUnifiedTopology: true},(e)=>{
    if(e){
        console.log(`Database connection error -> ${e}`);
    }else{
        console.log('connected to the database');
    }
});