// services/walletService.js
const Wallet = require("../models/Wallet");
const fs = require("fs");

async function analyzeWallets() {
  const data = fs.readFileSync("path/to/json/file.json");
  const wallets = JSON.parse(data);

  // Batch insert into DB
  await Wallet.bulkCreate(wallets, { ignoreDuplicates: true });
}
