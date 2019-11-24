const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

   // App
   router.get('/listed-app', AppController.getListedApp);
   router.get('/app-names-only', AppController.getAppNames);
   router.get('/filter-category/:id', AppController.filterCategory);
   router.get('/get-categories', AppController.getCategories);
  //  router.post('/examples', AppController.createExample);
  //  router.delete('/examples/:id', AppController.deleteExample);
 
  //  router.post('/newStudent', AppController.addNewStudent);
  //  router.post('/newParent', AppController.addNewParent);
  //  router.post('/newTeacher', AppController.addNewTeacher);
  //  router.post('/newPickup', AppController.addNewPickup);

  return router;

};
