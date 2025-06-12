import React from 'react'
import ReachThereQuickly from './ReachThereQuickly'
import Listingdiudaman from './Listingdiudaman'
import HighlyAffordable from './HighlyAffordable'
import CardRow from './CardRow'
import MostVisited from './MostVisited'
import Highrated from './Highrated'
import Cantfind from './Cantfind'
import PartnerCard from './PartnerCard'
import ExploreCuratedCollections from './Explorecuratedcollections'

function Home() {
  return (
    <>
    <ReachThereQuickly />
      <ExploreCuratedCollections />
      <Listingdiudaman />
      <HighlyAffordable />
      <CardRow />
      <MostVisited  />
      <CardRow />
      <Highrated />
      <CardRow />
      <Cantfind />
      <PartnerCard />
    </>
   
  )
}

export default Home