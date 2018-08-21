const Sequelize = require('sequelize')
const db = require('../db')

const PaymentMethod = db.define('paymentMethod', {
  cardType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cardNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expirationDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  csv: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  middleInitial: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addressLineOne: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addressLineTwo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  townCity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stateProvince: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = PaymentMethod
