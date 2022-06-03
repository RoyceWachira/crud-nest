import { Body, Controller, Delete,Get, Param, Patch, Post } from "@nestjs/common";
import { createStudentDto} from "src/dto/stud.dto";
import { studentService } from "./stud.service";
import { Student } from "src/schemas/stud.schema";
import { ObjectId } from "mongoose";
@Controller('stud')
export class StudentController{
    constructor(private readonly studentService: studentService){}

    @Post()
    async create(@Body() createStudentDto: createStudentDto){
      return await this.studentService.create(createStudentDto);
      }
      @Get()
    async findAll() {
          return this.studentService.findAll();
      }

      @Get(':id')
      async findOne (@Param('id') id:ObjectId){
        return this.studentService.findOne(id);
      }
      @Patch(':id')
      async update(@Param('id') id:ObjectId, 
      @Body() data: createStudentDto) {
        return this.studentService.update(data , id);
      }
        @Delete(':id')
        async delete(@Param('id') id:ObjectId){
            return this.studentService.delete(id);
        }
      }

