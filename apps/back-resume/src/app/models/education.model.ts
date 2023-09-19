import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
@ObjectType()
export class Education extends Document {
  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  degree: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  institute: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  location: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  gpa: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, reqßuired: false })
  fromYear: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  toYear: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  untilNow: boolean;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String], required: false })
  points: string[];
}

export const educationSchema = SchemaFactory.createForClass(Education);
