import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TransactionsModule } from './transactions/transactions.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [CustomersModule, TransactionsModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
