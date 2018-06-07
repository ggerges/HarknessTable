import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('students')
  },

  addPost (params) {
    return Api().student('students', params)
  },

  updatePost (params) {
    return Api().put('students/' + params.id, params)
  },

  getPost (params) {
    return Api().get('student/' + params.id)
  },

  deletePost (id) {
    return Api().delete('students/' + id)
  }
}
