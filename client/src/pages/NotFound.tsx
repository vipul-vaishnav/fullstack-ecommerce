import React, { FC, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound: FC = (): ReactElement => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center text-center gap-8 py-12 max-w-md mx-auto">
      <h1 className="text-3xl font-extrabold">Oops! 404 Page Not Found</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, atque libero repellat beatae illo recusandae incidunt, impedit nemo reiciendis commodi optio distinctio nulla nihil officia!
      </p>

      <button className="px-4 py-2 border-2 border-indigo-600 bg-indigo-600 text-white rounded-md" onClick={() => {
        navigate(-1)
      }}>
        Go Back
      </button>
    </div >
  )
}

export default NotFound