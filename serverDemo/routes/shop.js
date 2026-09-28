const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
 
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req, res, next) => {
  const product = adminData.products;
  res.render('shop', {prods: product, docTitle:'shop'})
});   

//if we want to use the pug template then.
// router.get('/',(req, res, next) => {
//   res.render('shop')
// });

module.exports = router;