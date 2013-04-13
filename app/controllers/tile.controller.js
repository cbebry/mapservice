exports.up = function(params) {
    //console.log(params);
    return {
        handler: function(request) {  
            console.log("Inside tile.controller.js::up");
            
            var devconfig = require('../../config/database').config;

            var dbname = devconfig.db;
            var dbhostname = devconfig.hostname;
            var dbport = devconfig.port;
            var dbuser = devconfig.user;
            var dbpassword = devconfig.password;

            
            var Sequelize = require("sequelize");
            
            var sequelize = new Sequelize(dbname, dbuser, dbpassword, {
                host: dbhostname,
                port: dbport
            });
            
            //Import the Tile definition.
            var Tile = sequelize.import(__dirname + "/../models/tile.model");

            //Sync will try to create the table.
            Tile.sync().success(function() {
                console.log("successfully connected to db and created Tile table.");
                request.reply("The Tiles table is up.");
                //tailConnect();
            }).error(function(error) {
                console.log("error tile.controller.js when syncing Tile");
                console.log(error);
                request.reply("There was an error when processing that request.\nError Details: " + error);
                //tailConnect();
            });
        }
    };
};

exports.add = function(params) {
    //expect some properties of the new tile in params
    return {
        handler: function(request) {
            //stub
            request.reply("tile.controller.add");
        }
    };
};

exports.get = function(params) {
    //expect some params.id for getting by primary key
    return {
        handler: function(request) {
            //stub
            request.reply("tile.controller.add");
        }
    };
};

exports.update = function(params) {
    //expect an existing primary key from params.id, and properties of the
    //  existing tile
    return {
        handler: function(request) {
            //stub
            request.reply("tile.controller.add");
        }
    };
};

exports.delete = function(params) {
    //expect an existing primary key from params.id
    return {
        handler: function(request) {
            //stub
            request.reply("tile.controller.add");
        }
    };
};