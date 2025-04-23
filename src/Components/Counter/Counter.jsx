import React, { Suspense, use } from 'react'
import Loader from '../Loading/Loader'
import Count from './Count'

const countData = fetch("/count.json").then(data => data.json())


const Counter = () => {
  const counts = use(countData)
  return (
    <div className='grid grid-cols-4 gap-8'>
      <Suspense fallback={<Loader />}>
        {
          counts.map((count, index) => <Count key={index} count={count} />)
        }
        {/* <Count countData={countData} /> */}
      </Suspense>
    </div>
  )
}

export default Counter
