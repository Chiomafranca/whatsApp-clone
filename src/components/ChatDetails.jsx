import React, { useEffect, useRef, useState } from 'react'
import Roundedbtn from "./common/Roundedbtn"
import {messagesData} from'../data/whatsappItems'
import {MdSearch} from "react-icons/md"
import {HiDotsVertical} from "react-icons/hi"
import { images } from './whatsApp'; 
import { BiHappy } from "react-icons/bi";
import {AiOutlinePaperClip} from "react-icons/ai"
import {BsMic} from "react-icons/bs"
import {IoMdSend} from "react-icons/io"
import Massage from './Message'
import { getTime } from '../logic/whatsapp'


const ChatDetails = () => {
  const [messages, setMessages] =useState(messagesData)
  const [typing, setTyping] =useState(false)

  const InputRef = useRef(null)
  const buttonRef = useRef(null)

  // InputRef.current //This will give me html element

  // function
     const handleInputChange =() =>{
        InputRef.current.value.length === 0? setTyping(false) :setTyping(true)
     }

     const addMessage =(msg) =>{
        const newMessages =[...messages, msg]
        setMessages(newMessages)
     }
     const handlEmojiClick =()=>{
        InputRef.current.value += "😂"
        InputRef.current.focus()
     }
     const handleImgUpload =()=>{
         addMessage({
          img: images.cs2,
          time: getTime(),
          sent: true,
         })
     }

     const handleInputSubmit = () => {
      const currentTime = new Date(); // Get the current time
      
      if (InputRef.current.value.length > 0) {
          addMessage({
              msg: InputRef.current.value,
              time: currentTime.toLocaleTimeString(), // Format the current time as a string
              sent: true
          });
  
          InputRef.current.value = "";
          InputRef.current.focus();
          setTyping(false);
      }
  };
  
useEffect(() =>{
    buttonRef.current?.scrollIntoView({
       behavior: "smooth"
    })
}, [messages])

useEffect(() =>{
     const listener =(e) =>{
        if(e.code ==="Enter")
        handleInputSubmit()
     }
    document.addEventListener("keydown", listener);
    return () =>document.removeEventListener("keydown", listener)
})
  return (
    // Chatdetails main Container
    <div className='flex flex-col h-screen'>
        {/* Contact nav */}
        <div className='flex justify-between bg-[#202d33] h-[60px] p-3'>

          {/* Contact info */}
          <div className='flex items-center'>
             {/* Profile picture */}
             <img src={images.cs2} alt="profile_picture" className='rounded-full w-[40px] h-[45px] mr-5'/>

             {/* Info */}
             <div className='flex flex-col'>
              {/* Contact */}
              <h1 className='text-white font-medium'>Coding Spot</h1>
               
               {/* Status */}
               <p className='text-[#7996a1]'>online</p>
             </div>
          </div>

         {/* Buttons */}
          <div className='flex justify-between items-center w-[85px]'>
            <Roundedbtn icon={<MdSearch/>}/>
            <Roundedbtn  icon={<HiDotsVertical/>}/>
          </div>
        </div>

       {/* Message  sections*/}
         <div className='bg-[#0a131a]  h-[100%] bg-[url("assets/images/bg.webp")] bg-contain overflow-y-scroll'
           style={{padding:"12px 7%"}}
         >

        {messages.map((msg) =>(
            <Massage
               msg={msg.msg}
               time={msg.time}
               isLink={msg.isLink}
               img={msg.img}
               sent={msg.sent}
            />
         ))}
          <div ref={buttonRef}/>
         </div>
     
       {/* Buttom sections */}
        <div  className='items-center bg-[#202633] w-100 h-70px p-2'>
           {/* {Emoji btn} */}
           <Roundedbtn icon={<BiHappy/>} onClick={handlEmojiClick}/>

           {/* Upload btn */}
           <span className='mr-2'>
             <Roundedbtn icon={<AiOutlinePaperClip/>} onClick={handleImgUpload}/>
           </span>

           {/* Input btn */}
           <input type="text" 
             placeholder='Type a message'
             className='bg-[#2c3946] rounded-lg
             outline-none text-sm text-neutral-200
              w-100 h-100 py-1 px-3 placeholder:text-sm
              placeholder:text-[#8796a1]
             '
             onClick={handleInputChange}
             ref={InputRef}
           />
           {/* mic/send btn */}
           <span className="ml-2">
                {typing ? (
            <Roundedbtn icon={<IoMdSend /> } onClick={handleInputSubmit}/>
            
            ) : (
              <Roundedbtn icon={<BsMic />} />
           )}
         </span>

        </div>
    </div>
  )
}

export default ChatDetails
