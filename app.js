const http = require('http');
const express = require( 'express' );
const app = express();
const server = http.createServer();

app.get('/', function(req, res){
  res.send('Something else');
});
app.listen(3000, function(){
  console.log('Example!!!');
});

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log('I heard that', req.url);
  //  console.log(req);
    next();
});

// app.on('request', function(req, res){
//   console.log('I heard that', req.url);
// });
