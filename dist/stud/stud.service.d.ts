import { createStudentDto } from "src/dto/stud.dto";
import { Student, StudentDocument } from "src/schemas/stud.schema";
import { Model, ObjectId } from "mongoose";
export declare class studentService {
    private readonly studentModel;
    constructor(studentModel: Model<StudentDocument>);
    create(data: createStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: ObjectId): Promise<Student & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: ObjectId): Promise<Student & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(data: createStudentDto, id: ObjectId): Promise<Student & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
