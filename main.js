const express = require("express");
const app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));


app.use('/',(req, res, next) => {
    console.log("this always runs");
    next();
  });

app.use('/app-product',(req, res, next) => {
    console.log("in another of anoter midleware");
    res.send('<form action = "/product" method = "post"><input type = "text" name = "product name"><input type = "number" name = "size" <button type = "submit"><button>Add Product</button> </form>');
  });

  app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

  app.use('/',(req, res, next) => {
    console.log("check");
    res.send('<h1>Hello, welcome to express js</h1>')
  });

app.listen(4500);
