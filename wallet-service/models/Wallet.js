// models/Wallet.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Wallet = sequelize.define(
  "Wallet",
  {
    address: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    total_profit: {
      type: DataTypes.FLOAT,
    },
    num_tokens_traded: {
      type: DataTypes.INTEGER,
    },
    num_active_days: {
      type: DataTypes.INTEGER,
    },
    avg_trade_volume: {
      type: DataTypes.FLOAT,
    },
    risk_assessment: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Wallet;
