const url = 'http://www.amazon.com'

const Crawler = require("node-webcrawler")

var c = new Crawler({
  maxConnections : 10,
  // This will be called for each crawled page
  callback : function (error, result, $) {
    // $ is Cheerio by default
    //a lean implementation of core jQuery designed specifically for the server
    if (error) {
      console.log(error);
    } else{
      console.log($("title").text());
    }
  }
})

c.queue(url)