// routes/walletRoutes.js
const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");

router.get("/wallets", walletController.getWallets);
router.get("/wallets/:address", walletController.getWalletByAddress);
router.post("/wallets/analyze", walletController.analyzeWallets);
router.get("/wallets/summary", walletController.getSummary);

module.exports = router;
