module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('Class', {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      desc: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'no description'
      },
      admin: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true
        }
      }
    });
    Class.associate = (models) => {
      Class.belongsToMany(models.Student, {
        through: 'ClassStudents',
        as: 'student',
        foreignKey: 'classId'
      });
    };
    return Class;
  };