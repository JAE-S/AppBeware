/* eslint-disable no-var */
module.exports = function (db) {
    return {
      // Return all listed apps in our listedApp table
      getListedApp: function (req, res) {
        db.ListedApp.findAll({}).then(function (dbListedApps) {
          res.json(dbListedApps);
        });
      },

      // Return only app names and ids from listedApp table, sorted by app name
      getAppNames: function (req, res) {
        db.ListedApp.findAll({ 
          attributes: [['name', 'label'], 'id'],
          order: [['name', 'ASC']]
        }).then(function(dbAppNames) {
          res.json(dbAppNames);
        });
      },

      selectTrendingApps: function (req, res) {
        console.log("Inside appController");
        let tempArray = [];
        db.ListedApp.findAll({}).then(function (dbListedApps) {
          for (i=0; i<3; i++) {
            let randomIndex = Math.floor(Math.random() * dbListedApps.length + 1)
            console.log("Random number is : " + randomIndex);
            tempArray.push(dbListedApps[randomIndex])
          }
          res.json(tempArray);
        });
      },

      viewSingleApp: function (req, res) {
        console.log("Inside appController - viewSingleApp - looking for ID: " + req.params.id);
        db.ListedApp.findAll({
          where: {
            id: req.params.id
          }
        }).then(function(dbSingleApp) {
          res.json(dbSingleApp)
        })
      },
      
      filterCategory: function (req, res) {
        // req.params.id = category ID.  If it is equal to 6, that indicates we should pull all apps.
        if (req.params.id === "6") {
          db.ListedApp.findAll({}).then(function (dbAppCategories) {
            res.json(dbAppCategories);
          });
        } else {
          db.ListedApp.findAll({
            where: {
              CategoryId: req.params.id
            },
            include: db.Category
          }).then(function(dbAppCategories) {
            res.json(dbAppCategories)
          });
        }
      },

      getCategories: function (req, res) {
        db.Category.findAll({}).then(function (dbCategory) {
          res.json(dbCategory);
        });
      },

      getShields: function (req, res) {
        db.Shield.findAll({}).then(function (dbShield) {
          res.json(dbShield);
        });
      },

      userInfo: function (req, res) {
        db.User.findOne({
          where: {
            id: req.session.passport.user.id
          }
        })
        .then(() => {
          const user= {
            userInfo: req.session.passport.user,
            isloggedin: req.isAuthenticated()
          }
          res.json(user)
        })
      }


    //   // Create a new example
    //   createExample: function (req, res) {
    //     db.Example.create(req.body).then(function (dbExample) {
    //       res.json(dbExample);
    //     });
    //   },
    //   // Delete an example by id
    //   deleteExample: function (req, res) {
    //     db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
    //       res.json(dbExample);
    //     });
    //   },
    //   // Create new student entry
    //   addNewStudent: function (req, res) {
    //     db.Student.create(req.body).then(function (dbStudent) {
    //       res.json(dbStudent);
    //     });
    //   },
    //   // Create new parent entry
    //   addNewParent: function (req, res) {
    //     db.Parent.create(req.body).then(function (dbParent) {
    //       res.json(dbParent);
    //     });
    //   },
    //   // Create new teacher entry
    //   addNewTeacher: function (req, res) {
    //     db.Teacher.create(req.body).then(function (dbTeacher) {
    //       res.json(dbTeacher);
    //     });
    //   },
    //   // Create new approved pickup entry
    //   addNewPickup: function (req, res) {
    //     db.Approved.create(req.body).then(function (dbApproved) {
    //       res.json(dbApproved);
    //     });
    //   }
  
    };
  };