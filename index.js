const express = require("express");
const app = express();
var fs = require('fs');


const port= 3000;

app.listen(port,function(){
console.log("Server is running on port" +port);
});

app.get("/", function(req,res){

    res.render("index.ejs");
    });
    
var datauser= fs.readFileSync('users.json');

var datatask= fs.readFileSync('task.json');

var Users = JSON.parse(datauser);

var Tasks = JSON.parse(datatask);

console.log(Users);

console.log(Tasks);

app.get('/User', user); 

function user(req, res)
{
    res.send(Users);
} 

app.get('/Tasks', tasklist); 

function tasklist(req, res)
{
    res.send(Tasks);
} 

