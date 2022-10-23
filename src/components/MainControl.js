import React from 'react'
import PartOne from './PartOne'
import PartThree from './PartThree'
import PartTwo from './PartTwo'

function MainControl() {
  return (
    <div className='w-[70%] mr-[10px]'>
      <PartOne/>
      <PartTwo/>
      <PartThree/>
    </div>
  )
}

export default MainControl