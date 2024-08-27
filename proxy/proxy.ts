class Leader {
  receiveRequest(offer: string): void {
    console.log(`Boss said OK:: ${offer}`)
  }
}

class Secretary {
  leader: Leader
  constructor() {
    this.leader = new Leader()
  }

  receiveRequest(offer: string): void {
    this.leader.receiveRequest(offer)
  }
}

class Developer {
  offer: string
  constructor(offer: string) {
    this.offer = offer
  }

  applyFor(target: Secretary): void {
    target.receiveRequest(this.offer)
  }
}

const dev = new Developer('Tucker salary up to 5000 USD')
dev.applyFor(new Secretary())
