import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import HighlyAffordable from './component/HighlyAffordable'
import AboutUs from './component/AboutUs'

function App() {
  

  return (
    <>
      <Header/>
      <HighlyAffordable/>
     

      <AboutUs/>
    </>
  )
}


export default App
