import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'wallets' })
export class Wallet extends Model<Wallet> {
    @PrimaryKey
    @Column
    address: string;

    @Column
    total_profit: number;

    @Column
    num_tokens_traded: number;

    @Column
    num_active_days: number;

    @Column
    avg_trade_volume: number;

    @Column
    risk_assessment: string;

    @Column
    last_updated: Date;
}
