module.exports = (sequelize, DataTypes) => {
    const OfficialCategory = sequelize.define('OfficialCategory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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

    return OfficialCategory;
};