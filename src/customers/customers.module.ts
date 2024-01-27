import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { CustomerFactory } from './customer.factory';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './schema/customer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }])],
  providers: [CustomersService, CustomerFactory],
  controllers: [CustomersController],
  exports: [CustomerFactory, CustomersService]
})
export class CustomersModule { }
