module.exports = function (sequelize, DataTypes) {
    const ListedApp = sequelize.define('ListedApp', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
      }
        },
        appStoreId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        logoUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        downloads: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        warnRatingCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        warnRatingAverage: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        badge1: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        badge1Name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Predator Risk"
        },
        badge1LogoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://imagizer.imageshack.com/img921/8898/PyRetH.png"
        },
        badge1Count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        badge2: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        badge2Name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Dangerous Behavior"
        },
        badge2LogoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://imagizer.imageshack.com/img922/4586/FJpyql.png"
        },
        badge2Count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        badge3: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        badge3Name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Violent Content"
        },
        badge3LogoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"
        },
        badge3Count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        badge4: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        badge4Name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Cyberbullying"
        },
        badge4LogoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://imagizer.imageshack.com/img922/7184/zsAk82.png"
        },
        badge4Count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        badge5: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        badge5Name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Sexual Content"
        },
        badge5LogoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"
        },
        badge5Count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: false
        },
        siteUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    ListedApp.associate = function (models) {
        ListedApp.belongsTo(models.Category, {
            foreignKey: {
            allowNull: true
            }
        });
        ListedApp.hasMany(models.AppReview);
        ListedApp.hasMany(models.UserAppNotification);
    };

    return ListedApp;
  };