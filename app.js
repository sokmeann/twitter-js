
const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const router = require('./routes');
const path = require('path');
const volleyball = require('volleyball')


var PORT = 3000;

app.use(volleyball);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

app.use(express.static(path.join(__dirname,'/public')));

app.use('/', router);


app.listen(PORT, function(){
  console.log(`Listening on port number ${PORT}`);
});
