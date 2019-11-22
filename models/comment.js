module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        badge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        warnRating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        appId: {
            type: DataTypes.INTEGER,
            allowNull: false
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
    return Comment;
  };