const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  response: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Review
