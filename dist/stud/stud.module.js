"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const stud_schema_1 = require("../schemas/stud.schema");
const stud_service_1 = require("./stud.service");
const stud_controller_1 = require("./stud.controller");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: stud_schema_1.Student.name, schema: stud_schema_1.StudentSchema }])],
        controllers: [stud_controller_1.StudentController],
        providers: [stud_service_1.studentService],
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=stud.module.js.map