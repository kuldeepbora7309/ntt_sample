module.exports = (sequelize, Sequelize) => {
  const Balance = sequelize.define("balance", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    current_balance: {
      type: Sequelize.INTEGER,
    },
    currency_2000: {
      type: Sequelize.INTEGER,
    },
    currency_500: {
      type: Sequelize.INTEGER,
    },
    currency_200: {
      type: Sequelize.INTEGER,
    },
    currency_100: {
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

  return Balance;
};
