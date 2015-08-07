var express = require('express'),
    fs = require('fs'),
    app = express(),
    bodyparser = require('body-parser'),
    https = require('https').createServer({key: fs.readFileSync('key.pem'),cert: fs.readFileSync('cert.pem')}, app),
    http = require('http').createServer(app),
    robot = require('robotjs');

app.set('port', (process.env.PORT || 5000));
app.set('sport', (process.env.PORT || 4443));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());

app.get('/index', function(request, response) {
    response.send('Hi World');
});

https.listen(app.get('sport'), function() {
  console.log("Node app is running at :" + app.get('sport'));
});

http.listen(app.get('port'), function() {
  console.log("Node app is running at :" + app.get('port'));
});


robot.keyTap('left');
