export const rules = {
  num: [
    {
      required: true,
      message: '请输入正确的手机号',
      trigger: 'blur'
    },
    {
      pattern: /^1\d{10}$/,
      message: '请输入正确格式的手机号',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入正确的验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{5}$/,
      message: '验证码需为5位数字',
      trigger: 'blue'
    }
  ]
}
