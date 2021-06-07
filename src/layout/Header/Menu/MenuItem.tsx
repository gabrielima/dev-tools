import IMenuItem from "./IMenuItem"
import SubMenu from "./SubMenu"

type MenuItemProps = {
  item: IMenuItem
}

const MenuItem = ({ item }: MenuItemProps) => {
  const textClass = item.active ? 'text-gray-900' : 'text-gray-500'
  const arrowDownClass = item.active ? 'text-gray-600' : 'text-gray-400'

  if (!item.subMenu) {
    return (
      <a href="#" className={textClass + " text-base font-medium hover:text-gray-900"}>
        {item.label}
      </a>
    )
  }

  return (
    <div className="relative">
      <button type="button" className={textClass + " group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"} aria-expanded={item.subMenu && item.active}>
        <span>{item.label}</span>

        <svg className={(arrowDownClass) + " ml-2 h-5 w-5 group-hover:text-gray-500"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <SubMenu item={item} />
    </div>
  )
}

export default MenuItem