import Logo from "./Menu/Logo"
import Menu from "./Menu/Menu"
import MenuToggler from "./Menu/MenuToggler"
import SideMenu from "./Menu/SideMenu"
import MenuItems from "./Menu/menuItems"

const Header = () => (
  <div className="relative bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Logo />
        </div>

        <MenuToggler />
        <Menu menuItems={MenuItems} />

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </a>
          <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign up
          </a>
        </div>
      </div>
    </div>

    <SideMenu menuItems={MenuItems} />
  </div>
)

export default Header