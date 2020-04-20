"use strict";
/**
 * 基础类型
 */
//布尔值（boolean）
var flag = true; //success
// let flag: boolean = 1; //error
// let flag: boolean = "str"; //error
//数字（number）
var num1 = 6;
var num2 = 0xf00d;
var num3 = 10;
var num4 = 484;
//字符串（string）
var str = "string"; //success
// let str: string = 123; //error
//数组（array/[]）
var arr = [1, 2, 3]; //success
var arr1 = [1, 2, 3]; //success
//元组（tuple）
//和数组区别在于可定义不同类型的元素，但是元素类型必须对应定义的类型
var objs;
objs = ["123", 123]; //success
// objs = [123, "123"]; //error
//枚举（enum）
var Status;
(function (Status) {
    Status[Status["success"] = 0] = "success";
    Status[Status["error"] = 1] = "error";
})(Status || (Status = {}));
// enum Status { //success
//   success = 1,
//   error,
// }
// enum Status { //success
//   success = 1,
//   error = -1,
// }
var sta = Status.success; //success
//any(任意类型)
var an;
an = true; //success
an = "string"; //success
an = 4; //success
//void(没有任何类型)
//无返回值的方法
function save() { } //success
//void类型的变量(官网：只能为它赋予undefined和null)
var no = undefined; //success
// 赋值null报错
// let no1: void = null; //error
//null 和 undefined
var n = null; //success
// let n1: null = undefined; //error
var u = undefined; //success
create({ prop: 0 }); // success
create(null); // success
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
//类型断言
var someValue = "this is a string"; //success
var strLength = someValue.length; //success
var strLength1 = someValue.length; //success
//# sourceMappingURL=base-type.js.map