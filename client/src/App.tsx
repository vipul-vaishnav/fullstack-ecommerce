import React, { FC, ReactElement, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Overlay from './components/Overlay'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

const App: FC = (): ReactElement => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add('light')
    }
  }, [])

  const handleModeChange = (): void => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  };

  return (
    <div className="font-main text-base w-full min-h-screen dark:bg-zinc-900 dark:text-white bg-white text-zinc-900 transition-all duration-300">
      <div className="px-4 sm:px-8 md:px-12 xl:px-0 max-w-7xl mx-auto">
        <Navbar handleModeChange={handleModeChange} showSideNav={setShowSideNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<>Cart</>} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </div>
      <Footer />
      {showSideNav && <>
        <SideNav hideSideNav={setShowSideNav} handleModeChange={handleModeChange} />
        <Overlay hideSideNav={setShowSideNav} />
      </>}
    </div>
  )
}

export default App