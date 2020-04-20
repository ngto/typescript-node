/**
 * 基础类型
 */

//布尔值（boolean）
let flag: boolean = true; //success
// let flag: boolean = 1; //error
// let flag: boolean = "str"; //error

//数字（number）
let num1: number = 6;
let num2: number = 0xf00d;
let num3: number = 0b1010;
let num4: number = 0o744;

//字符串（string）
let str: string = "string"; //success
// let str: string = 123; //error

//数组（array/[]）
let arr: number[] = [1, 2, 3]; //success
let arr1: Array<number> = [1, 2, 3]; //success

//元组（tuple）
//和数组区别在于可定义不同类型的元素，但是元素类型必须对应定义的类型
let objs: [string, number];
objs = ["123", 123]; //success
// objs = [123, "123"]; //error

//枚举（enum）
enum Status { //success
  success,
  error,
}
// enum Status { //success
//   success = 1,
//   error,
// }
// enum Status { //success
//   success = 1,
//   error = -1,
// }
let sta: Status = Status.success; //success

//any(任意类型)
let an: any;
an = true; //success
an = "string"; //success
an = 4; //success

//void(没有任何类型)
//无返回值的方法
function save(): void {} //success
//void类型的变量(官网：只能为它赋予undefined和null)
let no: void = undefined; //success
// 赋值null报错
// let no1: void = null; //error

//null 和 undefined
let n: null = null; //success
// let n1: null = undefined; //error
let u: undefined = undefined; //success
// let u :undefined =null //error

//never
/* 
never类型表示的是那些永不存在的值的类型。
例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
never类型是任何类型的子类型，也可以赋值给任何类型；然而，
没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
*/

//Object  object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void; // 传入一个对象或者null 没有返回值  declare：声明
create({ prop: 0 }); // success
create(null); // success
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

//类型断言
let someValue: any = "this is a string"; //success
let strLength: number = (<string>someValue).length; //success
let strLength1: number = (someValue as string).length; //success
