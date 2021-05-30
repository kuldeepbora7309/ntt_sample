const env = require("./env.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.office = require("../model/office.model.js")(sequelize, Sequelize);
db.officePic = require("../model/officePic.model.js")(sequelize, Sequelize);
db.officeFurniture = require("../model/officeFurniture.model.js")(
  sequelize,
  Sequelize
);
db.package = require("../model/package.model.js")(sequelize, Sequelize);
db.packageOffice = require("../model/packageOffice.model.js")(
  sequelize,
  Sequelize
);

db.office.hasMany(db.officePic, { foreignKey: "office_id", as: "images" });
db.office.hasMany(db.officeFurniture, {
  foreignKey: "office_id",
  as: "furniture",
});
db.officePic.belongsTo(db.office, {
  foreignKey: "office_id",
  as: "office",
});
db.package.hasMany(db.packageOffice, {
  foreignKey: "package_id",
  as: "offices",
});

db.packageOffice.belongsTo(db.office, {
  foreignKey: "office_id",
  as: "office",
});

module.exports = db;
