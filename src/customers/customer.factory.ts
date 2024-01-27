import { Injectable } from "@nestjs/common";
import { CreateDecoratorOptions } from "@nestjs/core";
import { CreateCustomerDto } from "./customer.dto";
import { async } from "rxjs";

@Injectable()
export class CustomerFactory {
    async create(customer: CreateCustomerDto) {
        const data = []
        for (const [key, value] of Object.entries(customer)) {
            data[key] = value
        }
        return data;
    }
}