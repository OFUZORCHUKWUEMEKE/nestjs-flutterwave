import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ICustomerLogin } from 'src/customers/customer.interface';
import { CreateCustomerDto } from 'src/customers/customer.dto';
import { CustomersService } from 'src/customers/customers.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly customerService: CustomersService) { }

    @Post("/")
    async create(@Body() customer: CreateCustomerDto) {
        const newCustomer = await this.customerService.createCustomer(customer)
    }

    @Post("/")
    async login(@Body() login: ICustomerLogin) {

    }
}
