import { Prop, Schema } from "@nestjs/mongoose";

@Schema({})
export class Transaction {
    _id: any

    @Prop({ required: true })
    amount: number

    @Prop({ required: true })
    reference: string

    
}