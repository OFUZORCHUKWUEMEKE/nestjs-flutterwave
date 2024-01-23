import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TransactionsModule } from './transactions/transactions.module';
import { WalletModule } from './wallet/wallet.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CustomersModule, TransactionsModule, WalletModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
