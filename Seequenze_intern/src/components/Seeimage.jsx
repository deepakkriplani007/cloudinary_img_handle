import React, { useEffect, useRef, useState } from 'react'

import { IoMdClose } from "react-icons/io";
const Seeimage = ({handleImg,modaOpen,setSeeImg,seeImg}) => {
  const [con, setCon] = useState(modaOpen)


 
  console.log(con.imgpath)
  return (
    <div>
        <div className="absolute top-20 right-5 justify-center ">
        <button onClick={handleImg} className='text-4xl hover:text-[#d56b01] text-gray-400' ><IoMdClose /></button>
         </div>
    <div className="flex justify-center">
         <div className="bg-white rounded-lg p-1 w-1/2 min-[955px]:p-5 sm:p-3">
        
      <div className="">
        <div className=' '>
        <img   src={con.imgpath} alt="" />
        </div>
      </div>
    </div>
    </div>
</div>
  )
}

export default Seeimage

{/* <div className="bg-white rounded-lg p-5">
        <button onClick={handleImg} className='text-2xl hover:text-[#d56b01] ' ><IoMdClose /></button>
        <div className="flex justify-end  ">
         </div>
      <div className="mt-5">
        <div >
        <img  className='' src={Img} alt="" />
        </div>
      </div>
    </div> */}
    // <button onClick={handleImg} className='justify-self-start text-2xl text-[#fff] hover:text-[#d56b01] ' ><IoMdClose /></button>
    