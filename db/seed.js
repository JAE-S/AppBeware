const badgeData = require ('./badgeData');
const listedAppData = require('./listedAppData');

module.exports = db => {
    db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        email: 'jgates@gmail.com',
        password: 'purple99',
        isAdmin: true
    })

    db.Badge.bulkCreate(badgeData).then(function () {
        return db.ListedApp.bulkCreate(listedAppData);
    })
    
};
         