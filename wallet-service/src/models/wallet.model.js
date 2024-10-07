const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Wallet = sequelize.define("Wallet", {
  address: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  total_profit: DataTypes.FLOAT,
  num_tokens_traded: DataTypes.INTEGER,
  num_active_days: DataTypes.INTEGER,
  avg_trade_volume: DataTypes.FLOAT,
  risk_assessment: DataTypes.STRING,
  last_updated: DataTypes.DATE,
});

module.exports = Wallet;
