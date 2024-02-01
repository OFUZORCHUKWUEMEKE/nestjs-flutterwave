import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './schema/customer.schema';
import { CoreRepository } from 'src/common/core/core.repository';


@Injectable()
export class CustomerRepository extends CoreRepository<CustomerDocument> {
    constructor(
        @InjectModel(Customer.name)
        customerModel: Model<CustomerDocument>,
    ) {
        super(customerModel);
    }
}
