import React from 'react'
import LinkComponent from '../components/LinkComponent'

function LeftLayout() {
  return (
    <div className='w-[20%] text-[#d3d3d3] hover:text-[#c264d4]  '>
      <h1 className=' uppercase text-center'>Homie</h1>
      <div className='relative bg-[#73727224]  rounded-2xl'>
        <div className='absolute top-[-60px] right-[35%]'>

        <div className='w-[80px] h-[80px] rounded-full bg-slate-400 m-auto '></div>
        <p className='text-center'>name</p>
        </div>
        <div className=' mt-[55px] '>
        <LinkComponent/>
       
        </div>
      </div>
      </div>
  )
}

export default LeftLayout