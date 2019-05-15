import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
/*引入页面*/
import Login from '@/View/Login.vue'
import Password from '@/View/Password.vue'
import Home from '@/View/Home.vue'
// import HeadBar from '@/View/HeadBar/HeadBar.vue'
// import NavBar from '@/View/NavBar/NavBar.vue'
import Text from '@/View/Text.vue'
import Main from '@/View/Main.vue'
import User from '@/View/User.vue'
import NF from '@/View/404.vue'

// import { getIFramePath, getIFrameUrl } from '@/utils/iframe'

Vue.use(Router)

export default new Router
({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },   
    {
      path: '/Password',
      name: 'Password',
      component: Password
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {path: '/Main', component: Main, name: '系统介绍'},
        {path: '/User', component: User, name: '用户管理'},
      ]
    },
    {
      path: '/Text',
      name: 'Text',
      component: Text
    },
    {
      path: '/404',
      name: 'NF',
      component: NF
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   //to and from are Route Object,next() must be called to resolve the hook}
//   //登录界面登录成功之后，会把用户信息保存在会话
//   //存在时间为会话生命周期，页面关闭即失效
//   let user = sessionStorage.getItem('user');
//   if(to.path == 'login'){
//     //如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
//     if(user){
//       next({path: '/Home'})
//     }else{
//       next()
//     }
//   }else{
//     //如果访问非登录界面，且用户会话信息不存在，代表未登录，则跳转到登录界面
//     if(!user){
//       next({path: '/'})
//     }else{
//       next()
//     }
//   }
// })