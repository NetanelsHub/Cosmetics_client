import React,  from 'react'
const Carousel = React.lazy(() => import('../component/common/Carousel'));
// import DoorAnimation from '../component/common/DoorAnimation'


export default function Home() {


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>

    </>
  )
}
