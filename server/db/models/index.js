const OrderItem = require('./order-item')
const Order = require('./order')
const PaymentMethod = require('./payment-method')
const Product = require('./product')
const Review = require('./review')
const Shipment = require('./shipment')
const Transaction = require('./transaction')
const User = require('./user')

// ASSOCIATIONS

Order.hasMany(OrderItem)

Product.hasMany(OrderItem)
Product.hasMany(Review)

Shipment.belongsTo(Order)
Shipment.belongsTo(Transaction)

Transaction.belongsTo(Order)

User.hasMany(Order)
User.hasMany(PaymentMethod)
User.hasMany(Review)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 */

module.exports = {
  OrderItem,
  Order,
  PaymentMethod,
  Product,
  Review,
  Shipment,
  Transaction,
  User
}
