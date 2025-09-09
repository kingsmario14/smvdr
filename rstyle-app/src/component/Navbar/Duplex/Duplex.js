import React from 'react'
import './Duplex.css'
import duplex1j from '../../../asset/duplex1j.jpg'
// import duplex5 from '../../../asset/duplex5.jpg'
import interior from '../../../asset/interior.jpg'

const Duplex = () => {
  return (
    <div className ='dduplex'>
      <div className='dduplex1'>
         <img src={duplex1j} alt="" />
      </div>
      {/* <div className='ddupplex'>
         <img src={duplex5} alt="" />
      </div> */}
      <div className='duplex3'>
         <img src={interior} alt="" />
      </div>
    </div>
  )
}

export default Duplex