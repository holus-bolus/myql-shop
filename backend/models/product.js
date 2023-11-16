const sequilize = require('../database.js');
const {DataTypes} = require("sequelize");

const Product = sequilize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});


module.exports = Product;