var AuthController = require('./app/controllers/auth.controller');
var Hapi = require('hapi'),

	options = {
		auth: {
			'basic': {
				scheme: 'basic',
				validateFunc: AuthController.getValidate()
			}
		}
	},
    serverConfig = require('./config/config').config,
    server = new Hapi.Server(serverConfig.hostname, serverConfig.port, options);

    
server.views({
    engines: {
        html: 'handlebars'            
    },
    path: __dirname + '/app/views'
});



/*
server.auth('simple', {
    scheme: 'basic', 
    validateFunc: zvalidate
});
    */

// Define the routes
var test = {
    handler: function (request) {
        request.reply({result: "test"});
    }
};

var TileController = require('./app/controllers/tile.controller');
var HomeController = require('./app/controllers/home.controller');
//var UtilController = require('./app/controllers/util.controller');


// Add the routes

//server.route({ method: 'GET', path: '/auth', config: AuthController.auth() });

server.route([
	{ method: 'GET', path: '/{path*}', handler: { directory: { path: './public/', listing: true } } },
	{ method: 'GET', path: '/test', config: test },
	{ method: 'GET', path: '/', config: HomeController.view() },
	{ method: 'POST', path: '/tiles/add', config: TileController.add() },
	{ method: 'GET', path: '/tiles/up', config: TileController.up("testparam") },
	{ method: 'GET', path: '/basic', config: AuthController.getBasic() }
]);

// Start the server
server.start();

console.log("Server up");
