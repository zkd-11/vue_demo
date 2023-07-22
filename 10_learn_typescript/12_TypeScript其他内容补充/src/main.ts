import { add, sub } from "./utils/math";
import { time, price } from "./utils/format";

import axios from "axios"
import lodash from 'lodash'

// 导入图片  需在.d.ts文件先声明 图片模块
import nhltImage from './img/nhlt.jpg'

console.log(add(20, 30));
console.log(sub(20, 30));

console.log(time.format("a"));
console.log(price.format(11));
console.log(lodash.join(["abc", "def"]));

//  ts转文件插入到index.html 所以应该能使用已定义过的变量- 但是需在.d.ts文件声明
console.log(whyName)
console.log(whyAge)
console.log(whyHeight)

// 使用函数
whyFoo()

// 使用类
const p1 = new Person("悟律", 22);
console.log(p1);


axios.get("http://123.207.32.32:8000/home/multidata").then((res)=>{
  console.log(res);
})

// 使用命名空间的函数

$.ajax({
  
})

