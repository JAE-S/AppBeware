const axios = require('axios');
// const {parse, stringify} = require('flatted/cjs');
require('dotenv').config();

const makeArrayOfShields = (dbArray) => {
  console.log("Inside makeArrayOfShields");
  console.log("Length: " + dbArray.length);
  const duplicateShieldArray = dbArray.map((item) => item.shieldId);
  const noDuplicateShield = new Set(duplicateShieldArray);
  const finalShieldArray = [...noDuplicateShield];
  return finalShieldArray;
};

const tempMakeArrayOfShields = (dbArray) => {
  console.log("Inside makeArrayOfShields");
  // console.log("Length: " + dbArray.length);
  const duplicateShieldArray = dbArray[0].Shield_ID.map(item => item);
  const noDuplicateShield = new Set(duplicateShieldArray);
  const finalShieldArray = [...noDuplicateShield];
  dbArray[0].Shield_ID = finalShieldArray;

  const duplicateShieldNameArray = dbArray[0].Shield_Name.map(item => item);
  const noDuplicateShieldName = new Set(duplicateShieldNameArray);
  const finalShieldNameArray = [...noDuplicateShieldName];
  dbArray[0].Shield_Name = finalShieldNameArray;

  const duplicateShieldIconArray = dbArray[0].Shield_Icon.map(item => item);
  const noDuplicateShieldIcon = new Set(duplicateShieldIconArray);
  const finalShieldIconArray = [...noDuplicateShieldIcon];
  dbArray[0].Shield_Icon = finalShieldIconArray;

  return dbArray;
};

