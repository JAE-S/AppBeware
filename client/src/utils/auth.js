import axios from "axios";

export default {
    signIn: function(userInfo) {
        console.log("getting Info " + userInfo.email + userInfo.password)
        return axios.post('/api/login', userInfo)
      },
      
      getAll: function() {
        return axios.get('/api/userInfo')
      },
      
} 