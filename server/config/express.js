
var express   = require('express');
var app       = express();
var crawlApp  = require('../../app/api/');
var routes    = require('../../app/routes');

app.get('/crawl', function(req, res){

  var crawlerUm = crawlApp.crawl("http://expressjs.com/pt-br/starter/generator.html","#gerador-de-aplicativos-do-express");
  var crawlerDois = crawlApp.crawl("https://school.scotch.io/create-a-crud-app-with-node-and-mongodb",".learn-top.learn-section .col-sm-9 h1");

  console.log("Resultado: "+ crawlApp.getResults());

  // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
  res.send("Checkout Terminal!!");
})

exports = module.exports = app;
