import { STORAGE_PROPERTY_NAME } from "./constants.js"

class Storage {
  static saveToStorage(key, value) {
    if (typeof value === "string" || typeof value === "number") {
      localStorage.setItem(key, value)
    } else {
      // optional
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  static getScoreFromStorage() {
    return localStorage.getItem(STORAGE_PROPERTY_NAME) || 0
  }

  static updateScoreIdNeeded(newScore) {
    const oldScore = Storage.getScoreFromStorage()
    if (newScore > oldScore) {
      Storage.saveToStorage(STORAGE_PROPERTY_NAME, newScore)
    }
  }

  static clearStorage() {
    localStorage.clear()
  }
}
export default Storage;
