// const serviceLogistics = (load: number) => {
//   switch (load) {
//     case 10:
//       return {
//         name: 'Truck 10',
//         doors: 6,
//         price: 100
//       }
//     case 20:
//       return {
//         name: 'Truck 20',
//         doors: 8,
//         price: 150
//       }
//     case 30:
//       return {
//         name: 'Truck 30',
//         doors: 10,
//         price: 200
//       }
//   }
// }

// console.log(serviceLogistics(20))

class LogisticsService {
  private name: string
  private doors: number
  private price: number
  constructor(name: string, doors: number, price: number) {
    this.name = name
    this.doors = doors
    this.price = price
  }

  static getTransport(load: number) {
    switch (load) {
      case 10:
        return new LogisticsService('Truck 10', 6, 100)
      case 20:
        return new LogisticsService('Truck 20', 8, 150)
      case 30:
        return new LogisticsService('Truck 30', 10, 200)
      default:
        return new LogisticsService('Truck 40', 12, 300)
    }
  }
}

console.log(LogisticsService.getTransport(40))
