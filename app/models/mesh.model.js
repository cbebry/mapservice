//{
//	id: <PK into DB>,
//	vertices:[<Float32 in local coordinates around center origin>],
//	vIndices:[<integer indices>]
//}

// hasMany MeshVertex & MeshVertexIndex
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Mesh", {
        //id:     DataTypes.STRING
    });
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
