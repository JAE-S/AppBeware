module.exports = (sequelize, DataTypes) => {
    const AppShieldUser = sequelize.define('AppShieldUser', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      appId: {
        allowNull: false,
        type: DataTypes.INTEGER,

      },
      shieldId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    });

    return AppShieldUser;
  };