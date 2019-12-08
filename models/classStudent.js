module.exports = (sequelize, DataTypes) => {
    const ClassStudent = sequelize.define('ClassStudent', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      myClassId: {
        allowNull: false,
        type: DataTypes.INTEGER,

      },
      myStudentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    });

    return ClassStudent;
  };