import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function Link({name, href}) {
    const [hover, setHover] = useState (false);
  const router = useRouter()
  const style = {
    color: router.pathname === href ? 'black' : hover ? '#999' : '#c4c4c4'
 
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className="flex items-center font-clash w-full">
      
       <div className='hidden lg:flex flex-row items-center  '>
            <a onMouseEnter={()=>setHover(true)} onMouseOut={()=>setHover(false)} id="link" onClick={handleClick} style={style} href={href}  className={"btn"}>{name}</a>
       </div>
    </div>
  )
}
