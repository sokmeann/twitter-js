
const express = require( 'express' );
const app = express();

var PORT = 3000;

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log('I heard that', req.url);
  //  console.log(req);
    next();
});

app.get('/', function(req, res){
  res.send('Something else');
});

app.listen(PORT, function(){
  console.log(`Listening on port number ${PORT}`);
});

// app.on('request', function(req, res){
//   console.log('I heard that', req.url);
// });
