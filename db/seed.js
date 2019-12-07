const shieldData = require ('./shieldData');
const listedAppData = require('./listedAppData');
const categoryData = require('./categoryData');
const officialCategoryData = require('./officialCategoryData');

// For TESTING ONLY
const classData = require('./classData');
const studentData = require('./studentData');


module.exports = db => {
    db.User.create({
       firstName: 'admin',
        lastName: 'admin',
        username: 'admin@gmail.com',
        password: '1234',
        profilePic: "https://randomuser.me/api/portraits/lego/6.jpg",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        username: 'jgates@gmail.com',
        password: 'purple99',
        profilePic: "https://randomuser.me/api/portraits/men/38.jpg",
        isAdmin: true
    })
     db.User.create({
        firstName: 'Peter',
        lastName: 'Parker',
        username: 'pparker@gmail.com',
        password: 'red99',
        profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Jackie',
        lastName: 'Truitt',
        username: 'jtruitt@gmail.com',
        password: 'purple99',
        profilePic: "https://randomuser.me/api/portraits/women/92.jpg",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Tom',
        lastName: 'Barnes',
        username: 'tbarnes@gmail.com',
        password: 'teal99',
        profilePic: "https://randomuser.me/api/portraits/men/59.jpg",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Mary',
        lastName: 'Sutter',
        username: 'msutter@gmail.com',
        password: 'yellow99',
        profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Sara',
        lastName: 'Thomas',
        username: 'sthomas@gmail.com',
        password: 'black99',
        profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Ahmed',
        lastName: 'Saleem',
        username: 'asaleem@gmail.com',
        password: 'grey99',
        profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
        isAdmin: true
    })

      db.User.create({
        firstName: 'Misty',
        lastName: 'Thomas',
        username: 'mthomas@gmail.com',
        profilePic: "https://randomuser.me/api/portraits/women/84.jpg",
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
         