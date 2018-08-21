const Sequelize = require('sequelize')
const db = require('../db')

const Tea = db.define('tea', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  leaf: {
    type: Sequelize.STRING,
    allowNull: false
  },
  smallPrice: {
    type: Sequelize.DECIMAL(12, 2),
    allowNull: false
  },
  mediumPrice: {
    type: Sequelize.DECIMAL(12, 2),
    allowNull: false
  },
  largePrice: {
    type: Sequelize.DECIMAL(12, 2),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Tea
