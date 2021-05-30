module.exports = (sequelize, Sequelize) => {
  const PackageOffice = sequelize.define("package_office", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    package_id: {
      type: Sequelize.INTEGER,
    },
    office_id: {
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

  return PackageOffice;
};
