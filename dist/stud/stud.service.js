"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const stud_schema_1 = require("../schemas/stud.schema");
const mongoose_2 = require("mongoose");
let studentService = class studentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async create(data) {
        const newStudent = await new this.studentModel(data);
        console.log(newStudent);
        return newStudent.save();
    }
    async findAll() {
        return this.studentModel.find().exec();
    }
    async findOne(id) {
        return this.studentModel.findOne({ _id: id }).exec();
    }
    async delete(id) {
        const DeleteStudent = await this.studentModel.findByIdAndRemove({ _id: id }).exec();
        return DeleteStudent;
    }
    async update(data, id) {
        const UpdateStudent = await this.studentModel.findByIdAndUpdate(id, Object.assign({}, data), { new: true });
        console.log(UpdateStudent);
        return UpdateStudent.save();
    }
};
studentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(stud_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], studentService);
exports.studentService = studentService;
//# sourceMappingURL=stud.service.js.map