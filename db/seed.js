module.exports = db => {
    db.User.create({
        firstName: 'Joe',
        lastName: 'Gates',
        email: 'jgates@gmail.com',
        password: 'purple99',
        isAdmin: true
    })
}