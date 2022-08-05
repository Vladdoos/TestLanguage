import Vue from 'vue'
import Router from 'vue-router'
import pageNavigation from '../components/PageNavigation'
import pageUsers from "../components/PageUsers";
import productPage from "../components/ProductPage";
import testPage from "../components/TestPage";
import pageCheckList from "../components/PageCheckList";
import pageOrganizer from "../components/PageOrganizer";
import pageNotebook from "../components/PageNotebook";
import pageTests from "../components/PagesTests/PageTests";
import pageTestsRadio from '../components/PagesTests/PageTestsRadio'
import pageTestsQuestionnaire from "../components/PagesTests/PageTestsQuestionnaire";

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pageNavigation',
      component: pageNavigation
    },
    {
      path: '/pageUsers',
      name: 'pageUsers',
      component: pageUsers
    },
    {
      path: '/pageProduct',
      name: 'productPage',
      component: productPage
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: testPage
    },
    {
      path: '/pageCheckList',
      name: 'pageCheckList',
      component: pageCheckList
    },
    {
      path: '/pageOrganizer',
      name: 'pageOrganizer',
      component: pageOrganizer
    },
    {
      path: '/pageNotebook',
      name: 'pageNotebook',
      component: pageNotebook
    },
    {
      path: '/pageTests',
      name: 'pageTests',
      component: pageTests
    },
    {
      path: '/pageTestsRadio',
      name: 'pageTestsRadio',
      component: pageTestsRadio
    },
    {
      path: '/pageTestsQuestionnaire',
      name: 'pageTestsQuestionnaire',
      component: pageTestsQuestionnaire
    },

  ]
})
export default router
new Vue({
  router
}).$mount('#app');
