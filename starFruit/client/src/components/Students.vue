<template>
  <div class="students">
    <h1>Students</h1>
    <div v-if="students.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewStudent' }" class="">Add Student</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.title }}</td>
          <td>{{ student.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditStudent', params: { id: student._id } }">Edit</router-link> |
            <a href="#" @click="deleteStudent(student._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no students... Let's add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewStudent' }" class="add_student_link">Add Student</router-link>
    </div>
  </div>
</template>

<script>
import StudentsService from '@/services/StudentsService'
export default {
  name: 'students',
  data () {
    return {
      students: []
    }
  },
  mounted () {
    this.getStudents()
  },
  methods: {
    async getStudents () {
      const response = await StudentsService.fetchStudents()
      this.students = response.data.students
    },
    async deleteStudent (id) {
      const response = await StudentsService.deleteStudent(id)
      this.students = response.data.students
      this.$router.push({name: 'Students'})
    }
  }
}
</script>

<!-- CSS Style is here right now -->
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_student_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
