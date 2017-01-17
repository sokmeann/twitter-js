const express = require('express');
const router = new express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets,  showForm: true  } );
});

// router.get('/', function (req, res) {
//   var showForm = true;
//   res.render('index', { showForm });
// });

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list} );
});

// router.get('/tweets/:id', function(req, res){
//   var id = req.params.id;
//   let tweets = tweetBank.list();
//   var list = tweetBank.find( {id: id} );
//   res.render( 'index', { list: list } );
// })

module.exports = router;
