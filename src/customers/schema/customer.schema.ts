import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose"

@Schema({ timestamps: true })
export class Customer extends Document{
    _id:any;

    @Prop({})
    first_name:string

    @Prop({})
    last_name:string

    @Prop({})
    address:string

    @Prop({})
    balance:string
}

export const CustomerSchema = SchemaFactory.createForClass(Customer)