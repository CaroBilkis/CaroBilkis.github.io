import React from 'react'

import Link from './Link'

export default function Menu({children, href}) {


  return (
    <div className="flex flex-row justify-between w-full  py-8 font-clash">
       <h1 className="text-3xl font-medium"> Carolina <br /> Bilkis</h1>

       <div className='hidden lg:flex flex-row gap-4'>
           <Link name={"Home"} href={"/"}/>
           <Link name={"About"} href={"/about"}/>
           <Link name={"Works"} href={"/works"}/>
           <Link name={"Contact"} href={"/contact"}/>
       </div>
    </div>
  )
}
