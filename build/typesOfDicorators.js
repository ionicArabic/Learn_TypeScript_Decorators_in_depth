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
let sampleDecorator2 = (constructor) => {
    console.log("Teacher class is getting excuted");
};
let samplePropertyDecorator = (target, Propertykey) => {
    console.log("Teacher name Property is getting excuted");
};
let sampleMethodDecorator = (target, Propertykey, description) => {
    console.log("Teacher name Method is getting excuted");
};
let sampleParameterDecorator = (target, Propertykey, parameterIndex) => {
    console.log("Teacher name Parameter is getting excuted");
};
let Teasher = class Teasher {
    constractor(name) {
        console.log("Object created");
        this.teascherName = name;
    }
    teach(teachTime) {
        console.log("Teacher is teaching");
    }
    ;
};
__decorate([
    samplePropertyDecorator,
    __metadata("design:type", Object)
], Teasher.prototype, "teascherName", void 0);
__decorate([
    sampleMethodDecorator,
    __param(0, sampleParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Teasher.prototype, "teach", null);
Teasher = __decorate([
    sampleDecorator2
], Teasher);
//let teacher = new Teasher();
