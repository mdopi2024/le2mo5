"use strict";
/**
 * normal fuction
 */
Object.defineProperty(exports, "__esModule", { value: true });
function add(num, num2, num3, num4) {
    if (num3 === void 0) { num3 = 0; }
    return num + num2 + num3;
}
add(4, 3);
/**
 * arrow fuction
 */
var sum = function (num, num2, num4) {
    if (num4 === void 0) { num4 = 9; }
    return num + num2 + num4;
};
// console.log(sum(3,4,3))
/**
 * call back fuction declire type
 */
var numArray = [2, 4, 5, 6, 7, 3];
var sqareArray = numArray.map(function (num) { return num * num; });
console.log(sqareArray);
//# sourceMappingURL=fuction.js.map