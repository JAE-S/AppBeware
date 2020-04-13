const shieldData = require ('./seedData/shieldData');
const listedAppData = require('./seedData/listedAppData');
const categoryData = require('./seedData/categoryData');
const officialCategoryData = require('./seedData/officialCategoryData');
const appShieldUserData = require('./seedData/appShieldUserData');
const appReviewsData = require('./seedData/appReviewsData');
const userAppNotificationData = require('./seedData/userAppNotificationData');

module.exports = db => {
    db.User.create({
       name: 'Jonathan Graves',
        email: 'admin@gmail.com',
        password: '1234',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/37.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Joe Gates',
        email: 'jgates@gmail.com',
        password: 'purple99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/38.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Peter Parker',
         email: 'pparker@gmail.com',
        password: 'red99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/24.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Jackie Truitt',
        email: 'jtruitt@gmail.com',
        password: 'purple99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/92.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Tom Barnes',
         email: 'tbarnes@gmail.com',
        password: 'teal99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/59.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Mary Sutter',
        email: 'msutter@gmail.com',
        password: 'yellow99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/20.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Sara Thomas',
        email: 'sthomas@gmail.com',
        password: 'black99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/26.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Ahmed Saleem',
        email: 'asaleem@gmail.com',
        password: 'grey99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/14.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Misty Thomas',
        email: 'mthomas@gmail.com',
        password: 'orange99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/84.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Crystal Rogers',
        email: 'crogers@gmail.com',
        password: 'pink99',
        phoneNumber: '919-111-2255',
        profilePicture: "https://randomuser.me/api/portraits/women/80.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Mike Rochelle',
        email: 'mrochelle@gmail.com',
        password: 'dog99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/57.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Earl Jones',
        email: 'ejoness@gmail.com',
        password: 'cat99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Samuel Floyd',
        email: 'sfloyd@gmail.com',
        password: 'chicken99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/14.jpg",
        isAdmin: true
    }).then(function() {
      return db.User.create({
        name: 'Candy Green',
        email: 'cgreen@gmail.com',
        password: 'kitten99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/86.jpg",
        isAdmin: true
    }).then(function() {
      return db.Shield.bulkCreate(shieldData)
    }).then(function() {
        return db.Category.bulkCreate(categoryData)
    }).then(function() {
        return db.ListedApp.bulkCreate(listedAppData);
    }).then(function() {
        return db.OfficialCategory.bulkCreate(officialCategoryData);
    }).then(function() {
      return db.AppShieldUser.bulkCreate(appShieldUserData);
    }).then(function() {
      return db.AppReview.bulkCreate(appReviewsData);
    }).then(function() {
      return db.UserAppNotification.bulkCreate(userAppNotificationData);
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
};
    

