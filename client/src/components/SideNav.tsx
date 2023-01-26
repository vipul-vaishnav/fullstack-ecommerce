import React, { FC, ReactElement } from 'react'
import { ISideNav } from './interfaces/ISideNav'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid"

const SIDE_NAV_DATA = [
  { label: "Home", route: "/" },
  { label: "Products", route: "/products" },
  { label: "Login", route: "/login" },
  { label: "Sign up", route: "/register", viewAsButton: true },
]

const SideNav: FC<ISideNav> = (props): ReactElement => {
  const { hideSideNav, handleModeChange } = props

  return (
    <div className="md:hidden fixed h-screen top-0 left-0 bg-white dark:bg-zinc-900 w-64 z-20 shadow-2xl dark:border-r-zinc-700 dark:border-r">
      <div className="p-6 py-7">
        <button onClick={() => hideSideNav(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="mt-6">
          <ul className="flex flex-col gap-3">
            {SIDE_NAV_DATA.map((item) => {
              return <li key={uuidv4()}>
                <Link to={item.route} className={item.viewAsButton ? "bg-indigo-600 w-full block rounded-md py-2 border-2 border-indigo-600 text-white text-center mt-2" : ""}>{item.label}</Link>
              </li>
            })}
          </ul>
        </div>
        <button onClick={handleModeChange} className="mt-6 flex items-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden dark:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          {<span className="hidden dark:block">Light</span>}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          <span className="dark:hidden">Dark</span>
        </button>
      </div>
    </div>
  )
}

export default SideNav