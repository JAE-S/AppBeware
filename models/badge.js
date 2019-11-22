module.exports = function (sequelize, DataTypes) {
    const Badge = sequelize.define('Badge', {
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
    return Badge;
  };