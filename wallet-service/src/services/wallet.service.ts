import { Injectable } from '@nestjs/common';
import { Wallet } from '../models/wallet.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class WalletService {
    constructor(private sequelize: Sequelize) { }

    async getWallets(sortBy: string, order: string) {
        return Wallet.findAll({ order: [[sortBy, order]] });
    }

    async getWalletByAddress(address: string) {
        return Wallet.findOne({ where: { address } });
    }

    async analyzeWallets() {
        // Process JSON and populate DB
    }

    async getSummary() {
        const avgProfit = await Wallet.avg('total_profit');
        const walletCount = await Wallet.count();
        return { avgProfit, walletCount };
    }
}
