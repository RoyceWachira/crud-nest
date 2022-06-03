import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { createStudentDto }  from "src/dto/stud.dto";
import { Student,StudentDocument} from "src/schemas/stud.schema";
import { Model, ObjectId } from "mongoose";

@Injectable()
export class studentService{
    constructor ( 
     @InjectModel (Student.name) private readonly studentModel: Model<StudentDocument>
     ){}


    async create(data: createStudentDto):Promise<Student>{
        const newStudent = await new this.studentModel(data);
        console.log(newStudent)
        return newStudent.save();
    }

    async findAll(): Promise<Student[]>{
        return this.studentModel.find().exec();
    }
    async findOne(id: ObjectId) {
        return this.studentModel.findOne({_id:id}).exec();
    }
    async delete(id:ObjectId){
        const DeleteStudent= await this.studentModel.findByIdAndRemove({_id:id}).exec();
        return DeleteStudent;
    }
    async update(data: createStudentDto,id:ObjectId){
        const UpdateStudent= await this.studentModel.findByIdAndUpdate(id, {...data}, { new : true})

        // if(studname){
        //     UpdateStudent.studname=studname;
        // }
        // if(studmail){
        //     UpdateStudent.studmail=studmail;
        // }
        // if(studage){
        //     UpdateStudent.studage=studage;
        // }
        console.log(UpdateStudent)
        return UpdateStudent.save();
    }
}