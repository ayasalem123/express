const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine','ejs');
var dates = require('express-dates-middleware');
const d = new Date();
let day = d.getDay();
let hours=d.getHours()
if(0<=day && day<=5 && 8<=hours && hours<=16){
app.get('/', function (req, res) {
   res.render('homePage.ejs');
 
})
app.get('/contact',function(rea,res){
    res.render('contactus.ejs')
}
)
app.get('/ourServices',function(rea,res){
    res.render('ourServices.ejs')
}
)
}
else{
    app.use((req, res, next) => {
        res.render('error.ejs')})
}
app.listen(3001)