const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/services', function(req, res) {
  res.render('services');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.post('/contact', function(req, res) {
  const { firstName, lastName, contactNumber, email, message } = req.body;

  res.redirect('/');
});

app.use(router);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
