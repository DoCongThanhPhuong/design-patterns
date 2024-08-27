class MomoPayment {
  amount: number
  cardNumber: string
  pin: string
  cvv: string

  constructor(amount: number, cardNumber: string, pin: string, cvv: string) {
    this.amount = amount
    this.cardNumber = cardNumber
    this.pin = pin
    this.cvv = cvv
  }
}

class VisaPayment {
  cardNumber: string
  amount: number
  pin: string
  cvv: string

  constructor(cardNumber: string, amount: number, pin: string, cvv: string) {
    this.cardNumber = cardNumber
    this.amount = amount
    this.pin = pin
    this.cvv = cvv
  }

  pay(): void {
    console.log(`Paid ${this.amount} USD with Visa card: ${this.cardNumber}`)
  }
}

class MomoPaymentAdapter {
  private momoPayment: MomoPayment

  constructor(momoPayment: MomoPayment) {
    this.momoPayment = momoPayment
  }

  payWithVisa(): void {
    const visaPayment = this.convertToVisaPayment()
    visaPayment.pay()
  }

  private convertToVisaPayment(): VisaPayment {
    const conversionRate = 23000
    const visaAmount = this.momoPayment.amount / conversionRate

    return new VisaPayment(
      this.momoPayment.cardNumber,
      visaAmount,
      this.momoPayment.pin,
      this.momoPayment.cvv
    )
  }
}

// Example usage
const momoPayment = new MomoPayment(2300000, '1234567890123456', '1234', '123')
const momoAdapter = new MomoPaymentAdapter(momoPayment)
momoAdapter.payWithVisa()
