export default class CpfService {
  static validate(cpf: string): boolean {
    cpf = cpf.replaceAll(/^D/g, '')

    if (cpf.length !== 11) return false

    return true
  }

  static generate(formatted?: boolean): string {
    let generatedCpf = '00000000003'

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
