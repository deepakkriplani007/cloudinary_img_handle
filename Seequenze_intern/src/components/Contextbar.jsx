import React from 'react'

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from "axios"
const Contextbar = ({setModaOpen,modaOpen,projects,setProjects,handleModaOpen}) => {
    function deleteCard(){
        const newData = projects.filter((obj)=>obj.imgid!==modaOpen.imgid)
        setProjects(newData);
    }
  const deleteUserData = async()=>{
  
    const res = await axios.delete(`http://localhost:5000/delete/${modaOpen.imgid}`)
    if(res.status == 200){
        console.log('successfull deleted ')
          deleteCard();
        // window.location.reload();
    }else{
      console.log(modaOpen.imgid)
        alert("error")
    }
}
  return (
    <div className='text-[20px] bg-[#fdc9ac] rounded m-1 shadow-black shadow-sm flex flex-col justify-center font-bold ' style={{left:modaOpen?.position.x}}>
          <div className='flex content-center items-center gap-1 p-2 hover:text-[#b55728]' onClick={deleteUserData}>
            <div className=''>

          <MdDelete />
            </div>
            <span>
            Delete
            </span> 
          
            </div> 
          <div onClick={handleModaOpen} className='flex content-center items-center gap-1  p-2 hover:text-[#b55728]'>
          <span className=''>
            <MdEdit />
            </span>
          <span>Edit</span>
          </div>
        </div>
  )
}

export default Contextbar