import { createStudentDto } from "src/dto/stud.dto";
import { studentService } from "./stud.service";
import { Student } from "src/schemas/stud.schema";
import { ObjectId } from "mongoose";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: studentService);
    create(createStudentDto: createStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: ObjectId): Promise<Student & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: ObjectId, data: createStudentDto): Promise<Student & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: ObjectId): Promise<Student & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
