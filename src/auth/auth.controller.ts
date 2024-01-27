import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ICustomerLogin } from 'src/customers/customer.interface';
import { CreateCustomerDto } from 'src/customers/customer.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("/")
    async create(@Body() customer:CreateCustomerDto) {
       
    }

    @Post("/")
    async login(@Body() login: ICustomerLogin) {

    }
}
