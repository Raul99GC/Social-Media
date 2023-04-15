import React from 'react'
import { PorfileSide } from './components/'

export const Home = () => {
  return (
    <div className='relative grid grid-cols-[18rem,_auto,_20rem] gap-4'>
      <PorfileSide/>
      <div className="">Posts</div>
      <div className="">RightSide</div>
    </div>
  )
}
