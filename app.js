var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	mongoose = require('mongoose'),
	swig = require('swig'),
	bodyParser = require('body-parser'),
	path = require('path'),
	restful = require('node-restful'),
	io = require('socket.io')(http);

mongoose.connect('mongodb://localhost/district');

app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});
app.get('/insert', function(req, res) {
	res.sendFile(__dirname + '/views/insert.html');
});

var Product = app.product = restful.model('Product', mongoose.Schema({
	description: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
    image: {
		type: String,
		required: true
	}
}, {collection: 'product'})).methods(['get', 'post', 'put', 'delete']);
Product.register(app, '/product');

io.on('connection', function(socket) {
	console.log('user connected');
	socket.on('disconnect', function() {
		console.log('user disconnected');
	});
	socket.on('product', function(data) {
        var new_product = new Product(data);
        new_product.save(function(err, data){
            console.log(err);
            console.log(data);
            
            io.emit('update', data);
        });
	});
});
io.on('connect', function(socket) {
	Product.find()
		.exec(function(err, products) {
			socket.emit('startMessages', products);
		});
});


var server = http.listen(3003, function(){
	console.log('Server running on http://localhost:3003');
});

module.exports = app;