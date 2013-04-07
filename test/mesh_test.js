var assert = require("assert");
//var Sequelize = require("sequelize");

describe('Mesh', function() {
    describe('{associations}', function() {
        it('should belong to a Tile, and have a one-to-many relationship with both MeshVertex and MeshVertexIndex.', function(done) {
            //var devconfig = require('../config/database').config;

            //var dbname = devconfig.db;
            //var dbhostname = devconfig.hostname;
            //var dbport = devconfig.port;
            //var dbuser = devconfig.user;
            //var dbpassword = devconfig.password;
                        
            
            //var sequelize = new Sequelize(dbname, dbuser, dbpassword, {
            //    host: dbhostname,
            //    port: dbport
            //});
            
            // require Associated model files
            var models = require(__dirname + "/../app/models/");
            var Mesh = models.Mesh;
            var MeshVertex = models.MeshVertex;
            var MeshVertexIndex = models.MeshVertexIndex;
            //var Mesh = sequelize.import(__dirname + "/../app/models/mesh.model");
            //var MeshVertex = sequelize.import(__dirname + "/../app/models/mesh.vertex.model");
            //var MeshVertexIndex = sequelize.import(__dirname + "/../app/models/mesh.vertex_index.model");
            
            // create instance of the object
            // assert() some things about the instantiation's associations
            console.log("test");
            //assert(false);
            Mesh.create({ /* */ }).success(function(mesh) {
                MeshVertex.create({ /* */ }).success(function(meshVertex) {
                    mesh.hasMeshVertex(meshVertex).success(function(result) {
                        // result would be false
                        console.log("result1:" + result);
                        assert(result == false);
                        mesh.addMeshVertex(meshVertex).success(function() {
                            mesh.hasMeshVertex(meshVertex).success(function(result) {
                                // result would be true
                                console.log("result2:" + result);
                                assert(result == true);
                                done();
                            })
                        })
                    })
                })
            })

            //TODO:
            
            
            
            //(false);
        });
    });
});