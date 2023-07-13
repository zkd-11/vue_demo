
<script>

export default {
  render (){
    return (
      <div>
        <h2>hello </h2>
        {this.$slots.default ? this.$slots.default() : <span>韩绝冲冲</span> }
      </div>
    )
  }
}
</script>

<style scoped>
</style>