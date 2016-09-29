
var express   = require('express');
var app       = express();
var crawlApp  = require('../../app/api/');
var routes    = require('../../app/routes');

app.get('/crawl', function(req, res){

  for (i = 0; i < 10000;i++){
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )
    crawlApp.crawl("http://www.arthurpires.hol.es/esf-dynamic/","#page-top" )


  }

  // console.log("Resultado: "+ crawlApp.getResults());

  // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
  res.send("Checkout Terminal!!");
})

exports = module.exports = app;
