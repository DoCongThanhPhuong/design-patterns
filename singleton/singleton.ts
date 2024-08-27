class RoundRobin {
  private static instance: RoundRobin | null = null
  private servers: string[]
  private index: number

  private constructor() {
    this.servers = []
    this.index = 0
  }

  public static getInstance(): RoundRobin {
    if (!RoundRobin.instance) {
      RoundRobin.instance = new RoundRobin()
    }
    return RoundRobin.instance
  }

  public addServer(server: string): void {
    this.servers.push(server)
  }

  public getNextServer(): string {
    if (!this.servers.length) throw new Error('No servers available')
    const server = this.servers[this.index]
    this.index = (this.index + 1) % this.servers.length
    return server
  }
}

const loadBalancer1 = RoundRobin.getInstance()
const loadBalancer2 = RoundRobin.getInstance()
console.log('Compare:', loadBalancer1 === loadBalancer2)
loadBalancer1.addServer('Server 01')
loadBalancer1.addServer('Server 02')
loadBalancer1.addServer('Server 03')
console.log(loadBalancer1.getNextServer())
console.log(loadBalancer1.getNextServer())
console.log(loadBalancer1.getNextServer())
console.log(loadBalancer1.getNextServer())
