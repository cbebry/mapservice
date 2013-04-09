var assert = require('assert');
var async = require('async');
//var Sequelize = require("sequelize");

describe('Mesh', function() {
    describe('{associations}', function() {
        it('should belong to a Tile, and have a one-to-many relationship with both MeshVertex and MeshVertexIndex.', function(done) {
            // require Associated model files
            var models = require(__dirname + "/../app/models/");
            var Mesh = models.Mesh;
            var MeshVertex = models.MeshVertex;
            var MeshVertexIndex = models.MeshVertexIndex;
            
            // create instance of the object
            // assert() some things about the instantiation's associations
            var testRelateMeshWithMeshVertex = function () {
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
                                });
                            });
                        });
                    });
                });
            }
            
            
            //async.parallel({
            //    relate_mesh_to_meshVertex: testRelateMeshWithMeshVertex
            //}, callback);
        });
    });
});