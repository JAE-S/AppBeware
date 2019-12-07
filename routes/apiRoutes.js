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
  router.get('/userInfo', AppController.userInfo)

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
  //  router.post('/get-app-shields/:id', AppController.getAppShields);


  //  router.post('/examples', AppController.createExample);
  //  router.delete('/examples/:id', AppController.deleteExample);
 
  //  router.post('/newStudent', AppController.addNewStudent);
  //  router.post('/newParent', AppController.addNewParent);
  //  router.post('/newTeacher', AppController.addNewTeacher);
  //  router.post('/newPickup', AppController.addNewPickup);

  return router;

};
