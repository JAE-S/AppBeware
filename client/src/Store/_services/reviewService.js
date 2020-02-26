import axios from "axios";

export default {

    reviewSubmit: function(completeReview) {
        console.log("Inside reviewService.js - reviewSubmit")
        return axios.post('api/submit-review', completeReview)
    }

}
