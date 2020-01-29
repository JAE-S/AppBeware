module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
        // imageUrl: {
        //     allowNull: false,
        //     type: DataTypes.STRING
        // },
        // description: {
        //     allowNull: true,
        //     type: DataTypes.STRING
        // }
    });

    Product.associate = function (models) {
        Product.hasMany(models.ProductDepartment);
      };

    return Product;
};