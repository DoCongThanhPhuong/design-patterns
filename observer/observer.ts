class Observer {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  updateStatus(location: string): void {
    this.goToHelp(location)
  }

  goToHelp(location: string): void {
    console.log(`${this.name}::PING::${location}`)
  }
}

class Subject {
  observerList: Observer[]
  constructor() {
    this.observerList = []
  }
  addObserver(observer: Observer): void {
    this.observerList.push(observer)
  }

  notify(location: string): void {
    this.observerList.forEach((observer) => observer.updateStatus(location))
  }
}

const subject = new Subject()

const draven = new Observer('Draven')
const lucian = new Observer('Lucian')
const taric = new Observer('Taric')

subject.addObserver(draven)
subject.addObserver(lucian)
subject.addObserver(taric)

subject.notify('Baron')
