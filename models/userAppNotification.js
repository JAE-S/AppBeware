module.exports = (sequelize, DataTypes) => {
    const UserAppNotification = sequelize.define('UserAppNotification', { 
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            },
        alert: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: false
        }
    });

    UserAppNotification.associate = function (models) {
        UserAppNotification.belongsTo(models.User);
        UserAppNotification.belongsTo(models.ListedApp);
    };

    return UserAppNotification;
};