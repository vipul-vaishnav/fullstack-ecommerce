import React, { FC, ReactElement } from 'react'
import { IOverlay } from './interfaces/IOverlay'

const Overlay: FC<IOverlay> = (props): ReactElement => {
  const { hideSideNav } = props
  return (
    <div className="md:hidden fixed w-full h-screen top-0 left-0 bg-zinc-900 bg-opacity-20 z-10" onClick={() => hideSideNav(false)}></div>
  )
}

export default Overlay