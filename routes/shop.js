const express = require('express');

const router = express.Router();   // creating router object

  



router.get('/',(req, res, next) => {
    console.log("check");
    res.send('<h1>Hello, welcome to express js</h1>')
  });
 
  module.exports = router;