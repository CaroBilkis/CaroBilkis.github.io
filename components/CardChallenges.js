import React from 'react'
import Image from 'next/image'
const CardChallenges = ({link, img, color, title, description, id}) => {
  return (
    <a key={id}  href={link} className="w-full h-[340px]     group relative rounded-xl border border-black overflow-hidden ">
  
    <div className="flex flex-row w-full justify-between items-start absolute p-8 group-hover:opacity-0">
      <div className='flex flex-col'>
      <h2 className="text-4xl font-medium text-white relative z-10 ">{title}</h2>
      <h3 className="text-2xl font-medium text-black relative z-10 ">{description}</h3>
      </div>

      <button className="relative z-10 bg-white -rotate-45 p-2 border border-black rounded-full">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3 19.3C11.1167 19.1167 11.0207 18.8834 11.012 18.6C11.004 18.3167 11.0917 18.0834 11.275 17.9L16.175 13H5C4.71667 13 4.479 12.904 4.287 12.712C4.09567 12.5207 4 12.2834 4 12C4 11.7167 4.09567 11.479 4.287 11.287C4.479 11.0957 4.71667 11 5 11H16.175L11.275 6.10005C11.0917 5.91672 11.004 5.68338 11.012 5.40005C11.0207 5.11672 11.1167 4.88338 11.3 4.70005C11.4833 4.51672 11.7167 4.42505 12 4.42505C12.2833 4.42505 12.5167 4.51672 12.7 4.70005L19.3 11.3C19.4 11.3834 19.471 11.4874 19.513 11.612C19.5543 11.7374 19.575 11.8667 19.575 12C19.575 12.1334 19.5543 12.2584 19.513 12.375C19.471 12.4917 19.4 12.6 19.3 12.7L12.7 19.3C12.5167 19.4834 12.2833 19.575 12 19.575C11.7167 19.575 11.4833 19.4834 11.3 19.3Z" fill="black"/>
      </svg>
      </button>
    </div>
    <div className={color  +" group-hover:opacity-0 w-full h-full absolute opacity-90 "}></div>
    <img  className="group-hover:scale-105 " src={img} alt="" />
  </a>

  )
}

export default CardChallenges