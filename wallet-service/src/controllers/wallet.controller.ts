import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { WalletService } from '../services/wallet.service';

@Controller('wallets')
export class WalletController {
    constructor(private walletService: WalletService) { }

    @Get()
    getWallets(@Query('sort_by') sortBy: string, @Query('order') order: string) {
        return this.walletService.getWallets(sortBy, order);
    }

    @Get(':address')
    getWalletByAddress(@Param('address') address: string) {
        return this.walletService.getWalletByAddress(address);
    }

    @Post('analyze')
    analyzeWallets() {
        return this.walletService.analyzeWallets();
    }

    @Get('summary')
    getSummary() {
        return this.walletService.getSummary();
    }
}
