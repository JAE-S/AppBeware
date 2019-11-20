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

    // db.Badge.bulkCreate(badgeData).then(function () {
    //     return db.ListedApp.bulkCreate(listedAppData);
    // })
    db.Badge.create({
        name: "Predator Risk",
    })
    db.Badge.create({
        name: "Sexual Content",
    })
    db.Badge.create({
         name: "Dangerous Behaviors",
    })
    db.Badge.create({
         name: "Cyberbullying",
    })
    db.Badge.create({
         name: "Violence"
    })
    
};
         