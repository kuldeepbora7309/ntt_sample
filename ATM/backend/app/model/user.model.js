module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    auth_token: {
      type: Sequelize.STRING,
    },
    otp: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    account_number: {
      type: Sequelize.INTEGER,
    },
    pin_number: {
      type: Sequelize.INTEGER,
    },
    current_balance: {
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

  return User;
};
