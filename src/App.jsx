import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import HighlyAffordable from './component/HighlyAffordable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HighlyAffordable/>
     

    </>
  )
}


export default App
