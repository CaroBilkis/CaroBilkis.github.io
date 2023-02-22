import React from 'react'

export const AccorditionItem = ({ show,ariaExpanded,item,index,onClick, icon}) => {
    
  return (
    <div className="flex flex-col items-start gap-2.5 pr-4" key={item.question}>
  
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}`}
        data-qa="faq__question-button"
        className={show ? 'flex flex-row w-full flex-shrink-0  gap-2 items-center justify-between text-black hover:text-orange-600 font-bold' :'flex flex-row  w-full flex-shrink-0 gap-2 items-center justify-between  font-normal  hover:text-orange-600'}
        onClick={onClick}
      >
       
        {item.question}
        <span className={show ? 'text-orange-500 rotate-180':'text-orange-500'}>{icon}</span>
      </button>
   
     {  show ?
      <p id={`faq${index + 1}`} data-qa="faq__desc" className={'max-w-lg'}>
        {item.answer}
      </p> 
      :''
     }
   <div className='w-full h-0.5 border-gray-200 border-b'></div>
  </div>
  )
}
