const axios=require('axios');
const cheerio=require('cheerio');

const fetchUrl = async (callback) => {
    await axios.get("https://www.deccanherald.com/coronavirus-live-news-covid-19-latest-updates")
      .then((response) => {
         // console.log(response.data);
        let $ = cheerio.load(response.data);
       // console.log("Loaded..");
        //console.log($);
        let live = $(".lb-live");
       // console.log(live.length);
  
        const url = live.parentsUntil("a").parent()[1].attribs.href;
        console.log(url);
        callback({url:url});
      })
      .catch((err) => {
        console.log(err);
      });
  }

const fetchNews = async(count,callback)=>{
    //axios.get('https://www.deccanherald.com/national/coronavirus-news-live-updates-india-sees-a-surge-in-positive-cases-as-tally-reaches-660-799686.html#1')
   const url=fetchUrl((url)=>{
       return url.url;
   });
   console.log(url);
       await axios.get(`https://www.deccanherald.com${url}`)
        .then((response)=>{
          const $=cheerio.load(response.data);
          const total=$('.updates-wrapper-list__items');
          let data=new Array();
          for(let i=0;i<count;i++)
          {
              let eacharr=new Object();
              eacharr.time=$(total[i]).find('.sanspro-b').text();
              eacharr.datahtml=$(total[i]).find('.data').html();
              data.push(eacharr);
          }
          callback({news:data,error:null});
    })
    .catch((e)=>{
        console.log(e);
        
    })
}
module.exports = { fetchNews }