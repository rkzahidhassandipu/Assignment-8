import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import CountSection from '../../Components/Counter/CountSection'
import { useLoaderData } from 'react-router'
import LawyerSection from '../../Components/Lawyer/LawyerSection'
import Loader from '../../Components/Loading/Loader'

const Home = () => {
  const [loading, setLoading] = useState(true); 
  const LawExpert = useLoaderData();

  useEffect(() => {
    if (LawExpert) {
      setLoading(false);
    }
  }, [LawExpert]);
  return (
    <div className='font-mulish'>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <Banner />
          <LawyerSection LawExpert={LawExpert} />
          <CountSection />
        </>
      )}
    </div>
  )
}

export default Home
