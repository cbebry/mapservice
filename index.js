var Hapi = require('hapi'),
	options = {	},
    serverConfig = require('./config/config').config,
    server = new Hapi.Server(serverConfig.hostname, serverConfig.port, options);

    
server.views({
    engines: {
        html: 'handlebars'            
    },
    path: __dirname + '/app/views'
});

/*

var Bcrypt = require('bcrypt');
var users = {
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    }
};

var zvalidate = function (username, password, callback) {

    var user = users[username];
    if (!user) {
        return callback(null, false);
    }

    Bcrypt.compare(password, user.password, function (err, isValid) {

        callback(err, isValid, { id: user.id, name: user.name });
    });
};
*/
    //server.auth('simple', {
    //    scheme: 'basic', 
    //    validateFunc: zvalidate
    //});
    

// Define the routes
var test = {
    handler: function (request) {
        request.reply({result: "test"});
    }
};

var TileController = require('./app/controllers/tile.controller');
var HomeController = require('./app/controllers/home.controller');
var AuthController = require('./app/controllers/auth.controller');
//var UtilController = require('./app/controllers/util.controller');


// Add the routes

server.route({ method: 'GET', path: '/{path*}', handler: { directory: { path: './public/', listing: true } } });

server.route({ method: 'GET', path: '/test', config: test });
server.route({ method: 'GET', path: '/', config: HomeController.view() });
server.route({ method: 'POST', path: '/tiles/add', config: TileController.add() });
server.route({ method: 'GET', path: '/tiles/up', config: TileController.up("testparam") });
//server.route({ method: 'GET', path: '/auth', config: { auth: 'simple' } });

// Start the server
server.start();

console.log("Server up");
