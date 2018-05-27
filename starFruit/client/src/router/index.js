import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Login from '@/components/Login'
import NewAccount from '@/components/NewAccount'
import HomePage from '@/components/HomePage'
import Class from '@/components/Class'
import Student from '@/components/Student'
import HarknessTable from '@/components/HarknessTable'
import Review from '@/components/Review'

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
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/harknessTable',
      name: 'HarknessTable',
      component: HarknessTable
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    }
  ]
})
