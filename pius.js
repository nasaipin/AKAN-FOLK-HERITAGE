const express = require ('express');
const bodyParser = require ('body-parser');
const ejs = require ('ejs');

const app = express();

const aboutPage = "bdrhpvssohgpi4re dshgiphv4rewidghv piehv ; vh; vsviocsehvnfcvn fcnfnsnlc vlznvldihg;imlvosmlm zmsvj ihpvis;d jd;m xomcosc ";

app.set ('view engine', 'ejs');
app.get ("/", (req, res) => {
    res.render ("about", {TheAboutPage: aboutPage});
});

app.listen (3000, (req, res) => {
    console.log ("server is running")
});