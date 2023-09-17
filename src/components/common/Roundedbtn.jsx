import React from 'react'

const Roundedbtn = ({icon, onClick}) => {
  return (
    <button className='text-[#8796a1] text-xl p-2 rounded-full hover:bg-[#3c454c]'
         onClick={onClick}>
         {icon}
    </button>
  )
}
export default Roundedbtn
