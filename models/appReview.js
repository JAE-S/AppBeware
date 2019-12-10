module.exports = (sequelize, DataTypes) => {
    const AppReview = sequelize.define('AppReview', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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

    AppReview.associate = function (models) {
        AppReview.belongsTo(models.User, {
            foreignKey: {
            allowNull: false
            }
        });
        AppReview.belongsTo(models.ListedApp, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return AppReview
}