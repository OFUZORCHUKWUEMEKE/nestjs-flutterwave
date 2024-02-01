import { Customer } from "./schema/customer.schema"

export interface ICustomerLogin {
    email: string

    password: string
}

export interface ICustomerResponse {
    success: boolean,
    error: boolean,
    customer: Customer
}