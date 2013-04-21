//{
//	id: <PK into DB>,
//	vertices:[<Float32 in local coordinates around center origin>],
//	vIndices:[<integer indices>]
//}
// hasMany MeshVertex & MeshVertexIndex

// TODO: Should Vertex store X,Y,Z to explode before shipping to client?
// belongsTo mesh
module.exports = function(sequelize, DataTypes) {
    var Mesh = sequelize.define("Mesh", {
        //id:     DataTypes.STRING
    }, {
        freezeTableName: true
    });

    return Mesh;
};
