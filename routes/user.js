const express = require('express');
const router = express.Router();
router.get('/', function (req, res) {
    res.render('homePage.ejs');
  
 })
router.get('/contact',function(rea,res){
     res.render('contactus.ejs')
 }
 )
 router.get('/ourServices',function(rea,res){
     res.render('ourServices.ejs')
 }
 )
 module.exports = router;