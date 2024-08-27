class Discount {
  calc(value: number): number {
    return value * 0.9
  }
}

class Shipping {
  calc(): number {
    return 5
  }
}

class Fees {
  calc(value: number): number {
    return value * 1.05
  }
}

class ShopeeFacadePattern {
  private discount: Discount
  private shipping: Shipping
  private fees: Fees
  constructor() {
    this.discount = new Discount()
    this.shipping = new Shipping()
    this.fees = new Fees()
  }
  calc(price: number): number {
    price = this.discount.calc(price)
    price = this.fees.calc(price)
    price += this.shipping.calc()
    return price
  }
}

function buy(price: number): void {
  const shopee: ShopeeFacadePattern = new ShopeeFacadePattern()
  console.log('Price: ', shopee.calc(price))
}

buy(100)
