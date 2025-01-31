class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)

    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds')
    }

    return this.items[pos]
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList')
    }

    return Math.max(...this.items)
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList')
    }

    return Math.min(...this.items)
  }

  sum() {
    if (!this.length) {
      return 0
    }

    return this.items.reduce((a, b) => a + b)
  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList')
    }

    return this.sum() / this.items.length
  }
}

module.exports = SortedList