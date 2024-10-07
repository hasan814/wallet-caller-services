const Wallet = require("../models/wallet.model");
const fs = require("fs");

async function getWallets(sortBy, order) {
  return Wallet.findAll({ order: [[sortBy, order]] });
}

async function getWalletByAddress(address) {
  return Wallet.findOne({ where: { address } });
}

async function analyzeJsonFile(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const walletsData = JSON.parse(fileContent);
  await Wallet.bulkCreate(walletsData);
}

async function getSummary() {
  const avgProfit = await Wallet.findAll({
    attributes: [
      [sequelize.fn("AVG", sequelize.col("total_profit")), "avgProfit"],
    ],
  });
  const walletCount = await Wallet.count();
  return { avgProfit, walletCount };
}

module.exports = {
  getWallets,
  getWalletByAddress,
  analyzeJsonFile,
  getSummary,
};
