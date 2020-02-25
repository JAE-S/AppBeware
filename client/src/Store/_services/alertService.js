import axios from "axios";

export default {

    viewAllUserAppNotifications: function () {
        console.log("Inside alertService.js - view ALL user app notifications");
        return axios.get('/api/alerts') 
    },

    viewActiveUserAppNotifications: function () {
        console.log("Inside alertService.js - view ACTIVE user app notifications");
        return axios.get('/api/alert-count')
    }
}

