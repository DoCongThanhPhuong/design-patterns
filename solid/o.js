class Socket {
  constructor() {
    this.devices = []
  }

  addDevice(device) {
    this.devices.push(device)
  }

  activate() {
    console.log('Socket activated:')
    this.devices.forEach((device) => device.connect())
  }
}

class Fan {
  connect() {
    console.log('Fan connected')
  }
}

class Tivi {
  connect() {
    console.log('Tivi connected')
  }
}

class Fridge {
  connect() {
    console.log('Fridge connected')
  }
}

class WashingMachine {
  connect() {
    console.log('Washing machine connected')
  }
}

const socket = new Socket()
socket.addDevice(new Fan())
socket.addDevice(new Tivi())
socket.addDevice(new WashingMachine())
socket.activate()
