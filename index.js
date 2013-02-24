var Hapi = require('hapi');
var orm = require ('orm');
var devconfig = require('./config/development').config;

var dbtype = devconfig.type;
var dbhostname = devconfig.hostname;
var dbport = devconfig.port;
var dbuser = devconfig.user;
var dbpassword = devconfig.password;

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
        request.reply({result: "test"});
    }
};
// Add the route
server.route({ method: 'GET', path: '/hello', config: hello });
server.route({ method: 'GET', path: '/test', config: test });

// Start the server
server.start();
