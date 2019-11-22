module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          not: ['[a-z]', 'i']
        }
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    });
    Student.associate = (models) => {
      Student.belongsToMany(models.Class, {
        through: 'ClassStudents',
        as: 'class',
        foreignKey: 'studentId'
      });
    };
    return Student;
  };