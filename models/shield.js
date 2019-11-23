module.exports = function (sequelize, DataTypes) {
    const Shield = sequelize.define('Shield', {
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
      icon: {
        type: DataTypes.STRING,
        allowNull: false
      },
      altText: {
        type: DataTypes.STRING,
        allowNull: false
      },
      info: {
        type: DataTypes.STRING,
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
    return Shield;
  };