import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from "axios"
import Updatemodal from './Updatemodal';
const Project = ({project}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
        alert('these post can not be modified,it is assignment requirement, on uploaded post crud operation are appliable' )
    };
    const deleteUserData = ()=>{
        
        alert('these post can not be deleted,it is assignment requirement, on uploaded post crud operation are appliable')

    }
  return (
    <div  className='m-5 p-5 border-2 hover:border-[#fdc9ac]  bg-white inline-block rounded-md'>
   <img className="border-2 p-1 w-[360px]  rounded-md" src={project.download_url
} alt="imghere" />
        <div className=' flex flex-col content-center '>
          <div className='font-bold text-xl flex justify-center'>
            {project.author[0].toUpperCase()+project.author.substring(1)}
            </div>
        <div className='text-[20px] flex justify-center font-bold gap-5'>
          <div className='hover:text-[#fa782f]' onClick={deleteUserData}>
          <MdDelete />
            </div> 
          <div onClick={handleModalOpen} className='hover:text-[#fa782f]'>
          <MdEdit />
          </div>
        </div>
        </div>
        <div>

</div>
    </div>
  )
}
export default Project
