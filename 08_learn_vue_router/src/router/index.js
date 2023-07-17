
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";

//  路由懒加载： 采取import导入模块的方法， component: 可以接收一个函数
//    原理 使用webpack 分包的方法啊

// 配置映射关系
const routes = [
  // { path: "/", component: Home },
  // { path: "/", redirect: './home' },
  // { path: "/home", component: Home },
  // { path: "/about", component: About },

  // 路由懒加载 ， 可对build文件生成加 魔法注释
  {
     path: "/", 
     redirect: './home',
     meta: {
      name: '韩绝',
      age: 22
     } 
  },
  { 
    name: 'home',
    path: "/home", 
    component: ()=> import(/* webpackChunkName: "home-chunk" */"../pages/Home") ,
    children: [
      {
        path: "", //此处 默认在 /home/路径下
        redirect: "/home/message" // 此处需写完整路径
      },
      {
        // 在home组件link-to时已定义前往 /home/message
        // 如果加/ 会变成 /message, 
        // children已自动在当前父路径下 -- home/message
        path: "message", 
        component: ()=> import("../pages/HomeMessage") ,
      },
      {
        path: "/home/shops", 
        component: ()=> import("../pages/HomeShops") ,
      },
      // {
      //   path: "moment", 
      //   component: ()=> import("../pages/HomeMoment") ,
      // }
    ]
  },
  { 
    path: "/about",  
    component: ()=> import(/* webpackChunkName: "about-chunk" */"../pages/About") 
  },
  { 
    // : 属性， 冒号加属性名  为定义在$route.params.属性名
    path: "/user/:username/id/:id",  
    component: ()=> import(/* webpackChunkName: "user-chunk" */"../pages/User") 
  },
  { //login 路径 
    path: "/login",  
    component: ()=> import("../pages/Login") 
  },
  { 
    // path: "/:pathMathch(.*)*",   //表示将路径分割为 数组
    path: "/:pathMatch(.*)",  
    component: ()=> import("../pages/NotFound") 
  }
];

// 创建一个路由对象

const router = createRouter({
  routes,
  // history模式
  // history: createWebHashHistory(),
  history: createWebHistory(),
})

const categoryRoute = {
  path: '/category',
  component: () => import("../pages/Category")
}

// 添加顶级路由对象
router.addRoute(categoryRoute); 
// removeRoute = router.addRoute(categoryRoute);  本身有返回值, 为删除路由函数

// 添加二级路由对象 / 报错的原因
router.addRoute("home", {
  path: 'moment',
  component: () => import("../pages/HomeMoment")
})

// 导航守卫实现功能： 用户需先登录才能访问组件
/*
  返回值问题：
    1；false: 不进行导航
    2. undefined 或 不写返回值， 默认导航 默认值为undefined 
    3. 字符串： 路径 跳转到对应的路径中
    4. 对象： 类似于 router.push(path： "/login", query)

    to from router对象，  从from 到 to 
*/ "{\"token\":\"1.145f5ab04c42216cb34870cdf\",\"timestamp\":1688637075166}"
let counter = 0;
router.beforeEach((to, from) =>{
  console.log(`进行了${++counter}路由跳转`);

  
  if(to.path !== "/login") {
    const token = window.localStorage.getItem("token");
    if(!token) {
      return "/login"; 
    }
  }  
}
)


export default router;