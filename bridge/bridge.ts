class PaymentProcess {
  payment(amount: number): void {}
}

class VisaPaymentProcess extends PaymentProcess {
  cardNumber: string
  cvv: string

  constructor(cardNumber: string, cvv: string) {
    super()
    this.cardNumber = cardNumber
    this.cvv = cvv
  }

  payment(amount: number): void {
    console.log(
      `Payment: ${amount} USD with visa card number: ${this.cardNumber}`
    )
  }
}

class MomoPaymentProcess extends PaymentProcess {
  phoneNumber: string

  constructor(phoneNumber: string) {
    super()
    this.phoneNumber = phoneNumber
  }

  payment(amount: number): void {
    console.log(`Payment: ${amount} USD with Momo: ${this.phoneNumber}`)
  }
}

class MemberRegistration {
  paymentProcessor: PaymentProcess

  constructor(paymentProcessor: PaymentProcess) {
    this.paymentProcessor = paymentProcessor
  }

  register() {
    const amount = 100
    this.paymentProcessor.payment(amount)
    console.log(`Registration successful for ${amount} USD`)
  }
}

const visaPaymentProcessor = new VisaPaymentProcess('123.456.xxx', '123')
const membershipVisa = new MemberRegistration(visaPaymentProcessor)
membershipVisa.register()

const momoPaymentProcessor = new MomoPaymentProcess('0123456789')
const membershipMomo = new MemberRegistration(momoPaymentProcessor)
membershipMomo.register()
