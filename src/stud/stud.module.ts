import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Student, StudentSchema } from "src/schemas/stud.schema";
import { studentService } from "./stud.service";
import { StudentController } from "./stud.controller";

@Module({
    imports:[MongooseModule.forFeature([{name: Student.name, schema:StudentSchema}])],
    controllers:[StudentController],
    providers:[studentService],
})
export class StudentModule{}