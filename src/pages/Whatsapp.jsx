import React, { useEffect, useState } from 'react';
import LeftMenu from '../components/LeftMenu';
import ChatDetails from '../components/ChatDetails';
import LoadingScreen from '../components/LoadingScreen';

const Whatsapp = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id= setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else setProgress(progress + Math.floor(Math.random() * 10) + 7);
    }, 300);
     return () =>clearTimeout(id)
  }, [progress]);
  

  return (
    <>
      {loading ? (
        <LoadingScreen progress={progress}/>
      ) : (
        <div className='w-screen h-screen overflow-hidden'>
          {/* Main app container */}
          <div className='flex justify-start items-center bg-[#111a21] h-screen whatsapp-bp-justify-center'>
            {/* Left menu */}
            <div className='bg-[#111a21] min-w-[360px] max-w-[500px] w-1/4 h-full'>
              <LeftMenu />
            </div>

            {/* ChatDetails */}
            <div className='bg-[#222f35] min-w-[415px] max-w-[1120px] w-3/4 h-full'>
              <ChatDetails />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Whatsapp;
