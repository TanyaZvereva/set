export class Team {
  constructor() {
    this.members = new Set();
  }
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже существует')
    } else {
      this.members.add(character)
    }
  }
  addAll(...characters) {
    for (let i = 0; i < characters.length; i++) {
      this.members.add(characters[i])
    }
  }
  toArray() {
    return Array.from(this.members)
  }
}

