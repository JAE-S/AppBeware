module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        label: {
            allowNull: false,
            type: DataTypes.STRING
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        platform: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });

    return Category;
};