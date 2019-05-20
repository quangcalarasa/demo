const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/tin-nong',function(req,res){
    res.send("Hello Ngoc Trinh");
});

app.get('/tin-hot',function(req,res){
    res.send("Hello " + req.query.name);
});

app.post('/hot',function(req,res){
    res.send("Hello " + req.body.name + "Mr: " + req.body.fullname+   "Your Password: " + req.body.password);
});

app.get('/tin-nothot',function(req,res){
    res.send("Hello New W");
});

app.listen(port, function(){
    console.log("Hello World");
});