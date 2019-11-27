import axios from "axios";
const ios42SingleAppQuery = "https://data.42matters.com/api/v2.0/ios/apps/lookup.json?id=";

export default {
  search42Ios: function(queryId) {
    return axios.get(ios42SingleAppQuery + queryId + "&access_token=" + process.env.APIKEY42);
  },

  // Return all listed apps
  getListedApps: function() {
    console.log("Inside API.js");
    return axios.get('/api/listed-app');
  },

  // Return app names and ids only - alphabetical order
  getAppNames: function() {
    console.log("Inside getAppNames - API.js");
    return axios.get('/api/app-names-only');
  },

  getCategories: function() {
    return axios.get('/api/get-categories');
  },

  getShields: function() {
    return axios.get('/api/get-shields');
  },

  signIn: function(userInfo) {
    console.log("getting Info " + userInfo.username + userInfo.password)
    return axios.post('/api/login', userInfo)
  },

  signOut: function(userInfo) {
    console.log("Signing Out " + userInfo)
    return axios.get('/api/logout')
  },

  googleSignIn: function (userInfo) {
    console.log("Logging in under google " + userInfo)
    return axios.post('/api/googleLogin')
  },
  
  filterCategory: function (catId) {
    console.log("Inside filter Category - API.js");
    console.log("API has catId set to: " + catId);
    return axios.get('/api/filter-category/' + catId)
  }



};




// function searchIOS(queryId) {

//     var queryURL = "https://data.42matters.com/api/v2.0/ios/apps/lookup.json?id=" + queryId + "&access_token=f9aebe59b0e6b92a08f4926e1d9a4b7943bf5957";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {

//       // Printing the entire object to console
//       console.log(response);

//       console.log("App Name: " + response.trackCensoredName);
//       console.log("App Store ID: " + response.trackId);
//       console.log("Advisories: " + response.advisories);
//       console.log("Content Advisory Rating: " + response.contentAdvisoryRating);
//       console.log("Description: " + response.description);
//       console.log("Primary Genre Name: " + response.primaryGenreName);
//       console.log("Genres: " + response.genres);
//       console.log("Artwork url: " + response.artworkUrl512)
//     });
//   }
