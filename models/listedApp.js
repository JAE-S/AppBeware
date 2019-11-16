module.exports = function (sequelize, DataTypes) {
    const ListedApp = sequelize.define('ListedApp', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        logoUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        downloads: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        warnRatingCount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        warnRatingAverage: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        badge1: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        badge1Count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        badge2: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        badge2Count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        badge3: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        badge3Count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        badge4: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        badge4Count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        badge5: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        badge5Count: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    // Student.associate = function (models) {
    //   Student.belongsTo(models.Teacher, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    //   Student.belongsTo(models.Parent,
    //     { constraints: false }
    //   );
    //   Student.belongsTo(models.Approved,
    //     { constraints: false }
    //   );
    // };
    return ListedApp;
  };