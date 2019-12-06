const shieldData = require ('./shieldData');
const listedAppData = require('./listedAppData');
const categoryData = require('./categoryData');
const officialCategoryData = require('./officialCategoryData');

// For TESTING ONLY
const classData = require('./classData');
const studentData = require('./studentData');


module.exports = db => {
    db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        username: 'jgates@gmail.com',
        password: 'purple99',
        profilePic: "#",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        username: 'jgates@gmail.com',
        password: 'purple99',
        profilePic: "#",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        username: 'jgates@gmail.com',
        password: 'purple99',
        profilePic: "#",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        username: 'jgates@gmail.com',
        password: 'purple99',
        profilePic: "#",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Sara',
        lastName: 'Thomas',
        username: 'sthomas@gmail.com',
        password: 'green99',
        profilePic: "#",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Ahmed',
        lastName: 'Saleem',
        username: 'asaleem@gmail.com',
        password: 'green99',
        profilePic: "#",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Misty',
        lastName: 'Thomas',
        username: 'mthomas@gmail.com',
        profilePic: "#",
        password: 'orange99',
        isAdmin: true
    })

    db.Shield.bulkCreate(shieldData).then(function () {
        return db.Category.bulkCreate(categoryData)
    }).then(function() {
        return db.ListedApp.bulkCreate(listedAppData);
    }).then(function() {
        return db.OfficialCategory.bulkCreate(officialCategoryData);
    }).then(function() {
        return db.Student.bulkCreate(studentData);
    }).then(function() {
        return db.Class.bulkCreate(classData);
    });
    
};
         