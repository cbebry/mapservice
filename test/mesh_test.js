var assert = require("assert");

describe('Mesh', function() {
    describe('{associations}', function() {
        it('should belong to a Tile, and have a one-to-many relationship with both MeshVertex and MeshVertexIndex.', function() {
            var devconfig = require('../config/database').config;

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
            var Mesh = sequelize.import(__dirname + "/../app/models/mesh.model");
            //TODO:
            // require Associated model files
            // create instance of the object
            // assert() some things about the instantiation's associations
            assert(false);
        });
    });
});