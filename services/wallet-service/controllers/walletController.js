import Wallet from "../models/walletModel.js";

// GET /wallets
export const getWallets = async (req, res) => {
  const { sort_by, order } = req.query;
  const sortOptions = {};
  if (sort_by) sortOptions[sort_by] = order === "desc" ? -1 : 1;

  try {
    const wallets = await Wallet.find().sort(sortOptions);
    res.status(200).json(wallets);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// POST /wallets/analyze
export const analyzeWallets = async (req, res) => {
  // Parsing and ingesting data logic here...
  res.status(200).json({ message: "Analysis complete" });
};

// GET /wallets/summary
export const getWalletSummary = async (req, res) => {
  const avgProfit = await Wallet.aggregate([
    { $group: { _id: null, avgProfit: { $avg: "$total_profit" } } },
  ]);

  res.status(200).json({ avgProfit });
};
