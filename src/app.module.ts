import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TransactionsModule } from './transactions/transactions.module';
import { WalletModule } from './wallet/wallet.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import configuration from './config/config';
import { ConfigModule } from '@nestjs/config';


const config = configuration()

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: config.jwt.secret,
    signOptions: { expiresIn: config.jwt.expires_in }
  }), ConfigModule.forRoot({
    load: [configuration]
  })
    , CustomersModule, TransactionsModule, WalletModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
