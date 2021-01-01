import {
    addModelToTypegoose,
    buildSchema,
    getModelForClass,
    mongoose,
    Prop,
} from "@typegoose/typegoose";
import { Model } from "mongoose";
import { ObjectId } from "mongoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "User" })
export class User extends Document {
    @Field()
    readonly _id!: ObjectId;

    @Field()
    @Prop({ required: true })
    email!: string;

    @Prop({ required: true })
    password!: string;
}

export const UserModel = getModelForClass(User);