const createNewAppNameArray = dbArray => {
  let smallerArray = [];
  let tempName = "";

  for (let i=0; i < dbArray.length; i++) {

    if (i = 0) {
      tempName = dbArray[i].label
      console.log("Inside if statement");
    }

    // let tempName = dbArray[0].label;

    smallerArray.push({
      label: dbArray[0].label,
      id: dbArray[0].id,
      Shield_ID: [],
      Shield_Name: [],
      Shield_Icon: []
    })


    for (let j=0; j < dbArray.length; j++) {
      console.log("Right before for loop - " + i + " " + j);

      // console.log("Inside for loop - iterator: " + j);
      if (dbArray[j].label === tempName) {
        console.log("Inside if statement");
        smallerArray[0].Shield_ID.push(dbArray[j].Shield_ID);
        smallerArray[0].Shield_Name.push(dbArray[j].Shield_Name);
        smallerArray[0].Shield_Icon.push(dbArray[j].Shield_Icon);
      }
    }
  }
  return tempMakeArrayOfShields(smallerArray);

  // return smallerArray;
}


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

      getAppShields: function (req, res) {
        console.log("Inside getAppShields")
        console.log(req.params.id)
        db.AppShieldUser.findAll({
          attributes: ['appId', 'shieldId'],
          where: {
            appId: req.params.id
          },
          order: [['shieldId', 'ASC']]
        }).then(function(dbAppShieldUser) {
          db.Shield.findAll({
            where: {
              id: makeArrayOfShields(dbAppShieldUser)
            }
          }).then(function(dpSpecificApps) {
            res.json(dpSpecificApps)
          });
        });
      },

      getAppReviews: function (req, res) {
        console.log("Inside getAppReviews - AppController")
        db.AppReview.findAll({
          where: {
            ListedAppId: req.params.id
          },
          include: [
            {
              model: db.User,
            },
            {
              model: db.ListedApp
            }
          ]
        }).then(function(dbAppReviews) {
          res.json(dbAppReviews)
        });
      },

      search42Text: function (req, res) {
        // const queryUrl = `https://data.42matters.com/api/v2.0/${req.params.platform}/apps/search.json?q=${req.params.query}&access_token=${process.env.APIKEY42}`;
        const queryTextUrl = `https://data.42matters.com/api/v2.0/ios/apps/search.json?q=${req.params.query}&access_token=${process.env.APIKEY42}`;
        axios.get(queryTextUrl)
          .then(function(response) {
            res.json(response.data);
          })
      },

      search42ByIdIos: function (req, res) {
        const idQueryUrl = `https://data.42matters.com/api/v2.0/ios/apps/lookup.json?id=${req.params.id}&access_token=${process.env.APIKEY42}`;
        axios.get(idQueryUrl)
        .then(function(response) {
          console.log("Inside display")
          // console.log(response.data);
          res.json(response.data);
        });
      },

      addTempAppListing: function (req, res) {
        db.TempAppListing.create(req.body).then(function(dbTempAppListing) {
          res.json(dbTempAppListing);
        })
      },

      testQuery: function (req, res) {
        console.log("Inside Test Query")
        db.sequelize.query("SELECT ListedApps.name AS label, AppShieldUsers.appId AS id, AppShieldUsers.shieldId AS Shield_ID, Shields.name AS Shield_Name, Shields.icon AS Shield_Icon FROM ListedApps JOIN AppShieldUsers ON ListedApps.id = AppShieldUsers.appId JOIN Shields ON AppShieldUsers.shieldId = Shields.id ORDER BY ListedApps.name, Shields.id ASC",  { type: db.sequelize.QueryTypes.SELECT})
          .then(function(returnedData) {
            console.log("Length: " + returnedData.length)
            // console.log(JSON.stringify(createNewAppNameArray(returnedData)), null, 4);
            // res.json(createNewAppNameArray(returnedData))
            res.json(returnedData)
          })
        // res.end();
      },

      getSpecificShields: function (req, res) {
        db.Shield.findAll({
          where: {
            id: [1,2,4]
          }
        }).then(function(dpSpecificApps) {
          res.json(dpSpecificApps)
        });
      },

      selectTrendingApps: function (req, res) {
        console.log("Inside appController");
        let tempArray = [];
        db.ListedApp.findAll({}).then(function (dbListedApps) {
          for (i=0; i<3; i++) {
            let randomIndex = Math.floor(Math.random() * dbListedApps.length - 1)
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

      getSingleCategoryInfo: function (req, res) {
        db.Category.findAll({
          where: {
            id: req.params.id
          }
        }).then(function(dbSingleCategoryInfo) {
          res.json(dbSingleCategoryInfo);
        });
      },

      getShields: function (req, res) {
        db.Shield.findAll({}).then(function (dbShield) {
          res.json(dbShield);
        });
      },

      submitReview: function (req, res) {
        db.AppReview.create(req.body).then(function(dbAppReview) {
          res.json(dbAppReview);
        })
      },

      // Testing move to authcontroller
      userInfo: function (req, res) {
        if (!req.isAuthenticated()){
          res.json({
            userInfo:{
              name:'',
              email: '',
              phone: '',
              password: ''
            },
            isloggedin: false
          })
        }
        else{
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
      },

      getTest: function (req, res) {
        console.log("Inside top level of testLink");

        db.AppShieldUser.create(req.body).then(function (dbAppShieldUser) {
          res.json(dbAppShieldUser);
        }).catch(function(error) {
          console.log(error)
        });
      },

      getAlerts: function (req, res) {
        db.UserAppNotification.findAndCountAll({
          where: {
            UserId: req.session.passport.user.id
          },
          include: [
            {model: db.User},
            {model: db.ListedApp},
          ]
        }).then((dbAlerts) => {
          res.json(dbAlerts)
        }).catch(err => console.log(err))
      },

      getAlertCount: function (req, res) {
        db.UserAppNotification.findAndCountAll({
          where: {
            UserId: req.session.passport.user.id,
            alert: true
          },
          include: [
            {model: db.User},
            {model: db.ListedApp},
          ]
        }).then((dbAlertCount) => {
          res.json(dbAlertCount)
        }).catch(err => console.log(err))
      },

      redirect: function (req, res) {
        console.log("You made it to the redirect!!");
        res.end;
      },

      // Not functional
      checkAlertStatus: function (req, res) {
        console.log("Inside checkAlertStatus");
        console.log(req.params);
        db.UserAppNotification.findAll({
          where: {
            UserId: req.params.userId,
            ListedAppId: req.params.appId
            }
          }).then((dbCheckAlertStatus) => {
            console.log("Length: " + dbCheckAlertStatus.length);
            console.log(req.params);
            if (dbCheckAlertStatus.length > 0) {
              console.log("Testing new redirect method");
              // updateAlertStatus(req.params.userId, req.params.appId, dbCheckAlertStatus[0].alert);
              const updateNotificationRecord = {
                userId: req.params.userId,
                appId: req.params.appId,
                alert: dbCheckAlertStatus[0].alert
              };
              return axios.put('/api/change-alert-status/', updateNotificationRecord)
              .then(function() {
                console.log("Updated!")
              }).catch(err => console.log(err))

              // return axios.put(`/api/change-alert-status/${req.params.userId}&${req.params.appId}&${dbCheckAlertStatus[0].alert}`)
            } else {
              console.log("HEY-OOOO, I found a record and here it is!!!");
              res.redirect('/api/redirect');
            }
          })
      },

      changeAlertStatus: function (req, res) {
        console.log("Inside changeAlertStatus");
        console.log(req.body);
        db.UserAppNotification.update({
            alert: !req.body.alert
        },
        {
          where: {
            UserId: req.body.userId,
            ListedAppId: req.body.appId
          }
        }).then((dbUpdatedRecord) => {
          res.json(dbUpdatedRecord);
        })
      },

      updateAllAlertsForApp: function(req, res) {
        console.log("Inside the function to update alerts across the board for all users\n______________");
        console.log(req.params.id);
        db.UserAppNotification.update({
          alert: true
        },
        {
          where: {
            // UserId: req.body.userId,
            ListedAppId: req.params.id
          }
        }).then((dbUpdatedRecords) => {
          res.json(dbUpdatedRecords);
        })
      },

      changer: function(req, res) {
        db.AppReview.update({
          alert: req.body.alert 
        }, {
          where: {id: req.params.id}
        }).then(result => {
          res.json(result)
        })
      }


  
    };
  };