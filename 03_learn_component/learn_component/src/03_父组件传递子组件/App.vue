<template>
  <show-message title="11" content="静态传递"></show-message>
  <show-message :title=title :content=content></show-message>
  <show-message :title="message.title" :content=message.content></show-message>
  <show-message v-bind="message"></show-message>
</template>

<script>
import ShowMessage from './ShowMessage';
export default {
  data() {
    return {
      title: 'hello world',
      content: '悟律冲冲',
      message: {
        title: '对象标题',
        content: "对象内容"
      }
    }
  },
  components: { 
    ShowMessage
  },
  methods() {},
}
</script>

<style scoped>
</style>