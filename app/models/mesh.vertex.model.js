// TODO: Should Vertex store X,Y,Z to explode before shipping to client?
// belongsTo Mesh
module.exports = function(sequelize, DataTypes) {
    var MeshVertex = sequelize.define("MeshVertex", {
        x:   DataTypes.FLOAT,
        y:   DataTypes.FLOAT,
        z:   DataTypes.FLOAT,
        sorting_index:  DataTypes.INTEGER
	}, {
        freezeTableName: true
	});
    //var Mesh = sequelize.import(__dirname + "/mesh.model");
    //MeshVertex.belongsTo(Mesh);
	return MeshVertex;
};
