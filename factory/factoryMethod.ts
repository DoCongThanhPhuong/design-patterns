class Car {
  private name: string
  private doors: number
  private price: number
  private customerInfo: object
  constructor(
    customerInfo: object,
    name: string = 'Ford Ranger 2023',
    doors: number = 4,
    price: number = 100
  ) {
    this.name = name
    this.doors = doors
    this.price = price
    this.customerInfo = customerInfo
  }
}

class LogisticsService2<T> {
  transportClass: new (customerInfo: object, name: string) => T

  constructor(transportClass: new (customerInfo: object, name: string) => T) {
    this.transportClass = transportClass
  }

  getTransport = (customerInfo: object, name: string): T => {
    return new this.transportClass(customerInfo, name)
  }
}

class CarService extends LogisticsService2<Car> {
  constructor() {
    super(Car)
  }
}

const carService = new CarService()
console.log(
  'Car: ',
  carService.getTransport({ name: 'Tucker', age: 20 }, 'Mazda')
)

class Truck {
  private name: string
  private doors: number
  private price: number
  private customerInfo: object
  constructor(
    customerInfo: object,
    name: string = 'Truck',
    doors: number = 2,
    price: number = 100
  ) {
    this.name = name
    this.doors = doors
    this.price = price
    this.customerInfo = customerInfo
  }
}

class TruckService extends LogisticsService2<Truck> {
  constructor() {
    super(Truck)
  }
}

const truckService = new TruckService()
console.log(
  'Truck: ',
  truckService.getTransport({ name: 'Tucker', age: 20 }, 'Kia')
)
