
import axios from "axios";

export default {

    getCategories: function() {
        // console.log("Inside appService.js - trying to get all category info")
        return axios.get('/api/get-categories');
    },

    filterCategory: function (catId) {
        // console.log("Inside filter Category - API.js");
        // console.log("API has catId set to: " + catId);
        return axios.get('/api/filter-category/' + catId)
      },
    
      getCategoryInfo: function(catId) {
        // console.log("Inside get single category info - API.js - using catId: " + catId);
        return axios.get('api/get-single-category-info/' + catId);
      },

        getShields: function() {
            return axios.get('/api/get-shields');
        },

        selectTrendingApps: function() {
            // console.log("Inside select Trending Apps - API.js");
            return axios.get('/api/select-trending-apps')
          },

        getListedApps: function() {
            // console.log("Inside API.js");
            return axios.get('/api/listed-app');
          },
        
    
      
}