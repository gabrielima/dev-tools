import ISubMenuItem from './ISubMenuItem'

export default interface IMenuItem {
  label: string
  active: boolean
  subMenu?: ISubMenuItem[]
}
