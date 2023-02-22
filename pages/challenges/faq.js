import React, { useState } from 'react'
import Accordition from '../../components/Accordition';

import { HiChevronDown,HiChevronUp  } from "react-icons/hi";
import Image from 'next/image';


export default function Faq() {

  
    const questionsAnswers = [
        {
          question: "How many team members can I invite?",
          answer:
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        },
        {
          question: "What is the maximum file upload size?",
          answer:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
          question: "How do I reset my password?",
          answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
        },
        {
          question: "Can I cancel my subscription?",
          answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
        },
        {
          question: "Do you provide additional support?",
          answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
        },
      ];
    

  return (
    <div className='bg-gradient-to-b from-[#AD68E9] to-[#6A63E7] w-full h-screen flex items-center justify-center py-10 px-8 xl:px-40  flex-shrink-0 snap-start snap-always '>
     
        <div className='bg-white m-10  lg:h-2/3  flex flex-col gap-2 lg:flex-row p-4 rounded-3xl justify-center items-center '>
           <div className='relative w-full lg:w-1/2 lg:-left-20 self-center '>
               <div className='self-center relative  -top-20 lg:top-0  w-96 sm:w-full '>
                <img className='absolute aspect-square w-36 sm:w-auto bottom-10 -left-6 z-10 animate-bounce' src="../img/faq/illustration-box-desktop.png" alt="" />

                <img className='relative bottom-0 aspect-[4/3]' src="../img/faq/illustration-woman-online-desktop.png" alt="" />
               </div>
           </div>

           <div className='flex flex-col items-center lg:items-start w-full lg:w-1/2 py-10 gap-10'>
            <h1 className='uppercase text-4xl font-bold'>Faq</h1>
            <Accordition questionsAnswers={questionsAnswers} id={questionsAnswers} />
           </div>
        </div>

       

       
    </div>
  )
}

