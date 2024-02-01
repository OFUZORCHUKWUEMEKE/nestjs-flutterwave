import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomersModule } from 'src/customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from 'src/customers/schema/customer.schema';

@Module({
  imports: [CustomersModule, MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
