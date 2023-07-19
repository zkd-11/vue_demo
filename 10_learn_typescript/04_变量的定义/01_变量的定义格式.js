"use strict";
// 1 .类型注解
// 2. var/ let / const
// 3. string 和 String  前者为ts的声明格式， 后者为js的包装类
// 4. 类型推导， 在声明时, 不进行类型注解， 会根据赋值进行推导
Object.defineProperty(exports, "__esModule", { value: true });
var name = "why";
var age = 17;
var height = 1.77;
// String 为js的包装类
var message = "韩绝冲冲"; //此为一个包装类, 也可为字符型
console.log(name);
console.log(message);
var foo = "悟律";
