const express = require('express');

const app = express();

app.get('/',(req,res)=>res.send('Caca durrisisa'))


app.listen(3000);
console.log('Server started caca')