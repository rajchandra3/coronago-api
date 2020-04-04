const covid_data_schema = require('./schema');
const axios = require('axios');
const shortid = require('shortid');
const responses = require('../../middlewares/responses');

exports.csv_upload = (req,res)=>{

    covid_data_schema.deleteMany({}).then(()=>{

        axios.get(`https://api.covid19india.org/data.json`).then((reply)=>{

        covid_data = reply.data.statewise;
        covid_data.forEach(element => {
            const covid = new covid_data_schema({
                uid: shortid.generate(),
                state: element.state,
                active: element.active,
                confirmed: element.confirmed,
                deaths: element.deaths,
                recovered: element.recovered
            });
            covid.save().then(()=>{
                console.log('data saved');
            }).catch((e)=>{
                console.log(`${e}`);
            });
        });
        }).catch((e)=>{
            console.log(`${e}`);
        });

    }).catch((e)=>{
        console.log(`Error in deleting the documents -> ${e}`);
    });

};


exports.corona_data = (req,res)=>{
    covid_data_schema.find({}).then((data)=>{
        responses.sendResponseWithData(res,200,'success',data);
    }).catch((e)=>{
        responses.errorResponse(res,e);
    });
};

