import IMenuItem from "./IMenuItem"
import MenuItem from "./MenuItem"

type MenuProps = {
  menuItems: IMenuItem[]
}

const Menu = ({ menuItems }: MenuProps) => (
  <nav className="hidden md:flex space-x-10">
    {menuItems.map(item => (
      <MenuItem item={item} />
    ))}
  </nav>
)

export default Menu