import React, { useState } from 'react'
import Chats from '../components/Chats'
import Roundedbtn from './common/Roundedbtn'
import {BsFillPeopleFill} from 'react-icons/bs'
import {TbCircleDashed} from 'react-icons/tb'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {HiDotsVertical} from 'react-icons/hi'

import { images } from './whatsApp'; 

import {BiFilterAlt} from 'react-icons/bi'


const LeftMenu = () => {
  const [filter, setFilter] =useState(false)

  return (
    // left menu container
    <div className='flex flex-col border-r border-neutral-700 w-100 h-screen'>
       {/* profile nav */}
       <div className='flex justify-between items-center bg-[#202d33] h-[60px] p-3'>
         {/* {profile picture} */}
         <img src={images.pp} alt="profile_picture" className='rounded-full w-[40px]'/>

         {/* profile nav buttons */}
          <div className='flex justify-between w-[175px]'>
             <Roundedbtn icon={<BsFillPeopleFill/>}/>
             <Roundedbtn icon={<TbCircleDashed/>}/>
             <Roundedbtn icon={<BsFillChatLeftTextFill/>}/>
             <Roundedbtn icon={<HiDotsVertical/>}/>
          </div>
       </div>

       {/* search and filter */}
       <div className='flex justify-between items-center h-[60px] p-2'>          
       
       {/* search input */}
       <input type="text"
         placeholder='search or start a chat'
        className='rounded-lg bg-[#2c3949] placeholder:text-[#8796a1] text-sm font font-light w-[300px] h-[30px] py-1 px-4 outline-none text-neutral-200
        '/>

          {/* filter button */}
          <button className={`text-2xl m-2 p-1 rounded-full ${filter ? "bg-emerald-500 text-white hover:bg-emerald-700" : "text-[#8796a1] hover:bg-[#3c454c]"} `}
            onClick={() =>setFilter(!filter)}
          >
           
            <BiFilterAlt />
          </button>
        </div>

       {/* Chats */}
       <Chats filter={filter}/>
    </div>
  )
}

export default LeftMenu
