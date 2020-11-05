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

app.get('/login', login);

function login(req, res){
    res.send(Login);
}

app.post("/login", dataloginuser.authenticate("Users", { 
    successRedirect: "/todo", 
    failureRedirect: "/login"
}), function (req, res) { 
}); 

app.post("/register", function (req, res) { 
    var username = req.body.username 
    var password = req.body.password 
    User.register(new User({ username: username }), 
            password, function (err, user) { 
        if (err) { 
            console.log(err); 
            return res.render("register"); 
        } 
    }); 
}); 

app.post("/register", dataregistrateduser.authenticate("Users", { 
    successRedirect: "/todo", 
    failureRedirect: "/register"
}), function (req, res) { 
}); 



app.get("/logout", function (req, res) { 
    req.logout(); 
    res.redirect("/"); 
}); 


app.post("/addtask", function (req, res) { 
    req.addtask(); 
    res.redirect("/todo"); 
}); 
app.post("/unfinish", function (req, res) { 
    req.unfinish(); 
    res.redirect("/todo"); 
}); 
 

app.post("/purge", function (req, res) { 
    req.purge(); 
    res.redirect("/todo"); 
}); 

app.post("/abandonorcomplete", function (req, res) { 
    req.abandonorcomplete(); 
    res.redirect("/todo"); 
}); 



app.post("/claim", function (req, res) { 
    req.claim(); 
    res.redirect("/todo"); 
});