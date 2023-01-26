import React, { FC, ReactElement } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { INavbar } from './interfaces/INavbar'

const NAV_DATA = [
  { label: "Products", route: "/products" },
  { label: "Cart", route: "/cart" },
]

const Navbar: FC<INavbar> = (props): ReactElement => {
  const { handleModeChange, showSideNav } = props
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between py-6">
      <button className="md:hidden" onClick={() => showSideNav(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className="flex items-center justify-start gap-6 lg:gap-12">
        <h1 className="font-bold uppercase text-xl">
          <Link to="/">🛍️ CommerCafe</Link>
        </h1>
        <ul className="hidden md:flex items-center justify-start gap-4 lg:gap-6">
          {NAV_DATA.map((item) => {
            return <li key={uuidv4()}>
              <Link to={item.route}>{item.label}</Link>
            </li>
          })}
        </ul>
      </div>
      <button className="md:hidden" onClick={() => navigate("/cart")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </button>
      <div className="hidden md:flex items-center justify-start gap-4">
        <button onClick={handleModeChange}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden dark:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
        <button className="px-3 py-2" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="px-4 py-2 border-2 border-indigo-600 bg-indigo-600 text-white rounded-md" onClick={() => navigate("/register")}>
          Sign up
        </button>
      </div>
    </header>
  )
}

export default Navbar