let request = require('request');
let cheerio = require('cheerio');

let urlRetail = "http://kalimatimarket.gov.np/home/rpricelist";
let urlWholesale = "http://kalimatimarket.gov.np/home/wpricelist";

const getData = (url)=>{
    
	return new Promise((resolve, reject) => {
		data=[];
        request(url, (err, response, body) => {
            if(err){
                return reject(err);
            }
             
              if (response.statusCode !== 200) {
                return reject(new Error(body))
            };

            let $ = cheerio.load(body);
            $('tr').each(function() {
                let temp = [];
                $(this).find('td').each(function(i) {
                    temp.push($(this).text());
                });
                data.push(temp);

            });
            resolve(data);

        });
    });
}

module.exports = {  retail: ()=> getData(urlRetail),
                    wholesale: ()=> getData(urlWholesale)
                    }
//module.exports = {retail: ()=> getData(urlRetail)}
