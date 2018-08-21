const Sequelize = require('sequelize')
const db = require('../db')

const Shipment = db.define('shipment', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  addressLineOne: {
    type: Sequelize.STRING
  },
  addressLineTwo: {
    type: Sequelize.STRING
  },
  townCity: {
    type: Sequelize.STRING
  },
  stateProvince: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING
  }
})

module.exports = Shipment
