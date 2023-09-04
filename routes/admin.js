const express = require('express');
const router = express.Router();

 



router.get('/app-product',(req, res) => {
    console.log("in another of anoter midleware");
    res.send('<form action = "/product" method = "post"><input type = "text" name = "product name"><input type = "number" name = "size" <button type = "submit"><button>Add Product</button> </form>');
   
  });

  router.post('/product',(req, res) => {
    console.log(req.body);
    res.redirect('/');
  });

  module.exports = router;