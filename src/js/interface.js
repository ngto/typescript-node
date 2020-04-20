"use strict";
function createPerson(p) {
    console.log(p.name);
}
// error  这种写法写一个name属性应该是类型检查的关系导致
// createPerson({
//   name: "name",
//   age: 20,
// });
// success 当你定义好对象，那么就只回去检查name是否存在，只要存在就不报错
// let obj = {
//   age: 20,
//   name: "张三",
// };
// createPerson(obj);
var p1 = { name: "张三", id: 123456 };
console.log(p1);
// p1.id = 2222; // error  不可更改
//# sourceMappingURL=interface.js.map