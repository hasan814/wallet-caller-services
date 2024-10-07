const express = require("express");
const {
  getWallets,
  getWalletByAddress,
  analyzeJsonFile,
  getSummary,
} = require("../services/wallet.service");

const router = express.Router();

router.get("/wallets", async (req, res) => {
  const { sort_by, order } = req.query;
  const wallets = await getWallets(sort_by, order);
  res.json(wallets);
});

router.get("/wallets/:address", async (req, res) => {
  const wallet = await getWalletByAddress(req.params.address);
  res.json(wallet);
});

router.post("/wallets/analyze", async (req, res) => {
  await analyzeJsonFile("path/to/json-file");
  res.json({ message: "Analysis completed" });
});

router.get("/wallets/summary", async (req, res) => {
  const summary = await getSummary();
  res.json(summary);
});

module.exports = router;
