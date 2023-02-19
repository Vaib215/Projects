import React from 'react'

const NavList = ({ children, active,icon}) => {
  return (
    <li>
      <button className={`flex items-center gap-4 w-full p-[10px] text-left ${active ? 'font-medium rounded-xl bg-gray-300 bg-opacity-10':''}`}>
        {icon && (icon)}
        {children}
      </button>
    </li>
  )
}

export default NavList