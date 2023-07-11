
export const demoMixin = {
  data() {
    return {
      message: '韩绝冲冲',
    }
  },
  methods: {
    foo() {
      console.log('demo mixin foo');
    }
  },
  created() {
    console.log('执行了common包的created生命周期函数');
  }
}