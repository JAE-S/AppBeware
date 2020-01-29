module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
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

    Department.associate = function (models) {
        Department.hasMany(models.ProductDepartment);
      };

    return Department;
};