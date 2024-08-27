// const blackFridayPrice = (originPrice: number) => {
//   return originPrice * 0.7
// }

// const preOrderPrice = (originPrice: number) => {
//   return originPrice * 0.8
// }

// const defaultPrice = (originPrice: number) => {
//   return originPrice * 0.9
// }

// const getPriceStrategies = {
//   blackFriday: blackFridayPrice,
//   preOrder: preOrderPrice,
//   default: defaultPrice
// } as const

// const getPrice = (
//   originPrice: number,
//   promotionType: keyof typeof getPriceStrategies
// ) => {
//   return getPriceStrategies[promotionType](originPrice)
// }

// console.log(getPrice(100, 'default'))

enum PromotionType {
  BlackFriday = 'blackFriday',
  PreOrder = 'preOrder',
  Default = 'default'
}

const blackFridayPrice = (originPrice: number) => {
  return originPrice * 0.7
}

const preOrderPrice = (originPrice: number) => {
  return originPrice * 0.8
}

const defaultPrice = (originPrice: number) => {
  return originPrice * 0.9
}

const getPriceStrategies = {
  [PromotionType.BlackFriday]: blackFridayPrice,
  [PromotionType.PreOrder]: preOrderPrice,
  [PromotionType.Default]: defaultPrice
}

const getPrice = (originPrice: number, promotionType: PromotionType) => {
  return getPriceStrategies[promotionType](originPrice)
}

console.log(getPrice(100, PromotionType.BlackFriday))
