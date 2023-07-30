const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content "
const aboutContent = "About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us About Us"
const contactContent = "Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here Contact Here "

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // used the following code to serve images, CSS files, and JavaScript files in a directory named `public`

app.get("/", function (req, res) {
    res.render("home", { startingContent: homeStartingContent })
});

app.get("/about", function (req, res) {
    res.render("about", { aboutContent: aboutContent })
});

app.get("/contact", function (req, res) {
    res.render("contact", { contactContent: contactContent })
});

app.get("/compose", function (req, res) {
    res.render("compose")
});

app.post("/compose", function (req, res) {
    const responseObj = {
        message : req.body.message,
        title : req.body.title
    };
    console.log(responseObj);
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
})