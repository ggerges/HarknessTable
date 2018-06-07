import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import HomePage from '@/components/HomePage'
import Class from '@/components/Class'
import AddClass from '@/components/AddClass'
import AddStudent from '@/components/AddStudent'
import EditStudent from '@/components/EditStudent'
import NewDiscussion from '@/components/NewDiscussion'
import HarknessTable from '@/components/HarknessTable'
import HarknessAddStudent from '@/components/HarknessAddStudent'
import HarknessEditStudent from '@/components/HarknessEditStudent'
import HarknessTableOld from '@/components/HarknessTableOld'
import HarknessTableTwo from '@/components/HarknessTableTwo'
// not necessary pages
import Review from '@/components/Review'
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/newaccount',
      name: 'NewAccount',
      component: NewAccount
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
      path: '/addClass',
      name: 'AddClass',
      component: AddClass
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
      path: '/newDiscussion',
      name: 'NewDiscussion',
      component: NewDiscussion
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
    {
      path: '/harknessTableOld',
      name: 'HarknessTableOld',
      component: HarknessTableOld
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/harknessTableTwo',
      name: 'HarknessTableTwo',
      component: HarknessTableTwo
    }
  ]
})
