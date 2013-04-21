module.exports = function(sequelize, DataTypes) {
    var MeshVertexIndex = sequelize.define("MeshVertexIndex", {
        data:   DataTypes.INTEGER,
		iteration_index:  DataTypes.INTEGER
	}, {
        freezeTableName: true
    });

	return MeshVertexIndex;
};
