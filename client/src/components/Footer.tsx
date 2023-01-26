import React, { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = (): ReactElement => {
  return (
    <footer>
      <div className="px-4 sm:px-8 md:px-12 xl:px-0 max-w-7xl mx-auto py-8">
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
          <h1 className="font-bold uppercase text-xl">
            <Link to="/">🛍️ CommerCafe</Link>
          </h1>
          <p className='text-center'>
            All rights reserved &copy; {new Date().getFullYear()} | <a href="https://github.com/vipul-vaishnav/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Vipul Vaishnav</a> CommerCafe Co.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer