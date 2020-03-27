var pupperteer=require('puppeteer');

async function getData(){

    console.log('reached fn');

    const browser=await pupperteer.launch({headless:true});
    const page=await browser.newPage();

    await page.goto('https://www.deccanherald.com/national/coronavirus-live-updates-domestic-commercial-airlines-to-stop-operations-from-midnight-799686.html#1',{timeout:0,waitUntil:"networkidle0"});
  // await page.setDefaultNavigationTimeout(1000000); // await page.waitForSelector('.updates-wrapper-list_items');
    
    var news=await page.evaluate(()=>{
        var total=document.querySelectorAll('.updates-wrapper-list__items');
        console.log(total);
        var data=new Array();
        for(let i=0;i<total.length;i++)
        {
            let eacharr=new Object();
             eacharr.time=total[i].querySelector('.sanspro-b').innerText ? total[i].querySelector('.sanspro-b').innerText:' ' ;
            eacharr.dataHtml=total[i].querySelector('.data').innerHTML ? total[i].querySelector('.data').innerHTML : ' ' ;
           

           data.push(eacharr);
            
        }

        return JSON.parse(JSON.stringify(data));
    });

    await browser.close();
    console.log('Extracted');
    return news;
}


