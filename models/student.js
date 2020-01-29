module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
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
      Student.hasMany(models.ClassStudent, {
        // through: 'TempTable',
        // as: 'student',
        // foreignKey: 'classId',
        // otherKey: 'studentId'
      });
    };
    // Student.associate = (models) => {
    //   Student.belongsToMany(models.Class, {
    //     through: 'TempTable',
    //     as: 'class',
    //     foreignKey: 'studentId',
    //     otherKey: 'classId'
    //   });
    // };
    // Student.associate = (models) => {
    //   Student.belongsToMany(models.Class, {
    //     through: 'ClassStudents',
    //     as: 'class',
    //     foreignKey: 'studentId',
    //     otherKey: 'classId'
    //   });
    // };
    return Student;
  };