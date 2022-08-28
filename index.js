"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = 'Hellow world';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
