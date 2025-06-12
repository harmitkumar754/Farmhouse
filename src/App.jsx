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
import ReachThereQuickly from './component/ReachThereQuickly'
import Explorecuratedcollections from './component/Explorecuratedcollections'
import Listingdiudaman from './component/Listingdiudaman'
import CardRow from './component/CardRow'
import MostVisited from './component/MostVisited'
import Highrated from './component/Highrated'

function App() {


  return (
    <>
      <Header />
      <ReachThereQuickly />
      <Explorecuratedcollections />
      <Listingdiudaman />
      <HighlyAffordable />
      <CardRow />
      <MostVisited  />
      <CardRow />
      <Highrated />
      <CardRow />
      {/* <AboutUs /> */}
      {/* <Viewfarm /> */}
      <Cantfind />
      <PartnerCard />
      {/* <AppDownloadSection /> */}
      <Footer />
    </>
  )
}


export default App
