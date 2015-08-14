var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	mongoose = require('mongoose'),
    passport = require('./auth'),
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
app.get('/product', function(req, res) {
	res.sendFile(__dirname + '/views/product.html');
});
app.get('/login', function(req, res) {
	res.sendFile(__dirname + '/views/login/login.html');
});
app.get('/registreer', function(req, res) {
	res.sendFile(__dirname + '/views/login/registreer.html');
});
app.get('/order', function(req, res) {
	res.sendFile(__dirname + '/views/order.html');
});
app.get('/manager/', function(req, res) {
	res.sendFile(__dirname + '/views/admin/index.html');
});
app.get('/manager/insert', function(req, res) {
	res.sendFile(__dirname + '/views/admin/insert.html');
});
app.get('/manager/dashboard', function(req, res) {
	res.sendFile(__dirname + '/views/admin/dashboard.html');
});
app.get('/manager/clients', function(req, res) {
	res.sendFile(__dirname + '/views/admin/clients.html');
});
app.get('/manager/orders', function(req, res) {
	res.sendFile(__dirname + '/views/admin/orders.html');
});

var Product = app.product = restful.model('Product', mongoose.Schema({
	title: {
		type: String,
		required: true
	},
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

var User = app.user = restful.model('User', mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
    type: {
		type: String,
		required: true
	}
}, {collection: 'user'})).methods(['get', 'post', 'put', 'delete']);
User.register(app, '/user');

var Order = app.user = restful.model('Order', mongoose.Schema({
	user_id: {
		type: String,
		required: true
	},
	product_id: {
		type: String,
		required: true
	},
    address: {
		type: String,
		required: true
	},
    amount: {
		type: String,
		required: true
	},
    status: {
		type: String,
		required: true
	}
}, {collection: 'order'})).methods(['get', 'post', 'put', 'delete']);
User.register(app, '/order');

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
    
    socket.on('order', function(data) {
        var new_order = new Order(data);
        new_order.save(function(err, data){
            console.log(err);
            console.log(data);
            
            io.emit('updateOrder', data);
        });
	});
    
});

io.on('connect', function(socket) {
	Product.find()
		.exec(function(err, products) {
			socket.emit('startMessages', products);
		});
    
    User.find()
		.exec(function(err, users) {
			socket.emit('startUsers', users);
		});
    
    Order.find()
		.exec(function(err, orders) {
			socket.emit('startOrders', orders);
		});
});


var server = http.listen(3003, function(){
	console.log('Server running on http://localhost:3003');
});

module.exports = app;