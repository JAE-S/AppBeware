module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });

    Category.associate = function (models) {
        Category.hasMany(models.ListedApp);
      };

    return Category;
};