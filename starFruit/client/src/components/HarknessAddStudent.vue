<template>
  <div class="posts">
    <h1>Add Student</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="STUDENT NAME" v-model="name">
        </div>
       <div>
           <textarea rows="5" cols="15" placeholder="DESCRIPTION NOTES" v-model="description"></textarea>
        </div>
       <div>
          <input type="text" name="knowledgePoint" placeholder="KNOWLEDGE & UNDERSTANDING POINTS" v-model="knowledgePoint">
        </div>
        <div>
          <input type="text" name="thinkingPoint" placeholder="THINKING & INQUIRY POINTS" v-model="thinkingPoint">
        </div>
        <div>
          <input type="text" name="communicationPoint" placeholder="COMMUNICATION POINTS" v-model="communicationPoint">
        </div>
        <div>
          <input type="text" name="applicationPoint" placeholder="APPLICATION POINTS" v-model="applicationPoint">
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      name: '',
      description: '',
      knowledgePoint: '',
      thinkingPoint: '',
      communicationPoint: '',
      applicationPoint: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        name: this.name,
        description: this.description,
        classRoom: this.classRoom,
        knowledgePoint: this.knowledgePoint,
        thinkingPoint: this.thinkingPoint,
        communicationPoint: this.communicationPoint,
        applicationPoint: this.applicationPoint
      })
      this.$router.push({ name: 'HarknessTable' })
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
.app_post_btn {
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
