// index.js page : connects router to paths
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import HomePage from '@/components/HomePage'
import Class from '@/components/Class'
import AddStudent from '@/components/AddStudent'
import EditStudent from '@/components/EditStudent'
import HarknessTable from '@/components/HarknessTable'
import HarknessAddStudent from '@/components/HarknessAddStudent'
import HarknessEditStudent from '@/components/HarknessEditStudent'
// not necessary pages (used for testing)
import HarknessTableOld from '@/components/HarknessTableOld'
import HarknessTableTwo from '@/components/HarknessTableTwo'
import Login from '@/components/Login'
import NewAccount from '@/components/NewAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component: AddStudent
    },
    {
      path: '/editStudent',
      name: 'EditStudent',
      component: EditStudent
    },
    {
      path: '/harknessTable',
      name: 'HarknessTable',
      component: HarknessTable
    },
    {
      path: '/harknessTable/addStudent',
      name: 'HarknessAddStudent',
      component: HarknessAddStudent
    },
    {
      path: 'harknessTable/editStudent',
      name: 'HarknessEditStudent',
      component: HarknessEditStudent
    },
    // the paths below are for testing, not necessary
    {
      path: '/harknessTableOld',
      name: 'HarknessTableOld',
      component: HarknessTableOld
    },
    {
      path: '/harknessTableTwo',
      name: 'HarknessTableTwo',
      component: HarknessTableTwo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/newaccount',
      name: 'NewAccount',
      component: NewAccount
    }
  ]
})
