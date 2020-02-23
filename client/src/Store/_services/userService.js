import axios from "axios";

export default {

    login: function(userInfo) {
        console.log("getting Info " + userInfo.email + userInfo.password)
        return axios.post('/api/login', userInfo)
    },
}