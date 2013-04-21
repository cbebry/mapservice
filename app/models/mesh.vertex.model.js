// TODO: Should Vertex store X,Y,Z to explode before shipping to client?
module.exports = function(sequelize, DataTypes) {
    var MeshVertex = sequelize.define("MeshVertex", {
        x:   DataTypes.FLOAT,
        y:   DataTypes.FLOAT,
        z:   DataTypes.FLOAT,
        sorting_index:  DataTypes.INTEGER
	}, {
        freezeTableName: true
	});
    
	return MeshVertex;
};
