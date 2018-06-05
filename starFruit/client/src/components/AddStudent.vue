<template>
  <div class="students">
    <h1>Add Student</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="NAME" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_student_btn" @click="addStudent">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import StudentsService from '@/services/StudentsService'
export default {
  name: 'AddStudent',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addStudent () {
      await StudentsService.addStudent({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Students' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_student_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
