import axios from "axios";

export default {

    viewAllListedApps: function() {
        console.log("Inside appServices.js - view all apps");
        return axios.get('/api/listed-app');
    },

    viewSingleApp: function(appId) {
        console.log("Inside appServices.js - view single app");
        return axios.get('/api/get-single-app/' + appId);
    },

    viewAppNames: function() {
        console.log("Inside appServices.js - view app names");
        return axios.get('/api/app-names-only');
    },

    selectTrendingApps: function() {
        console.log("Inside appServices.js - select trending apps");
        return axios.get('/api/select-trending-apps')
    },

    viewAppReviews: function(appId) {
        console.log("Inside appServices.js - view app reviews");
        return axios.get('api/get-app-reviews/' + appId);

    },

    generateShieldsForApps: function(appId) {
        console.log("Inside appServices.js - generate shields for apps");
        return axios.get('api/get-app-shields/' + appId);
    },

    search42Text: function(queryText, platform) {
        console.log("Inside appServices.js - search 42 text");
        return axios.get('api\new-search/' + queryText + "/" + platform)
    },

    search42IosId: function(iosId) {
        console.log("Inside appServices.js - search 42 IOS ID");
        return axios.get('api/search-by-ios-id/' + iosId)
    },

    addTempListing: function(tempAppData) {
        console.log("Inside appServices.js - add temp listing");
        return axios.post('/api/add-temp-app-listing', tempAppData)
    }

    // viewTempSingleApp: function() {
    //     console.log("Inside appServices.js - view temp single app");
    // }       

}
