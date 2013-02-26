
// belongsTo Mesh
module.exportsi.MeshVertexIndex = function(sequelize, DataTypes) {
	return sequelize.define("MeshVertexIndex", {
		id:     DataTypes.STRING,
		data:   DataTypes.INTEGER,
		index:  DataTypes.INTEGER
	});
};


// belongs to mesh
//exports.tile.mesh.vIndex.sqlDefine = {
//        id:     Sequalize.STRING,
//        data:   Sequeliz.INTEGER,
//        index:  Sequalize.INTEGER
//};

