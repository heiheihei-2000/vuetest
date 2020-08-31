import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
import PageThree from "@/views/PageThree";
import PageFour from "@/views/PageFour";



Vue.use(VueRouter)


  const routes = [
    {
      path: '/',           //默认页面
      component: Index,
      name: '导航一',
      redirect:'/pageOne',//跳转到页面一no
      children: [
        {
          path: '/pageOne',
          name:'页面一',
          component: PageOne
        }
        ,
        {
          path: '/pageTwo',
          name:'页面二',
          component: PageTwo
        }
      ],
    },

    {
      path:'/navigation',
      component:Index,
      name:'导航二',
      children: [
        {
          path:'/pageThree',
          name:'页面三',
          component: PageThree,
        },
        {
          path:'/pageFour',
          name:'页面四',
          component: PageFour,
        }

      ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
