module.exports = (sequelize, DataTypes) => {
    const AppReviews = sequelize.define('AppReviews', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            allowNull: false, 
            type: DataTypes.STRING
        },
        appId: {
            allowNull: false, 
            type: DataTypes.STRING
        },
        predatorRisk: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dangerousBehavior: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        cyberbullying: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        violentContent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        sexualContent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dangerRating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alert: {
            type: DataTypes.BOOLEAN,
            defaultValue: false 
        }

    })
    return AppReviews
}