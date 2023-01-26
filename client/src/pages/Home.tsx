import React, { FC, ReactElement } from 'react'
import HERO_ILLUSTRATION from "./../assets/hero.svg"
import { useNavigate } from 'react-router-dom';

const Home: FC = (): ReactElement => {
  const navigate = useNavigate()

  return (
    <main className="grid grid-cols-1 gap-12 py-8 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl md:text-left font-bold text-center mb-8">A brand new way to shopping</h2>
        <p className="text-center text-zinc-600 mb-8 md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque consequatur minus perferendis, numquam consequuntur dolor expedita aperiam est explicabo cumque ducimus sunt quasi cum iste in sapiente ex laudantium.
        </p>
        <button onClick={() => navigate("/products")} className="px-4 py-2 border-2 border-indigo-600 bg-indigo-600 text-white rounded-md flex items-center gap-4 mx-auto md:mx-0">
          <p>
            Explore Products
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
      <div className="text-center">
        <img src={HERO_ILLUSTRATION} alt="hero-image" className="w-full" />
      </div>
    </main>
  )
}

export default Home