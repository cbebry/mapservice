var Sequelize = require('sequelize');

console.log("process.env.NODE_ENV: [" + process.env.NODE_ENV + "]");

var devconfig = require('../../config/database').config;

var dbname = devconfig.db;
var dbhostname = devconfig.hostname;
var dbport = devconfig.port;
var dbuser = devconfig.user;
var dbpassword = devconfig.password;

var sequelize = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhostname,
    port: dbport
});

var models = [
    {
        name: "Mesh",
        file: "mesh"
    },  {
        name: "MeshVertex",
        file: "mesh.vertex"
    },  {
        name: "MeshVertexIndex",
        file: "mesh.vertex_index"
    }
];

//load models
models.forEach(function(model) {
    module.exports[model.name] = sequelize.import(__dirname + '/' + model.file + '.model'); 
});


(function (model) {
    //define associations
    model.Mesh.hasMany(model.MeshVertex);
    model.Mesh.hasMany(model.MeshVertexIndex);
    model.MeshVertex.belongsTo(model.Mesh);
    model.MeshVertexIndex.belongsTo(model.Mesh);
    
    //ensure tables are created
    model.Mesh.sync();
    model.MeshVertex.sync();
    model.MeshVertexIndex.sync();
})(module.exports);

//export the connection
module.exports.sequelize = sequelize;