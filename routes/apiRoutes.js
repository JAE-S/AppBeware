const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/userName/:id', ensureAuthenticated, AuthController.updateName);
  router.put('/userEmail/:id', ensureAuthenticated, AuthController.updateEmail);
  router.put('/userPhone/:id', ensureAuthenticated, AuthController.updatePhone);
  router.put('/userPassword/:id', ensureAuthenticated, AuthController.updatePassword);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

   // App
   router.get('/listed-app', AppController.getListedApp);
   router.get('/app-names-only', AppController.getAppNames);
   router.get('/select-trending-apps', AppController.selectTrendingApps);
   router.get('/get-single-app/:id', AppController.viewSingleApp);
   router.get('/get-app-shields/:id', AppController.getAppShields);
   router.get('/get-app-reviews/:id', AppController.getAppReviews);
   router.get('/filter-category/:id', AppController.filterCategory);
   router.get('/get-categories', AppController.getCategories);
   router.get('/get-single-category-info/:id', AppController.getSingleCategoryInfo);
   router.get('/get-shields', AppController.getShields);
   router.post('/submit-review', AppController.submitReview);
   router.get('/test-query', AppController.testQuery);
   router.get('/new-search/:query/:platform', AppController.search42Text);
   router.get('/search-by-ios-id/:id', AppController.search42ByIdIos);
   router.post('/add-temp-app-listing', AppController.addTempAppListing);
   router.get('/userInfo', AppController.userInfo);
   router.get('/alerts', AppController.getAlerts);
   router.get('/alert-count', AppController.getAlertCount);
   router.get('/redirect', AppController.redirect);
  //  router.get('/check-alert-status/:userId&:appId', AppController.checkAlertStatus)
  router.put('/change-alert-status', AppController.changeAlertStatus);
  router.put('/update-alerts-per-app/:id', AppController.updateAllAlertsForApp);
  router.put('/changer/:id', AppController.changer);
  //  router.get('/get-temp-single-app')

  return router;

};
