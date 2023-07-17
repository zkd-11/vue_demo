<template>
  <div id="app">
    <!-- link 中 tag已经取消 更加灵活   使用插槽的形式
      可以内置多个 标签, 组件 - 任意标签, 作为插槽的形式传递
    -->

    <!--   
        link有多个标签时, 内包裹的标签 任意点击都能跳转到目标页面  
        v-slot 为传递后, 插槽可直接使用的数据
        props: href 跳转的链接
        : route 即将跳转的route对象
        : navigate 导航函数, 当将router-link外层标签设置为custom(取消a标签包裹)
              需要使用navigate 手动绑定进行页面跳转
        : isActive: 是否当前处于活跃状态  
            可为组件进行一个 动态绑定属性
        : isExactActive: 是否当前处于精准的活跃状态
        
      
     -->
      <router-link   to="/home" v-slot="props" custom>
        <button @click="props.navigate"> {{props.href}}</button>
        <h2>换行</h2>
         <!-- <nav-bar title="首页" />   -->
      </router-link>

      <router-link   to="/home" v-slot="props" >

        <!-- 通过动态绑定的形式 
           利用props属性,  将插槽的标签 类名进行一个动态绑定
        -->
        <button :class="{'active': props.isActive}">首页</button>
      </router-link>

      <router-link   to="/about">关于</router-link>
      <router-link   to="/user/kobe/id/24" >用户</router-link>
      <router-link   to="/category" >分类</router-link>


      <!-- @click="forwardOneStep" 
        要实现单击双击不同效果- 需要使用 mousedown 进行模拟

      -->
    <!-- @dblclick="backOneStep"  浏览器默认事件会选择文本, 所以双击事件被禁止 -->
    <!-- 使用 mousedown 鼠标松开监听 -->
         <!-- 编程式导航 -->
      <button @click="jumpToAbout">跳转about界面</button> 
      <button 
      @mousedown="handleClick"
      >前进/后退</button>


      <!-- <router-link  to="/about active-class=" '重新设置活跃类名'">关于</router-link> -->
      <!-- 内部设置属性： replace 表示采取换栈的形式 replace-state -->
  

      <!--
         router-view表示 占位符, 跳转组件显示的位置
        功能提升, 利用插槽传递参数, 可以添加动画
        缓存机制 keep-alive
      -->


      <router-view v-slot="props"> 
        <!-- <transition name="wulv"> -->
            <keep-alive>
              <component :is="props.Component"></component>
            </keep-alive>
        <!-- </transition> -->
      </router-view> 

     <!-- <router-view/> -->


  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  name: 'App',
  // option api
  // methods: {
  //   jumpToAbout() {
  //     this.$router.push('/about');
  //   }
  // }
  setup() {

    const route = useRouter();
    let timer = null;
    let clickCount = 0;
    const jumpToAbout = ()=>{
      // console.log(route);
      // route.push('/about');
      route.push({
        path: "/about",
        query: {
          name: '韩绝',
          age: 18
        },
      })
    }

   
    function handleClick() {
        clickCount++;

      if (clickCount === 1) {
        timer = setTimeout(() => {
        console.log("单击前进");
        // 单击事件的逻辑
        // route.go(1);
        // route.go(-1);
        route.forward();
        // route.back();
        clickCount = 0;
      }, 200);
      } else if (clickCount === 2) {
          console.log("双击后退");
          clearTimeout(timer);
          // 双击事件的逻辑
          route.back();
          clickCount = 0;
      }
  }

    return {
      jumpToAbout,
      handleClick,
    }
  }
}
</script>

<style scoped>
  .link {
    margin-right: 10px;
    margin-left: 10px;
  }
  /* router-link-exact-active 表示精准匹配
    当我访问路径home/shops 因为在同个路径下 
    所以此link标签 有 router-link-active标签 exact标签去除
        如有需求只在点击精准路径 才产生样式效果 使用此类名
  */

  /* .router-link-exact-active {
    color: aqua
  } */

  .router-link-active {
    color: aqua
  }

  .active {
    width: 100px;
    height: 50px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
    color: rgb(7, 104, 104);
    font-weight: 900;

  }

  .wulv-enter-from,
  .sulv-leave-to {
    opacity: 0
  }

  .wulv-enter-active,
  .wulv-leave-active {
    transition: opacity 2s ease;
  }
</style>