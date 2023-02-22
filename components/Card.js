import React from 'react'

function Card({title, hours, time, color, icon, id}) {
  return (
    <div className='hover:-translate-y-1' key={id}>
  
    <div className='flex flex-col  h-56'>
        <div className= {color +' p-8 w-72 md:w-72 lg:w-60 rounded-2xl z-0 overflow-hidden relative'}> 
           <div className='absolute bottom-0 right-10' >
           {icon}
           </div>    
       </div>
       <div className='bg-[#1D204A] p-8  w-72 md:w-72 lg:w-60 rounded-2xl z-40 relative -top-6'>
           <div className='w-48 flex flex-col gap-4'>
           <div className='flex flex-row  justify-between '>
           <h1 className='text-white font-medium'>{title}</h1>
           <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
           </div>
           <h1 className='text-white text-5xl font-light'> {hours}</h1>
           <h1 className='text-[#7D81B1] text-sm'>{time}</h1>
           </div>
       </div>

    </div> 

   </div> 

  )
}

export default Card