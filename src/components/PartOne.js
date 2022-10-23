import React from 'react'
import Device from './Device'

function PartOne() {
  return (
    <div className='flex text-white  '>
      {/* evming */}
      <div  className='w-[40%]' >

      <p className='text-[#e674e2]' >Good Evening <span className='text-white'>AAK</span></p>
      <div className=' rounded-2xl w-[90%] relative  mt-[15px]'>
        <img src="./gamerbedroom.jpg" alt="" className='w-[100%] rounded-2xl' />
        <div className='absolute bg-[#00000067] bottom-0 right-0 left-0 py-[7px] pl-[10px]'>
          <select name="" id="" className='bg-[#ffffff00] border-0 focus:border-0 hover:border-0'>
            <option value="Bed Room" className=' bg-black text-black' > Bed Room</option>
          </select>
        </div>
      </div>
      </div>
      {/* devices */}
      <div>
        <Device/>
      </div>

    </div>
  )
}

export default PartOne