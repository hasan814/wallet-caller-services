import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  total_profit: { type: Number, default: 0 },
  num_tokens_traded: { type: Number, default: 0 },
  num_active_days: { type: Number, default: 0 },
  avg_trade_volume: { type: Number, default: 0 },
  risk_assessment: { type: String },
  last_updated: { type: Date, default: Date.now },
});

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
