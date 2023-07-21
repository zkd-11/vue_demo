export {};

//  字面量类型 理解为  const类型， 将数值具体值 作为类型赋值给变量

//  结合联合类型 使用， 限制条件- 变量赋值仅能在联合类型中选择

// message 数据推导为 悟律 -  所以该值为唯一，-标识唯一， 无法对其修改
const message = "悟律";

//  结合 联合类型使用

type Alignment = 'left' | 'right' | 'center';

let align: Alignment = 'left';
align = 'right'
// align = '报错'