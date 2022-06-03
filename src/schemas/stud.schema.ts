import { Prop, Schema,SchemaFactory} from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { type } from "os";

export type StudentDocument = Student & Document;
@Schema({timestamps: true})
export class Student{
    @Prop()
    studname: string
    @Prop()
    studmail:string
    @Prop()
    studage:number
}
export const StudentSchema = SchemaFactory.createForClass(Student);