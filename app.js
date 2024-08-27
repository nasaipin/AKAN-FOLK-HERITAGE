const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

// const homeStartingContent = "";
// const aboutContent = "";
// const contactContent = "";
// const myAkon = "";
// const theKassena ="";
// const theAdowa = "";  
// const theKete = "";
// const theNagla = "";

app.set("view engine", "ejs");

// app.use (bodyParser.urlencoded ({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
// the akon's video
app.get("/akon_video", (req, res) => {
  res.render("akon_video");
});
// the kassena dance
app.get("/Kassena", (req, res) => {
  res.render("Kassena");
});
//the adowa dabce
app.get("/Adowa", (req, res) => {
  res.render("Adowa");
});
//THE KETE DANCE
app.get("/kete", (req, res) => {
  res.render("kete");
});
// the nagla dance
app.get("/nagla", (req, res) => {
  res.render("nagla");
});
// the nagla dance 2
app.get("/nagla2", (req, res) => {
  res.render("nagla2");
});
//Adowa dance 2
app.get("/Adowa2", (req, res) => {
  res.render("Adowa2");
});
// vovome
app.get("/vovome", (req, res) => {
  res.render("vovome");
});
// rudeboy
app.get("/rudeboy", (req, res) => {
  res.render("rudeboy");
});
//DIANA HAMILTON AWURADE YE
app.get("/awurade_ye", (req, res) => {
  res.render("awurade_ye");
});

app.listen(3000, (req, res) => {
  console.log("server started on port 3000");
});
