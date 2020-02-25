import axios from "axios";

export default {

    viewAllShields: function() {
        // console.log("Inside shieldService - view All Shields");
        return axios.get('/api/get-shields');
    },

}
