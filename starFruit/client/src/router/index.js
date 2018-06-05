import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Students from '@/components/Students'
import NewStudent from '@/components/NewStudent'
import EditStudent from '@/components/EditStudent'
import Login from '@/components/Login'
import NewAccount from '@/components/NewAccount'
import HomePage from '@/components/HomePage'
import Class from '@/components/Class'
import AddClass from '@/components/AddClass'
import Student from '@/components/Student'
import AddStudent from '@/components/AddStudent'
import HarknessTable from '@/components/HarknessTable'
import HarknessTableTwo from '@/components/HarknessTableTwo'
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
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/students/new',
      name: 'NewStudent',
      component: NewStudent
    },
    {
      path: '/students/:id',
      name: 'EditStudent',
      component: EditStudent
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/newAccount',
      name: 'NewAccount',
      component: NewAccount
    },
    {
      path: '/homePage',
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
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component: AddStudent
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
    },
    {
      path: '/harknessTableTwo',
      name: 'HarknessTableTwo',
      component: HarknessTableTwo
    }
  ]
})
