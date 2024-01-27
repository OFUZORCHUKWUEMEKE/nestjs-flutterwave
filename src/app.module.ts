import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TransactionsModule } from './transactions/transactions.module';
import { WalletModule } from './wallet/wallet.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import configuration from './config/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FlutterwaveModule } from './flutterwave/flutterwave.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'

const config = configuration()

dotenv.config({})

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MongooseModule.forRoot(config.DB_URI, { retryAttempts: 6 }),
    JwtModule.register({
      global: true,
      secret: config.jwt.secret,
      signOptions: { expiresIn: config.jwt.expires_in }
    }), CustomersModule, TransactionsModule, WalletModule, AuthModule, FlutterwaveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
