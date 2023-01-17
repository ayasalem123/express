const express = require('express')
const app = express()
const path = require("path");
const user=require('./routes/user.js')
app.use(express.static('public'))
app.set('view engine','ejs');

app.use((req,res,next)=>{
const d = new Date();
let day = d.getDay();
let hours=d.getHours();
if(0<=day && day<=5 && 8<=hours && hours<=16)
{next();}
else{
       res.sendFile(path.join(__dirname, "./", "views", "error.html"))
 }
})
app.use(user)

app.listen(3001)