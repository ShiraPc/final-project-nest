import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { isString } from 'class-validator';
import { Document } from 'mongoose';
import { isEmpty } from 'rxjs';


export type userDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })

  name: string;

  @Prop({ required: true })
  id: string;

  @Prop()
  age: number;
}

export const userSchema = SchemaFactory.createForClass(User);