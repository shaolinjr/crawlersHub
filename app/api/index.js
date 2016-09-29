// Estrutura primária do código
// Ainda estamos aprendendo o conceito de trabalhar com o node.js

// Write on system
var fs = require('fs');
// Transformar resposta de uma forma que consiga utilizar o jquery
var request = require('request');
// Carrega o arquivo do html
var cheerio = require('cheerio');
// Module para formatar a data
var formatDate = require('../helpers/formatDate.js')

// Object que representa nosso app
var crawlApp = {};

/*
  Function that tries to get our info from an webpage
  @param urlToCrawl Should be a string with http format
  @parm elementToCrawl Should be a string in jQuery-like format (i.e: '#idOfObject')
*/

// Steps:
// 1. Get the webpage to crawl
// 2. Open webpage and parse
// 3. Check if any errors occur
// 4. Be happy and save the damm things

crawlApp.responseJSON = {
  response : {
    // date : "",
    // url : "",
    // htmlAttribute : "",
    // pageTitle : "",
    // lastTime : "",
    // contentFound : [
    //   {
    //     text : ""
    //   }]
  }
}

crawlApp.crawl = function (urlToCrawl, elementToCrawl){

  var url = urlToCrawl;

  var _date = formatDate.dateToText(new Date()); // We need to format date to a human-readable format
  var _htmlAttribute = elementToCrawl;

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var _pageTitle = $("title").text();

      console.log(`Page title: ${_pageTitle}`);

      $(elementToCrawl).first().filter(function(){
        var data = $(this);
        // console.log(`Data text: ${data.text()}`)
        crawlApp.responseJSON = {
          response: {
          date: _date,
          url: url,
          htmlAttribute: _htmlAttribute,
          pageTitle: _pageTitle,
          contentFound:[{
            text: data.text()
          }]
        }
        };
        crawlApp.responseJSON = JSON.stringify(crawlApp.responseJSON, null, 4);
        // console.log(crawlApp.responseJSON);
      })


      // return crawlApp.responseJSON;
      // if everything is OK, then create the output file
      // console.log(`JSON OUT: ${json.response.contentFound.text}`)

        // fs.writeFileSync(`${_pageTitle}.json`, JSON.stringify(json, null, 4));

    }

  });

}

crawlApp.getResults = function (){
  return JSON.stringify(crawlApp.responseJSON, null, 4);
}

// Making our crawl Method avaliable on other files
module.exports = crawlApp;
