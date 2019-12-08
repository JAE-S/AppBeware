module.exports = (sequelize, DataTypes) => {
    const AppReviews = sequelize.define('AppReviews', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        myUserId: {
            allowNull: false, 
            type: DataTypes.STRING
        },
        myAppId: {
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
            type: DataTypes.TEXT,
            allowNull: false
        },
        alert: {
            type: DataTypes.BOOLEAN,
            defaultValue: false 
        }

    })

    AppReviews.associate = function (models) {
        AppReviews.belongsTo(models.User, {
            foreignKey: {
            allowNull: false
            }
        });
        AppReviews.belongsTo(models.ListedApp, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return AppReviews
}