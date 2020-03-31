const axios=require('axios');
const cheerio=require('cheerio');

const fetchNews = async(count,callback)=>{
    //axios.get('https://www.deccanherald.com/national/coronavirus-news-live-updates-india-sees-a-surge-in-positive-cases-as-tally-reaches-660-799686.html#1')
    await axios.get('https://www.deccanherald.com/national/coronavirus-news-live-updates-statewise-total-number-of-cases-deaths-statistics-india-lockdown-latest-news-march-31-817763.html#12')
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
        callback ({news:null,error:e});
    })
}
module.exports = { fetchNews }