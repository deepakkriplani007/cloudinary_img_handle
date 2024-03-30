import React from 'react'
import { useState } from "react";
import { ViewCard } from "./card";
import { Icons } from "./Icons";
import { useRecoilState } from "recoil";
import { addCardAtom, dataAtom } from "../store";

const Addcard = () => {
  
    const [image,setImage] = useState();
    const [url, setUrl] = useState('');
    const [addCard, setAddCard] = useRecoilState(addCardAtom);
    const [data,setData] = useRecoilState(dataAtom);

    return(
        <div className="absolute w-screen h-screen flex flex-col justify-center items-center bg-white">
            <div className='flex flex-col items-center'>
                <label htmlFor="uploader">
                    <ViewCard details={{
                        download_url : url
                    }}/>
                </label>
                <input type="file" id='uploader'
                accept="image/*" onChange={(e)=>{
                    setImage(e.target.files[0]);
                    setUrl(URL.createObjectURL(e.target.files[0]));
                }}
                className="invisible"
                />
                <button className="p-5 rounded-md text-white bg-black" onClick={()=>{
                    if(url!=''){
                        setData((prev)=>{
                            return [...prev,
                            {
                                id:data.length+100+1,
                                download_url : url
                            }]
                        })
                    }
                    setAddCard(false);
                }}>Add Image</button>
            </div>
                
        </div>
  )
}

export default Addcard