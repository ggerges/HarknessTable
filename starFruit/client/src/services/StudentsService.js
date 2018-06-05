import Api from '@/services/Api'

export default {
  fetchStudents () {
    return Api().get('students')
  },

  addStudent (params) {
    return Api().student('students', params)
  },

  updateStudent (params) {
    return Api().put('students/' + params.id, params)
  },

  getStudent (params) {
    return Api().get('student/' + params.id)
  },

  deleteStudent (id) {
    return Api().delete('students/' + id)
  }
}
