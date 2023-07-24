// 编写好规则
export const rules = {
  // 检验规则是以数组的形式储存
  name: [
    {
      // 必传， 有此符号才有*号键
      required: true,
      message: '用户名是必传内容~',
      // 失去焦点时检验
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ]
}
