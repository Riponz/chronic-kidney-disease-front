import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <div className='bg-[#97E1FE]'>
    <Navbar/>
      <Home/>
    </div>
    </>
  )
}

export default App
