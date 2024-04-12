const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function (req, res) {
    res.render('home');
});

app.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

app.post("/", function (req, res) {
    const username = req.body.username;
    const password = req.body.pass;
  
    if (username === "et114" && password === "et114") {
        res.redirect("/dashboard");
    }else {
        res.send("You are not authorized to access this page!");
    }
});

app.post("/dashboard", function (req, res) {
    const hours = req.body.hours;
   // const seconds = hours * 3600;

    console.log(hours);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});