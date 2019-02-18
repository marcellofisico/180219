const express= require('express');
const app = express();

app.get('/',slash);

app.listen(process.env.PORT || 3000);

function slash(req,res)
{
	res.write('hello');
	res.end();
}
 
