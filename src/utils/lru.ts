export default class MiniLru {
  private cache: Map<any, any>

  private capacity: number

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error('Cache capacity must be a positive number')
    }
    this.cache = new Map()
    this.capacity = capacity
  }

  get(key: any): any | null {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    }
    return null
  }

  set(key: any, value: any): void {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }

  has(key: any): boolean {
    return this.cache.has(key)
  }
}
