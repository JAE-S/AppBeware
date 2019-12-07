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
        email: 'admin@gmail.com',
        password: '1234',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/lego/6.jpg",
        isAdmin: true
    });

      db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        email: 'jgates@gmail.com',
        password: 'purple99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/38.jpg",
        isAdmin: true
    });
 
     db.User.create({
        firstName: 'Peter',
        lastName: 'Parker',
        email: 'pparker@gmail.com',
        password: 'red99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/24.jpg",
        isAdmin: true
    });

      db.User.create({
        firstName: 'Jackie',
        lastName: 'Truitt',
        email: 'jtruitt@gmail.com',
        password: 'purple99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/92.jpg",
        isAdmin: true
    });

      db.User.create({
        firstName: 'Tom',
        lastName: 'Barnes',
        email: 'tbarnes@gmail.com',
        password: 'teal99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/59.jpg",
        isAdmin: true
    });

      db.User.create({
        firstName: 'Mary',
        lastName: 'Sutter',
        email: 'msutter@gmail.com',
        password: 'yellow99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/20.jpg",
        isAdmin: true
    });

      db.User.create({
        firstName: 'Sara',
        lastName: 'Thomas',
        email: 'sthomas@gmail.com',
        password: 'black99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/26.jpg",
        isAdmin: true
    });

      db.User.create({
        firstName: 'Ahmed',
        lastName: 'Saleem',
        email: 'asaleem@gmail.com',
        password: 'grey99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/men/14.jpg",
        isAdmin: true
    });

      db.User.create({
        firstName: 'Misty',
        lastName: 'Thomas',
        email: 'mthomas@gmail.com',
        password: 'orange99',
        phoneNumber: '919-111-2222',
        profilePicture: "https://randomuser.me/api/portraits/women/84.jpg",
        isAdmin: true
    });

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
         