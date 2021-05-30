module.exports = function (app) {
  const users = require("../controller/user.controller.js");

  // authenticate user
  app.post("/api/authenticate", users.authenticate);

  // authenticate user with token
  app.get("/api/getUserDetailFromToken", users.getUserDetailFromToken);

  // dashboard-list
  app.get("/api/dashboard-list", users.dashboardList);

  // logout user
  app.get("/api/logout", users.logout);

  // genrate OTP
  app.post("/api/generate-otp", users.generateOtp);

  // change atm pin
  app.post("/api/change-pin", users.changePin);

  // beneficiary user list
  app.get("/api/beneficiary-list", users.beneficiaryList);

  // fund transfer to beneficiary
  app.post("/api/fund-transfer", users.fundTransfer);

  // fund withdrawal
  app.post("/api/fund-withdrawal", users.fundWithdrawal);

  // cash Deposit
  app.post("/api/cash-deposit", users.cashDeposit);
};
