const express= require('express');
const app = express();

let conta = 0;

app.get('/',function (req,res) {
res.sendFile(__dirname +'/public/paginina.html');
});

app.get('/seconda',function (req,res) {
conta++;
console.log(conta);
res.sendFile(__dirname +'/public/seconda.html');
});

app.listen(process.env.PORT || 3000);


 
