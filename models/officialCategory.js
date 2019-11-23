module.exports = (sequelize, DataTypes) => {
    const OfficialCategory = sequelize.define('OfficialCategory', {
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