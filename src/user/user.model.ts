import { IsEmail, IsEmpty, IsNotEmpty, Length } from "class-validator";
import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export class User {
    id: string;
    @IsNotEmpty() 
    @Length(2) 
    name: string;
    @IsEmail()
    @IsNotEmpty()  
    email: string;
    @IsNotEmpty()  
    @Length(4)
    password: string;
}