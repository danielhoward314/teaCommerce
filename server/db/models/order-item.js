const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderItem', {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    priceTotal: {
      type: Sequelize.DECIMAL(12, 2),
      allowNull: false
    }
})


module.exports = OrderItem
