var http = require('http')
    ,app = require('./config/express');

http.createServer(app).listen(4444, function() {
    console.log('Our little spiders went to hunt on port: ' + this.address().port);
});
