import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema({ timestamps: true })
export class Wallet extends Document {
    _id?: any;

    @Prop({ required: false, type: SchemaTypes.ObjectId, ref: 'User' })
    user_id: Types.ObjectId;

    @Prop({ required: true, default: 0.0 })
    amount: number;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet)