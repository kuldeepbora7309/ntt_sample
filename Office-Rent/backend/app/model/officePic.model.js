module.exports = (sequelize, Sequelize) => {
  const Office = sequelize.define("office", {
    /* attributes */
  });

  const OfficePic = sequelize.define("office_pic", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    office_id: {
      type: Sequelize.INTEGER,
    },
    pic_url: {
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

  return OfficePic;
};
