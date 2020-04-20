/**
 * 接口
 */
//类型检查不检查顺序
//定义接口 包含name属性 并且是string类型
interface Person {
  name: string;
  sex?: string; // 可选属性 可以有也可以没有
  readonly id: number; // 只读属性
}

function createPerson(p: Person) {
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

let p1: Person = { name: "张三", id: 123456 };
console.log(p1);
// p1.id = 2222; // error  不可更改
