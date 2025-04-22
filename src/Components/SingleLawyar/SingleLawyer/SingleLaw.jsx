import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SingleLawHeader from '../SingleLawHeader/SingleLawHeader';
import SingleLawyarDetails from '../SingleLawyarDetails/SingleLawyarDetails';
import Loader from '../../Loading/Loader';
import LawyerNotFound from '../../NotFound/LawyerNotFound';

const SingleLaw = () => {
    const {id} = useParams();
    const lawId = parseInt(id)

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFoundId, setNotFoundId] = useState(false);

    useEffect(() => {
      fetch("/LawExpert.json")
      .then(res => res.json())
      .then((lawyer) => {
        const foundLaw = lawyer.find((law) => law.Id === lawId)
        
        if(foundLaw){
          setData(foundLaw);
        }
        else{
          setNotFoundId(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setNotFoundId(true);
        setLoading(false)
      })
    }, [lawId])

    if(loading){
      return <Loader />
    }
    if(notFoundId || !data){
      return(
        <LawyerNotFound id={id} />
      )
    }
    
  return (
    <div className='font-mulish  w-4/5 mx-auto'>
      <SingleLawHeader />
      <SingleLawyarDetails data={data} />
      {/* <h1>{data.Name}</h1> */}
    </div>
  )
}

export default SingleLaw
