module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Tile", {
        //name: DataTypes.STRING,
        //description: DataTypes.TEXT
    }, {
        freezeTableName: true
    });
};