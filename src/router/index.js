import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../views/index.vue'],resolve),
      hidden:true,
      children:[
        {
          path: '/zh',
          component: resolve => require(['../views/zh.vue'],resolve),
          meta: {title: '综合'}
        },
        {
          path: '/area',
          component: resolve => require(['../views/area/area.vue'],resolve),
          meta: {title: '区域'}
        },
        {
          path: '/safe',
          component: resolve => require(['../views/safe.vue'],resolve),
          meta: {title: '安全'}
        },
        {
          path: '/person',
          component: resolve => require(['../views/person.vue'],resolve),
          meta: {title: '人员'}
        },
        {
          path: '/ky',
          component: resolve => require(['../views/ky.vue'],resolve),
          meta: {title: '矿压'}
        },{
          path: '/qjgl',
          component: resolve => require(['../views/produce/qjgl.vue'],resolve),
          meta: {title: '全局概览'}
        },{
          path: '/mainBelt',
          component: resolve => require(['../views/produce/mainBelt.vue'],resolve),
          meta: {title: '主皮带'}
        },{
          path: '/mainLift',
          component: resolve => require(['../views/produce/mainLift.vue'],resolve),
          meta: {title: '主提升'}
        },{
          path: '/yfj',
          component: resolve => require(['../views/produce/yfj.vue'],resolve),
          meta: {title: '压风机'}
        },{
          path: '/centerHouse',
          component: resolve => require(['../views/produce/centerHouse.vue'],resolve),
          meta: {title: '中央水泵房'}
        },{
          path: '/station',
          component: resolve => require(['../views/produce/station.vue'],resolve),
          meta: {title: '10k变电站'}
        },{
          path: '/hydrology',
          component: resolve => require(['../views/hydrology.vue'],resolve),
          meta: {title: '水文'}
        },{
          path: '/yield',
          component: resolve => require(['../views/yield.vue'],resolve),
          meta: {title: '产量'}
        },{
          path: '/rescue',
          component: resolve => require(['../views/rescue.vue'],resolve),
          meta: {title: '应急救援'}
        },{
          path: '/basicInfo',
          component: resolve => require(['../views/basicInfo.vue'],resolve),
          meta: {title: '基础信息'}
        },{
          path: '/setArea',
          component: resolve => require(['../views/set/setArea.vue'],resolve),
          meta: {title: '区域管理'}
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/login.vue'],resolve),
      hidden:true
    }
  ]
})

