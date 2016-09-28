var crawlApp = require('../api');


module.exports  = function(crawl) {

    crawl.route('/crawl/resultado')
        .get(crawlApp.getResults());
};
