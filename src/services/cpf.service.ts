import UtilsService from './utils.service'

export default class CpfService {
  static validate(cpf: string): boolean {
    cpf = cpf.replaceAll(/^\D/g, '')

    if (cpf.length !== 11) return false

    let mod = function (l1: string, l2: number[]) {
      let add = 0
      for (let i = 0; i < l2.length; i++) {
        add += parseInt(l1[i]) * l2[i]
      }
      add = (add * 10) % 11
      return add !== 10 ? add : 0
    }
    if (mod(cpf, [10, 9, 8, 7, 6, 5, 4, 3, 2]) !== Number(cpf[9])) {
      return false
    }
    if (mod(cpf, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]) !== Number(cpf[10])) {
      return false
    }

    return true
  }

  static generate(formatted?: boolean): string {
    let n1 = UtilsService.randNumber(0, 9)
    let n2 = UtilsService.randNumber(0, 9)
    let n3 = UtilsService.randNumber(0, 9)
    let n4 = UtilsService.randNumber(0, 9)
    let n5 = UtilsService.randNumber(0, 9)
    let n6 = UtilsService.randNumber(0, 9)
    let n7 = UtilsService.randNumber(0, 9)
    let n8 = UtilsService.randNumber(0, 9)
    let n9 = UtilsService.randNumber(0, 9)
    let d1 =
      n9 * 2 +
      n8 * 3 +
      n7 * 4 +
      n6 * 5 +
      n5 * 6 +
      n4 * 7 +
      n3 * 8 +
      n2 * 9 +
      n1 * 10
    d1 = 11 - (d1 % 11)
    if (d1 >= 10) d1 = 0

    let d2 =
      d1 * 2 +
      n9 * 3 +
      n8 * 4 +
      n7 * 5 +
      n6 * 6 +
      n5 * 7 +
      n4 * 8 +
      n3 * 9 +
      n2 * 10 +
      n1 * 11
    d2 = 11 - (d2 % 11)
    if (d2 >= 10) d2 = 0

    const generatedCpf = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`

    if (formatted) return this.format(generatedCpf)

    return generatedCpf
  }

  static format(cpf: string): string {
    if (!this.validate(cpf)) return cpf

    return cpf.replace(
      /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/,
      '$1.$2.$3-$4'
    )
  }
}
