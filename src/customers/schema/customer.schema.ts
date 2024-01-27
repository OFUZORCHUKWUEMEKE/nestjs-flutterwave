import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

@Schema({ timestamps: true })
export class Customer extends Document {
    _id: any;

    @Prop({ required: true })
    first_name: string

    @Prop({ required: true })
    last_name: string

    @Prop({ required: true })
    address: string

    @Prop({ unique: true, required: true })
    email: string

    @Prop({ required: true, minlength: 8 })
    password: string

    @Prop({ required: false })
    token: string

    @Prop({ required: false, default: true })
    isActive: boolean

}

export const CustomerSchema = SchemaFactory.createForClass(Customer)