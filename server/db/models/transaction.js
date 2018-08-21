const Sequelize = require('sequelize');
const db = require('../db');

const Transaction = db.define('transaction', {
    subTotal: {
      type: Sequelize.FLOAT,
  },
  total: {
      type: Sequelize.FLOAT,
  },
  tax: {
      type: Sequelize.FLOAT,
  }
})

module.exports = Transaction;
