import Image from 'next/image'
import React from 'react'

export default function QR() {
  return (
    <div className="bg-[#D5E1EF] flex flex-col w-full h-screen items-center justify-center p-4 flex-shrink-0 snap-start snap-always ">
       <div className="bg-white flex flex-col  justify-center items-center gap-4 p-4 rounded-xl  max-w-sm  text-center">
         <img src="../img/qr/image-qr-code.png" alt="Image QR" />

         <div className='flex flex-col  max-w-xs gap-4 items-center'>
          <h2 className='font-bold text-2xl text-gray-800 '>Improve your front-end skills by building projects</h2>
          <h3 className='font-medium text-gray-400'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h3>
        </div>

       </div>
    </div>
  )
}

