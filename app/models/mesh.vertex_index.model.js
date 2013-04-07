
// belongsTo Mesh
module.exports = function(sequelize, DataTypes) {
    var MeshVertexIndex = sequelize.define("MeshVertexIndex", {
        data:   DataTypes.INTEGER,
		iteration_index:  DataTypes.INTEGER
	}, {
        freezeTableName: true
    });
    //var Mesh = sequelize.import(__dirname + "/mesh.model");
    //MeshVertexIndex.belongsTo(Mesh);
	return MeshVertexIndex;
};


// belongs to mesh
//exports.tile.mesh.vIndex.sqlDefine = {
//        id:     Sequalize.STRING,
//        data:   Sequeliz.INTEGER,
//        index:  Sequalize.INTEGER
//};

