import axios from "axios";

export default {

    viewAllCategories: function() {
        console.log("Inside categoryService - view All Categories");
        return axios.get('/api/get-categories');
    },

    viewSingleCategory: function(catId) {
        console.log("Inside categoryService - view Single Category");
        return axios.get('/api/filter-category/' + catId)
    },

    viewSingleCategoryInfo: function(catId) {
        console.log("Inside categoryService - view Single Category Info");
        return axios.get('api/get-single-category-info/' + catId);
    }

}
