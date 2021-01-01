import { getModelForClass, Prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";
import { Field, ObjectType } from "type-graphql";
import { Ref } from "../types/Ref";
import { User } from "./User";


@ObjectType({description: "Stream embedded post content"})
export class Stream {
    @Field()
    readonly _id!: ObjectId;
    
    @Field()
    @Prop({required: true})
    title!: string;

    @Field()
    @Prop({required: true})
    description!: string;
    
    @Field()
    @Prop({required: true})
    url!: string;

    @Field(() => User)
    @Prop({ref: User, required: true})
    author!: Ref<User>;
}

export const StreamModel = getModelForClass<typeof Stream>(Stream);