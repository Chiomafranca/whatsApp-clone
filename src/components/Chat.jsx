import React from 'react';

const Chat = ({ contact, pp, msg, time, unreadMsgs, active }) => {
  return (
    <div className={`flex w-full items-center h-[80px] px-3 hover:bg-[#202d33] cursor-pointer ${active ? "bg-[#202d33]" : ""}`}>
      {/* profile picture */}
      <img src={pp} alt="profile" className="rounded-full w-[50px] mr-5" />
      {/* Info container */}
      <div className="flex justify-between border-t border-neutral-700 w-full h-full py-3">
        {/* contact name and msg */}
        <div className="flex flex-col justify-between text-white">
          <h1 className="font-medium mb-1">{contact}</h1>
          <p className={`text-sm ${
             !unreadMsgs ? "text-neutral-400":""
          }`}>{msg}</p>
        </div>
        {/* Time and number of messages */}
        <div className='flex flex-col justify-between items-end h-100 text-xs'>
          <p className='text-emerald-500 min-w-[55px]'>{time}</p>
            {unreadMsgs &&(
               <div className='flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px]'>
                 <p className="text-emerald-900">{unreadMsgs}</p>
               </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
