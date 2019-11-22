const badgeData = require ('./badgeData');
const listedAppData = require('./listedAppData');
const categoryData = require('./categoryData');

// For TESTING ONLY
const classData = require('./classData');
const studentData = require('./studentData');


module.exports = db => {
    db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        email: 'jgates@gmail.com',
        password: 'purple99',
        isAdmin: true
    })

    // db.Badge.bulkCreate(badgeData).then(function () {
    //     return db.ListedApp.bulkCreate(listedAppData);
    // })

    db.Badge.bulkCreate(badgeData).then(function () {
        return db.ListedApp.bulkCreate(listedAppData);
    }).then(function() {
        return db.Category.bulkCreate(categoryData);
    }).then(function() {
        return db.Student.bulkCreate(studentData);
    }).then(function() {
        return db.Class.bulkCreate(classData);
    });
    
};
         