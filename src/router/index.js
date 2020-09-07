import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  //mode:'history', //切换不同模式路由 去掉路径中的/# 此模式有坑暂不开放
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/companyintroduction_detail/:id',
          name: 'companyintroduction_detail',
          component: resolve => require(['@/view/companyintroduction_detail'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/detailnews/',
          name: 'detailnews',
          component: resolve => require(['@/view/news_detail'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        {
          path: '/qiyezixun_item',
          name: 'qiyezixun_item',
          component: resolve => require(['@/view/qiyezixun_item'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },{
          path: '/hangyedongtai_item',
          name: 'hangyedongtai_item',
          component: resolve => require(['@/view/hangyedongtai_item'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },{
          path: '/shipin_item',
          name: 'shipin_item',
          component: resolve => require(['@/view/shipinzhuanqu_item'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },{
          path: '/qiyezixundetailfor',
          name: 'qiyezixundetailfor',
          component: resolve => require(['@/view/qiyezixundetailfor'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },{
          path: '/hangyedongtaifor',
          name: 'hangyedongtaifor',
          component: resolve => require(['@/view/hangyedongchadetailfor'], resolve),
          meta: {
            title: '中教云集团：中教云、中教云也未艾、数字教材、中教云职业教育、智能教辅'
          }
        },
        
      ]
    }
  ]
})
