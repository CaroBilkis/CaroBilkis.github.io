import React, {useState} from 'react'
import { AccorditionItem } from './AccorditionItem';
import { HiChevronDown } from "react-icons/hi"; 
const Accordition = ({questionsAnswers, id}) => {
    const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const show = index === activeIndex ? "faq-active" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccorditionItem key={id}
        show={show}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        icon={<HiChevronDown/>}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
   <div className='flex flex-col  gap-5'>
    {renderedQuestionsAnswers}
   </div>
  );
}

export default Accordition