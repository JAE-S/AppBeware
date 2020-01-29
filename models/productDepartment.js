module.exports = (sequelize, DataTypes) => {
    const ProductDepartment = sequelize.define('ProductDepartment', { });

    // Category.associate = function (models) {
    //     Category.hasMany(models.ListedApp);
    //   };

    ProductDepartment.associate = function (models) {
        ProductDepartment.belongsTo(models.Product);
        ProductDepartment.belongsTo(models.Department);
    };

    return ProductDepartment;
};