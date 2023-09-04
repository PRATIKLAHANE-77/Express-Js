
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//   res.send('<h1>welcome to home page</h1>');
// })

// app.get('/about',(req,res)=>{
//   res.send('<h1>welcome to about page</h1>');
// })

// app.get('/contact',(req,res)=>{
//   res.send('<h1>welcome to contact page</h1>');   // if we assign status code then assigned status code will be considered.
// })

// app.get('/*',(req,res)=>{
//   res.send('<h1>something went wrong</h1>');
// })

// app.listen(3000);



// diff
// const express = require("express");
// const bodyparser = require('body-parser');

// const app = express();

// const adminroute = require('./routes/admin')

// const shoprouter  = require('./routes/shop');


// app.use(bodyparser.urlencoded({extended:false}));
// app.use(adminroute);

// app.use(shoprouter);


 
// app.listen(4500);




const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoute);
app.use(shopRoute);

app.listen(8000);
