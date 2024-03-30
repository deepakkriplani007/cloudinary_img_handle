import React, { useState } from 'react'
import axios from "axios"
import Updatemodal from './Updatemodal';

const Project = ({project,setModaOpen,modaOpen,handleImg}) => {
const handleimg=(e) =>{
  setModaOpen({visible:false ,position:{x:e.clientX+'px',y:scroll+e.clientY+'px'},imgid:project.imgid,name:project.name,imgpath:project.imgpath});
  handleImg()
}
  const handlecontecxt=(e) => {
    e.preventDefault();
    
    let scroll = window.scrollY;
    console.log(scroll)
    console.log(project.imgid)
    setModaOpen({visible:true ,position:{x:e.clientX+'px',y:scroll+e.clientY+'px'},imgid:project.imgid,name:project.name,imgpath:project.imgpath});
    console.log(modaOpen)
    
    console.log("here")
  }

  return (
    <div  onContextMenu={handlecontecxt}  >
      <div className='flex justify-center content-center h-[250px] w-[360px] border-4 border-black rounded-md bg-black  hover:shadow-2xl hover:shadow-[#000] transition-shadow hover:border-2'>

       <img onClick={handleimg} className=" object-contain max-w-full  rounded-md  scale-87  " src={project.imgpath} alt="imghere" />
      </div>
      
{/* {modalopen && ( <Updatemodal onClose={handleModalclose} name={project.name} id={project.imgid}/>)} */}
{

}
    </div>
  )
}
export default Project
{/* <div className=' flex flex-col content-center '>
     <img className="border-2 object-contain p-1  rounded-md" src={project.imgpath} alt="imghere" />
          <div className='font-bold text-xl flex justify-center'>
            {project.name[0].toUpperCase()+project.name.substring(1)}
            
            </div>

        </div> */}
        // border-[#fdc9ac]