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
 *     description: Retrieves a list of all wallets with optional sorting by fields like `total_profit`.
 *     parameters:
 *       - in: query
 *         name: sort_by
 *         schema:
 *           type: string
 *         description: Field to sort by (e.g., `total_profit`)
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order (`asc` for ascending, `desc` for descending)
 *     security:
 *       - bearerAuth: []   # Added Bearer Token Authentication for Swagger
 *     responses:
 *       200:
 *         description: A list of wallets
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
 *                   num_tokens_traded:
 *                     type: number
 *                     example: 10
 *                   risk_assessment:
 *                     type: string
 *                     example: "medium"
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 */

router.get("/wallets", getWallets);

/**
 * @swagger
 * /wallets/analyze:
 *   post:
 *     summary: Analyze wallet data
 *     description: Trigger wallet data analysis from a JSON file.
 *     security:
 *       - bearerAuth: []   # Added Bearer Token Authentication for Swagger
 *     responses:
 *       200:
 *         description: Analysis complete
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 */
router.post("/wallets/analyze", analyzeWallets);

/**
 * @swagger
 * /wallets/summary:
 *   get:
 *     summary: Get wallet summary
 *     description: Retrieve basic statistics about wallets.
 *     security:
 *       - bearerAuth: []   # Added Bearer Token Authentication for Swagger
 *     responses:
 *       200:
 *         description: Wallet summary with key statistics
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 */
router.get("/wallets/summary", getWalletSummary);

export default router;
