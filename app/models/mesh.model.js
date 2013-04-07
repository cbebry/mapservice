//{
//	id: <PK into DB>,
//	vertices:[<Float32 in local coordinates around center origin>],
//	vIndices:[<integer indices>]
//}
// hasMany MeshVertex & MeshVertexIndex
module.exports = function(sequelize, DataTypes) {
    var Mesh = sequelize.define("Mesh", {
        //id:     DataTypes.STRING
    }, {
        freezeTableName: true
    });
    //var MeshVertex = sequelize.import(__dirname + "/mesh.vertex.model");
    //var MeshVertexIndex = sequelize.import(__dirname + "/mesh.vertexIndex.model");
    //Mesh.hasMany(MeshVertex);
    //Mesh.hasMany(MeshVertexIndex);
    
    return Mesh;
};

// hasMany vertices & vIndices
//exports.tile.mesh.sqlDefine = {
//	id:	Sequalize.STRING 
//}; 



// TODO: Should Vertex store X,Y,Z to explode before shipping to client?
// belongsTo mesh
//exports.tile.mesh.Vertex.SqlDefine = {
//	id:	Sequalize.STRING,
//	data:	Sequelize.FLOAT,
//	index:	Sequalize.INTEGER
//};

// belongs to mesh
//exports.tile.mesh.vIndex.sqlDefine = {
//        id:     Sequalize.STRING,
//        data:   Sequeliz.INTEGER,
//        index:  Sequalize.INTEGER
//};
