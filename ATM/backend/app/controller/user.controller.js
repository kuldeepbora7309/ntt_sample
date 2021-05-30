const db = require("../config/db.config.js");
const User = db.user;
const Balance = db.balance;
const Op = db.Sequelize.Op;

//generate Otp
exports.generateOtp = (req, res) => {
  let account = req.body.account;
  let otp = 100000 + Math.floor(Math.random() * 900000);
  let data = {
    otp: otp,
  };
  User.findOne({ where: { account_number: account } })
    .then(function (user) {
      if (!user) {
        return res
          .status(201)
          .send({ error: true, message: "Incorrect Account" });
      } else {
        User.update(data, { where: { account_number: account } })
          .then(() => {
            return res.status(200).send({
              error: false,
              message: "Otp send to mobile number",
              data: otp,
            });
          })
          .catch((error) =>
            res.status(400).send({ error: true, message: error })
          );
      }
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// Authenticate user
exports.authenticate = (req, res) => {
  let account = req.body.account;
  let otp = req.body.otp;
  User.findOne({ where: { account_number: account, otp: otp } })
    .then(function (user) {
      if (!user) {
        return res
          .status(201)
          .send({ error: true, message: "Incorrect Account/OTP" });
      } else {
        user.auth_token = Math.random().toString(36).substr(2);
        data = {
          auth_token: user.auth_token,
          otp: null,
        };
        User.update(data, { where: { id: user.id } });
        let response = userDetail(user);
        return res.status(200).send({
          error: false,
          message: "User authentication is successfully.",
          data: response,
        });
      }
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

exports.getUserDetailFromToken = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  return getUserDetails(token).then((response) => {
    if (response.error) {
      return res.status(201).send(response);
    } else {
      return res.status(200).send(response);
    }
  });
};

//make user logout
exports.logout = (req, res) => {
  let token = getAuthToken(req);
  var data = {
    otp: null,
    auth_token: null,
  };
  User.update(data, { where: { auth_token: token } })
    .then(() => {
      return res
        .status(200)
        .send({ error: false, message: "user logout successfully" });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

const getUserDetails = (auth_token = null) => {
  return User.findOne({ where: { auth_token: auth_token } })
    .then(function (user) {
      if (!user) {
        response = { error: true, message: "User Not Found" };
      } else {
        response = {
          error: false,
          message: "valid Token",
          data: userDetail(user),
        };
      }
      return response;
    })
    .catch((error) => {
      return (response = { error: true, message: error });
    });
};

module.exports.validateToken = getUserDetails;

const userDetail = (user) => {
  return {
    name: user.name,
    account_number: user.account_number,
    pin_number: user.pin_number,
    current_balance: user.current_balance,
    auth_token: user.auth_token,
  };
};

const getAuthToken = (req) => {
  const token = req.headers.authorization.split(" ")[1];
  return token;
};

const getUserIdFromAuthToken = (token) => {
  return User.findOne({ where: { auth_token: token } }).then(function (user) {
    return user.id;
  });
};

// Change ATM Pin
exports.changePin = (req, res) => {
  let data = {
    pin_number: req.body.pin,
  };
  let token = getAuthToken(req);
  User.update(data, { where: { auth_token: token } })
    .then(() => {
      return res
        .status(200)
        .send({ error: false, message: "ATM pin successfully updated" });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// get beneficiary List
exports.beneficiaryList = (req, res) => {
  getUserIdFromAuthToken(getAuthToken(req)).then((userId) => {
    User.findAll({
      where: {
        id: {
          [Op.not]: userId,
        },
      },
    })
      .then((users) => {
        return res.status(200).send({
          error: false,
          message: "user list successfully fetched.",
          data: users,
        });
      })
      .catch((error) => res.status(400).send({ error: true, message: error }));
  });
};

// fund Transfer
exports.fundTransfer = (req, res) => {
  let beneficiaryId = req.body.beneficiaryId;
  let transferAmount = parseInt(req.body.transferAmount);
  console.log("beneficiaryId", beneficiaryId);
  console.log("transferAmount", transferAmount);
  let breakupCurrencyData = amountBreakupIntoCurrency(transferAmount);
  let token = getAuthToken(req);
  User.findOne({ where: { auth_token: token } }).then(function (user) {
    if (transferAmount > user.current_balance) {
      return res
        .status(201)
        .send({ error: true, message: "Insufficient Balance" });
    } else {
      let remainingBalanceUser =
        parseInt(user.current_balance) - parseInt(transferAmount);
      User.update(
        {
          current_balance: remainingBalanceUser,
        },
        { where: { auth_token: token } }
      );

      User.findOne({ where: { id: beneficiaryId } }).then(function (user) {
        let remainingBalance =
          parseInt(user.current_balance) + parseInt(transferAmount);
        User.update(
          {
            current_balance: remainingBalance,
          },
          { where: { id: beneficiaryId } }
        );
      });

      updateAtmBalance(breakupCurrencyData, transferAmount, "deposit")
        .then((updatedBalanceData) => {
          return res.status(200).send({
            error: false,
            message: "Fund Transfer successfully done",
            currentBalance: {
              user: remainingBalanceUser,
              atm: updatedBalanceData.current_balance,
            },
          });
        })
        .catch((error) =>
          res.status(400).send({ error: true, message: error })
        );
    }
  });
};

const amountBreakupIntoCurrency = (transferAmount) => {
  let amount = transferAmount;
  let breakupCurrencyData = {};
  let currency_2000 = 0;
  let currency_500 = 0;
  let currency_200 = 0;
  let currency_100 = 0;
  if (amount >= 2000) {
    currency_2000 = parseInt(amount / 2000);
    amount = amount - 2000 * currency_2000;
  }
  if (amount >= 500) {
    currency_500 = parseInt(amount / 500);
    amount = amount - 500 * currency_500;
  }
  if (amount >= 200) {
    currency_200 = parseInt(amount / 200);
    amount = amount - 200 * currency_200;
  }
  if (amount >= 100) {
    currency_100 = parseInt(amount / 100);
    amount = amount - 100 * currency_100;
  }

  if (amount === 0) {
    breakupCurrencyData = {
      currency_2000: currency_2000,
      currency_500: currency_500,
      currency_200: currency_200,
      currency_100: currency_100,
    };
  }
  return breakupCurrencyData;
};

exports.dashboardList = (req, res) => {
  getBalanceDetail().then((response) => {
    let token = getAuthToken(req);
    User.findOne({ where: { auth_token: token } }).then(function (user) {
      return res.status(200).send({
        error: false,
        currentBalance: {
          user: user.current_balance,
          atm: response.current_balance,
          atmCurrencyStatus: {
            currency_2000: response.currency_2000,
            currency_500: response.currency_500,
            currency_200: response.currency_200,
            currency_100: response.currency_100,
          },
        },
      });
    });
  });
};

//get ATM status
const getBalanceDetail = () => {
  return Balance.findOne({})
    .then(function (balance) {
      return balance;
    })
    .catch((error) => {
      return (response = { error: true, message: error });
    });
};

//update ATM balance
const updateAtmBalance = (data, amount, type = "deposit") => {
  return getBalanceDetail().then((currentBalanceData) => {
    let updatedBalanceData = {};
    if (type === "deposit") {
      updatedBalanceData = {
        current_balance:
          parseInt(currentBalanceData.current_balance) + parseInt(amount),
        currency_2000:
          parseInt(currentBalanceData.currency_2000) +
          parseInt(data.currency_2000),
        currency_500:
          parseInt(currentBalanceData.currency_500) +
          parseInt(data.currency_500),
        currency_200:
          parseInt(currentBalanceData.currency_200) +
          parseInt(data.currency_200),
        currency_100:
          parseInt(currentBalanceData.currency_100) +
          parseInt(data.currency_100),
      };
    } else {
      updatedBalanceData = {
        current_balance:
          parseInt(currentBalanceData.current_balance) - parseInt(amount),
        currency_2000:
          parseInt(currentBalanceData.currency_2000) -
          parseInt(data.currency_2000),
        currency_500:
          parseInt(currentBalanceData.currency_500) -
          parseInt(data.currency_500),
        currency_200:
          parseInt(currentBalanceData.currency_200) -
          parseInt(data.currency_200),
        currency_100:
          parseInt(currentBalanceData.currency_100) -
          parseInt(data.currency_100),
      };
    }
    return Balance.update(updatedBalanceData, {
      where: {
        id: {
          [Op.not]: 0,
        },
      },
    }).then(() => {
      return updatedBalanceData;
    });
  });
};

// fund Withdrawal
exports.fundWithdrawal = (req, res) => {
  let withdrawalAmount = parseInt(req.body.withdrawalAmount);
  let breakupCurrencyData = amountBreakupIntoCurrency(withdrawalAmount);
  let token = getAuthToken(req);
  User.findOne({ where: { auth_token: token } }).then(function (user) {
    if (withdrawalAmount > user.current_balance) {
      return res
        .status(201)
        .send({ error: true, message: "Insufficient Balance" });
    } else {
      let remainingBalance =
        parseInt(user.current_balance) - parseInt(withdrawalAmount);
      User.update(
        {
          current_balance: remainingBalance,
        },
        { where: { auth_token: token } }
      );

      updateAtmBalance(breakupCurrencyData, withdrawalAmount, "withdrawal")
        .then((updatedBalanceData) => {
          return res.status(200).send({
            error: false,
            message: "Fund Withdrawal successfully done",
            currentBalance: {
              user: remainingBalance,
              atm: updatedBalanceData.current_balance,
            },
            currencyBreakup: breakupCurrencyData,
          });
        })
        .catch((error) =>
          res.status(400).send({ error: true, message: error })
        );
    }
  });
};

// Cash Deposit
exports.cashDeposit = (req, res) => {
  let cashAmount = parseInt(req.body.cashAmount);
  let breakupCurrencyData = req.body.breakupCurrencyData;
  let token = getAuthToken(req);
  User.findOne({ where: { auth_token: token } }).then(function (user) {
    let remainingBalance =
      parseInt(user.current_balance) + parseInt(cashAmount);
    User.update(
      {
        current_balance: remainingBalance,
      },
      { where: { auth_token: token } }
    );

    updateAtmBalance(breakupCurrencyData, cashAmount, "deposit")
      .then((updatedBalanceData) => {
        return res.status(200).send({
          error: false,
          message: "Cash Deposit successfully done",
          currentBalance: {
            user: remainingBalance,
            atm: updatedBalanceData.current_balance,
          },
        });
      })
      .catch((error) => res.status(400).send({ error: true, message: error }));
  });
};
