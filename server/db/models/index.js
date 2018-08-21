const OrderItem = require('./order-item')
const Order = require('./order')
const PaymentMethod = require('./payment-method')
const Product = require('./product')
const Review = require('./review')
const Shipment = require('./shipment')
const Transaction = require('./transaction')
const User = require('./user')


// OrderItem.belongsTo(Product)
Product.hasMany(OrderItem)

// OrderItem.belongsTo(Order)
Order.hasMany(OrderItem)

// Order.belongsTo(User)
User.hasMany(Order)

// PaymentMethod.belongsTo(User)
User.hasMany(PaymentMethod)

// Review.belongsTo(Product)
Product.hasMany(Review)

// Review.belongsTo(User)
User.hasMany(Review)

Shipment.belongsTo(Order)

Shipment.belongsTo(Transaction)

Transaction.belongsTo(Order)



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
