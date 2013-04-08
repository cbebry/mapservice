var Hapi = require('hapi'),
	options = {
		views: {
			path: __dirname + '/app/views',
			engine: {
				module: 'handlebars'
			}
		}
	},
    serverConfig = require('./config/config').config,
    server = new Hapi.Server(serverConfig.hostname, serverConfig.port, options);

// Define the routes
var test = {
    handler: function (request) {
        request.reply({result: "test"});
    }
};

var TileController = require('./app/controllers/tile.controller');
var HomeController = require('./app/controllers/home.controller');
var UtilController = require('./app/controllers/util.controller');


// Add the routes

server.route({ method: 'GET', path: '/{path*}', handler: { directory: { path: './public/', listing: true } } });

server.route({ method: 'GET', path: '/test', config: test });
server.route({ method: 'GET', path: '/', config: HomeController.view() });
server.route({ method: 'POST', path: '/tiles/add', config: TileController.add() });
server.route({ method: 'GET', path: '/tiles/up', config: TileController.up("testparam") });

// Start the server
server.start();

console.log("Server up");
