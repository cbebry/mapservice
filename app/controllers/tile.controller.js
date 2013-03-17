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

exports.add = function() {
    return {
        handler: function(request) {
            request.reply("tile.controller.add");
        }
    };
};