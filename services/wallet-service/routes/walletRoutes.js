import express from "express";
import {
  getWallets,
  analyzeWallets,
  getWalletSummary,
} from "../controllers/walletController.js";

const router = express.Router();

/**
 * @swagger
 * /wallets:
 *   get:
 *     summary: Fetch all wallets
 *     description: Get a list of all wallets with optional sorting.
 *     parameters:
 *       - in: query
 *         name: sort_by
 *         schema:
 *           type: string
 *         description: Field to sort by (e.g., total_profit)
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order (ascending or descending)
 *     responses:
 *       200:
 *         description: List of wallets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   address:
 *                     type: string
 *                     example: "0x123abc"
 *                   total_profit:
 *                     type: number
 *                     example: 1234.56
 */
router.get("/wallets", getWallets);

/**
 * @swagger
 * /wallets/analyze:
 *   post:
 *     summary: Analyze wallet data
 *     description: Trigger wallet data analysis from a JSON file.
 *     responses:
 *       200:
 *         description: Analysis complete
 */
router.post("/wallets/analyze", analyzeWallets);

/**
 * @swagger
 * /wallets/summary:
 *   get:
 *     summary: Get wallet summary
 *     description: Retrieve basic statistics about wallets.
 *     responses:
 *       200:
 *         description: Wallet summary with key statistics
 */
router.get("/wallets/summary", getWalletSummary);

export default router;
