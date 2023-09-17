import React, { useEffect, useState } from 'react'
import Chat from '../components/Chat'
import {HiFolderDownload} from 'react-icons/hi'
import {chatsData} from '../data/whatsappItems'

const Chats = ({filter}) => {
   const [chats, setChats] =useState(chatsData)
     console.log(chatsData, "HELLO")

     useEffect(() =>{
        const newChats = filter ?
        chatsData.filter((chat) =>chat.unreadMsgs) :chatsData;
        setChats(newChats)
     }, [filter])

  return (
    // Chat main container
    <div className='flex flex-col overflow-y-scroll cursor-pointer'>
      
      {/* Archived container */}
      <div className='flex justify-between items-center w-100 min-h-[30px] px-3 hover:bg-[#202d33]'>
       {/* icon and text container */}
       <div className='flex justify-around items-center w-[150px]'>
           {/* icon */}
            <span className='text-emerald-500 text-lg'>
              {<HiFolderDownload/>}
            </span>

           {/* archived */}
            <h1  className='text-white'>Archived</h1>
       </div> 
      {/* Number of archived chat */}
      <p className='text-emerald-500 text-xs font-light'>7</p>
      
       {/* header of archived chat*/}
      </div>

      {/* Chats */}
      {chats.map((chat, i) =>{
         return(
          <Chat 
           pp={chat.pp}
           contact={chat.contact}
           msg={chat.msg}
           time={chat.time}
           unreadMsgs={chat.unreadMsgs}
           active={i === 0}
          />
         )
      })}
    
    </div>
  )
}
export default Chats
