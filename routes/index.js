var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});
app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

router.get('/test', isLoggedIn, function(req, res){
		res.send('Hello World!');
});

module.exports = router;