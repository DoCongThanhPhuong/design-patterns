class FifaOnlinePlayer {
  name: string
  team: string
  position: string
  goals: number

  constructor(name: string, team: string, position: string, goals: number) {
    this.name = name
    this.team = team
    this.position = position
    this.goals = goals
  }

  score(): void {
    this.goals++
  }

  clone(): FifaOnlinePlayer {
    return new FifaOnlinePlayer(this.name, this.team, this.position, this.goals)
  }
}

// Create a new FifaOnlinePlayer prototype
const prototypePattern = new FifaOnlinePlayer('CR7', 'Real Madrid', 'FW', 0)
const cr7 = prototypePattern.clone()
const m10 = prototypePattern.clone()
m10.name = 'M10'
m10.team = 'Barca'

cr7.score()
console.log(`${cr7.name} has recored ${cr7.goals} this season`)

m10.score()
console.log(`${m10.name} has recored ${m10.goals} this season`)
