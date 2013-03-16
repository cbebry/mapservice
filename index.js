var Hapi = require('hapi'),
	options = {
		views: {
			path: __dirname + '/app/views',
			engine: {
				module: 'handlebars'
			}
		}
	},
    server = new Hapi.Server('0.0.0.0', 8000, options);

// Define the routes
var hello = {
    handler: function (request) {
        request.reply({ greeting: 'hello world' });
    }
};
var test = {
    handler: function (request) {
        request.reply({result: "test"});
    }
};

var TileController = require('./app/controllers/tile.controller');
var HomeController = require('./app/controllers/home.controller');


// Add the routes

server.route({ method: 'GET', path: '/{path*}', handler: { directory: { path: './public/', listing: true } } });

server.route({ method: 'GET', path: '/hello', config: hello });
server.route({ method: 'GET', path: '/test', config: test });
server.route({ method: 'GET', path: '/', config: HomeController.view() });
server.route({ method: 'POST', path: '/tiles/add', config: TileController.add() });
server.route({ method: 'GET', path: '/tiles/up', config: TileController.up("testparam") });


//Tail events are used for anything that requires long running async work
server.on('tail', function (request) {
    //console.log('tail event fired');
});

// Start the server
server.start();

console.log("Server up");