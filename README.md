# typescript-study（ts学习笔记）

## 1、基本类型
1. 布尔值(boolean)
   ```
   let flag: boolean = true;
   ```
2. 数字(number)
   ```
    let num1: number = 6;
    let num2: number = 0xf00d;
    let num3: number = 0b1010;
    let num4: number = 0o744;
   ```
3. 字符串(string)
    ```
    let str: string = "string";
    ```
4. 数组（Array/[]）
   ```
   let arr: number[] = [1, 2, 3];
   let arr1: Array<number> = [1, 2, 3];
   ```
5. 元组(Tuple)
   ```
   和数组区别在于可定义不同类型的元素，但是元素类型必须对应定义的类型
   let objs: [string, number];
       objs = ["123", 123]; //success
       objs = [123, "123"]; //error
   ```
6. 枚举（enum）
   ```
    enum Status {
      success,
      error,
    }
    enum Status {
      success = 1,
      error,
    }
    enum Status {
      success = 1,
      error = -1,
    }
    let sta: Status = Status.success;
   ```
7. any(任意类型)
    ```
    let an: any;
    an = true;
    an = "string";
    an = 4;
    ```
8. void (无返回值的方法)
    ```
    function save(): void {}
    //官网：声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
    let no: void = undefined;
    // 但是当赋值null时会报错(Type 'null' is not assignable to type 'void')
    let no1: void = null; // error
    ```
9. null 和 undefined
   ```
    let n: null = null;
    let u: undefined = undefined;
   ```

## 2、接口
   ```
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
   ```

[参考文档](https://ts.xcatliu.com/ "文档")
