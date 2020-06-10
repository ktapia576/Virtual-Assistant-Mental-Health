const express = require('express');

const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set('view engine', 'hbs');
app.use(express.static("public"));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req,res) => {
  res.render('home')
})

app.get('/mission', (req,res) => {
  res.render('mission')
})

app.get('/contact', (req,res) => {
  res.render('contact')
})

app.get('/about', (req,res) => {
  res.render('about')
})

app.get('/*', (req,res) => {
  res.redirect('/')
})

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
})
