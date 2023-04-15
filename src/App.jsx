import React from 'react'
import { Home } from './pages/home/'

function App () {
  const bluerStyle = 'absolute w-[22rem] h-56 rounded-[50%] bg-[#a6ddf0] blur-3xl'

  return (
    <div className="overflow-hidden text-colors-black bg-[#f3f3f3] p-4">
      <div className={`${bluerStyle} top-[-18%] right-0`}></div>
      <div className={`${bluerStyle} top-[36%] -left-32`}></div>

      <Home/>
    </div>
  )
}

export default App
