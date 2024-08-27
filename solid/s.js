class Order {
  constructor(userId) {
    this.userId = userId
    this.timeOrder = Date.now()
    this.products = []
  }
}

class OrderManager {
  constructor() {
    this.order = null
  }

  createOrder(userId) {
    this.order = new Order(userId)
    return this.order
  }

  addProduct(product) {
    this.order.products.push(product)
  }

  getOrder() {
    return this.order
  }

  isValid() {
    return !!this.order.products.length
  }

  sendMail() {
    if (this.isValid()) {
      this.sendMailOrder = new SendMailOrder()
      return this.sendMailOrder.sendMail(this.order)
    }

    return -1
  }
}

class SendMailOrder {
  sendMail(order) {
    console.log(`Order sent to email: ${order.userId}`)
    return 1
  }
}

const orderManager = new OrderManager()
orderManager.createOrder('userId-10001')
orderManager.addProduct({ id: 10, quantity: 100, price: 1000 })
orderManager.addProduct({ id: 20, quantity: 120, price: 1500 })
console.log('Order details:', orderManager.getOrder())
orderManager.sendMail()
