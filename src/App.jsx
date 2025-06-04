import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import HighlyAffordable from './component/HighlyAffordable'
import AboutUs from './component/AboutUs'
import Viewfarm from './component/Viewfarm'
import Cantfind from './component/Cantfind'
import PartnerCard from './component/PartnerCard'
import Footer from './component/Footer'
import AppDownloadSection from './component/AppDownloadSection'

function App() {


  return (
    <>
      <Header />
      <HighlyAffordable />
      <AboutUs />
      <Viewfarm />
      <Cantfind />
      <PartnerCard />
      <AppDownloadSection />
      <Footer />
    </>
  )
}


export default App
