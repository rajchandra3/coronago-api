const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const should = require('chai').should();

chai.use(chaiHttp);

describe('corona_data',()=>{

    it('get the corona data from the database on /corona/data',(done)=>{
        chai.request(app)
        .get('/corona/data')
        .end((e,res)=>{
            if(!e){
                res.should.have.status(200);
                res.should.be.json;
                res.should.be.a('object');
                done();
            }
        });
    });

});