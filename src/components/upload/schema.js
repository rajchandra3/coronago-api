const mongoose = require('mongoose');

const covid_data_schema = new mongoose.Schema({
    uid: {type: String,required: true,unique: true},
    state: {type: String,required: true},
    active: {type: Number,required: true},
    confirmed: {type: Number,required: true},
    deaths: {type: Number,required: true},
    recovered: {type: Number,required: true}
},{timestamps: true});


module.exports = mongoose.model('covid_data_schema',covid_data_schema);