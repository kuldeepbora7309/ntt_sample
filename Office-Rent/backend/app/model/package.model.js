module.exports = (sequelize, Sequelize) => {
  const Package = sequelize.define("package", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lease_type: {
      type: Sequelize.STRING,
    },
    lease_duration: {
      type: Sequelize.STRING,
    },
    rent_package: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      field: "created",
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: "modified",
      type: Sequelize.DATE,
    },
  });

  return Package;
};
