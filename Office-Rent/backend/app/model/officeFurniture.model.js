module.exports = (sequelize, Sequelize) => {
  const OfficeFurniture = sequelize.define("office_furniture", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    office_id: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
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
  return OfficeFurniture;
};
