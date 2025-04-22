import React from 'react'
import Banner from '../../Components/Banner/Banner'
import CountSection from '../../Components/Counter/CountSection'
import { useLoaderData } from 'react-router'
import LawyerSection from '../../Components/Lawyer/LawyerSection'

const Home = () => {
  const LawExpert = useLoaderData();
  return (
    <div className='font-mulish'>
      <Banner />
      <LawyerSection LawExpert={LawExpert} />
      <CountSection />
    </div>
  )
}

export default Home
