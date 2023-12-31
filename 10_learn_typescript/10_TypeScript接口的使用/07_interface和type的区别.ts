export {};

interface IFoo {
  name: string;
}

interface IFoo {
  age: 18;
}
// 当进行接口定义同名接口时， 会进行合并

// ts 已为开发人员 内置了如 window document 这种对象， 可用接口对其进行合并 但是不建议

type IBar = {
  name: string;
};
//  会报错 无法重复定义 type
// type IBar = {
//   age: number,
// }

//  使用场景， 根据不同需求使用， 非类时 使用type可能相对来首 更简单
//  官方 建议 使用 interface

/**`
 * 已经定死的属性- name为 字符串类型
 * age只能为 固定的数值 18
 */
const a: IFoo = {
  name: "韩绝",
  age: 18,
};
console.log(
  "%c [ IFoo ]-30",
  "font-size:15px; background:#baa7d1; color:#feebff;",
  a
);
