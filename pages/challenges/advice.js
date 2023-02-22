import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function Advice() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [advices, setAdvices] = useState('');
    const [id, setId] = useState('');
    
    const url = 'https://api.adviceslip.com/advice';

     useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(
                (advices => {
                    setAdvices(advices.slip.advice)
                    setId(advices.slip.id)
                    
                })
            )
          
    },
     []);
    
    function getNewAdvice() {
        fetch(url)
            .then(response => response.json())
            .then(
                (advices => {
                    setAdvices(advices.slip.advice)
                    setId(advices.slip.id)
                    setIsLoaded(true)
                })
            )
            setIsLoaded(false)
    } 

    console.log(advices)
  return (
    <div className='bg-[#202632] text-[#CEE2E9] font-manrope flex justify-center items-center w-full h-full lg:h-screen  p-16  flex-shrink-0 snap-start snap-always '>
        <div className='flex flex-col gap-4 bg-[#313A49] justify-center items-center p-8 rounded-xl h-1/2  lg:h-1/3 lg:w-1/2  relative '>
            <h4 className='text-[#53FFAA] uppercase tracking-widest '>advice #{id}</h4>
            <h2 className='max-w-lg font-bold text-3xl text-center '>{advices}</h2>
            <button onClick={()=>getNewAdvice()} className={isLoaded ? 'bg-[#53FFAA] hover:shadow-[#53FFAA] hover:shadow p-4 hover:rotate-45  rounded-full absolute -bottom-6': 'bg-[#53FFAA] hover:shadow-[#53FFAA] hover:shadow p-4 rotate-90  rounded-full absolute -bottom-6'}>
                <svg className='text-[#202733]' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="currentColor"/></svg>
            </button>
            <img class="hidden lg:block" src="../img/advice/pattern-divider-desktop.svg" alt="" />
            <img class="block lg:hidden "src="../img/advice/pattern-divider-mobile.svg" alt="" />
        </div>
    </div>
  )
}
