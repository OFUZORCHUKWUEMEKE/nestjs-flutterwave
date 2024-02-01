import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './customer.dto';
import { CustomerFactory } from './customer.factory';
import { CustomerRepository } from './customer.repository';
import { ICustomerResponse } from './customer.interface';

@Injectable()
export class CustomersService {
    constructor(private readonly factory: CustomerFactory, private readonly customerRepository: CustomerRepository) { }
    async createCustomer(data: CreateCustomerDto):Promise<ICustomerResponse> {
        const customerAttributes = await this.factory.create(data)
        const customer = await this.customerRepository.create(customerAttributes)
        return {
            success: true,
            error: false,
            customer
        }
    }
}
