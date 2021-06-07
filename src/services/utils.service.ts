export default class UtilsService {
  static randNumber(min = 0, max = Number.MAX_SAFE_INTEGER): number {
    return Math.round(Math.random() * max) + min
  }
}
