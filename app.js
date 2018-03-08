const express = require('express');
const cors = require('cors');
const Data = require('./models/data')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
let app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
	console.log('loading data');
	Data.retail().then((dataRetail)=>{
		return Data.wholesale().then((dataWholesale)=>{
			let data = {
				"retail": dataRetail,
				"wholesale": dataWholesale
			}
			console.log('fetched data');
	    	response.json(data);
		});
		   	

	    }).catch((err)=>{
	    	console.log(err);
	    });

});
    

app.listen(port, () => {
	console.log('Server Up and running on PORT', port);
});