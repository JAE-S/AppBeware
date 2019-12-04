module.exports = (sequelize, DataTypes) => {
    const ClassStudent = sequelize.define('ClassStudent', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      classId: {
        allowNull: false,
        type: DataTypes.INTEGER,

      },
      studentId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    });
    // Class.associate = (models) => {
    //   Class.belongsToMany(models.Student, {
    //     through: 'ClassStudents',
    //     as: 'student',
    //     foreignKey: 'classId',
    //     otherKey: 'studentId'
    //   });
    // };
    return ClassStudent;
  };