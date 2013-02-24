var Hapi = require('hapi');
var ourDB = require('./config/development');

// Create a server with a host and port
var server = new Hapi.Server('0.0.0.0', 8000);

// Define the route
var hello = {
    handler: function (request) {

        request.reply({ greeting: 'hello world' });
    }
};
var test = {
    handler: function (request) {
        var dbname = ourDB.config.db;
        request.reply({result: dbname});
    }
};
// Add the route
server.route({ method: 'GET', path: '/hello', config: hello });
server.route({ method: 'GET', path: '/test', config: test });

// Start the server
server.start();
