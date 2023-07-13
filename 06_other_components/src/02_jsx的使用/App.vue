
<script>
import Home from './Home.vue'
export default {
  data() {
    return{
      counter: 0
    }
  },

render() {
  const increment =()=> this.counter++;
  const decrement =()=> this.counter--;

  
  // 这种写法的优势 jsx， 将render转化为 类同template标签格式 ， 并且可以任写js代码
// babel 内置写法， 最终也会 转化为 return { h(参数 )} 
  return(
    <div>
      <h2>当前计数： {this.counter}</h2>
      <button onclick={increment}>+1</button>
      <button onclick={decrement}>-1</button>

      <Home>
        {{ default: props => <button>按钮</button>} }
      </Home>
    </div>
  )
}

}
</script>

<style scoped>
</style>