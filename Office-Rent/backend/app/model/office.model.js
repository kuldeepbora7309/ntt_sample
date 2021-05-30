module.exports = (sequelize, Sequelize) => {
  const Office = sequelize.define("office", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    space: {
      type: Sequelize.STRING,
    },
    floor: {
      type: Sequelize.INTEGER,
    },
    location: {
      type: Sequelize.STRING,
    },
    rent: {
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

  return Office;
};
