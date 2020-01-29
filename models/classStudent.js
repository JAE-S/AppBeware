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
        type: DataTypes.INTEGER,
      }
      // count: {
      //   allowNull: false,
      //   type: DataTypes.INTEGER
      // }
    });

    ClassStudent.associate = (models) => {
      ClassStudent.belongsTo(models.Class, {  });
      ClassStudent.belongsTo(models.Student, { });
    };

    return ClassStudent;
  };