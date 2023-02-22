import React, {useState} from 'react'
import { HiUser } from "react-icons/hi";
export default function Tips() {

    
const [total, setTotal] = useState(0.0);
const [people, setPeople] = useState(1);   
const [tip, setTip] = useState(0);
const [foc, setFoc] = useState(false);
const [foc2, setFoc2] = useState(false);

var def;
var def2;

const TotalPerson = (total,people, tip, reset) =>{
    const cantTotal  = ((total * tip) / 100);
     def = parseInt(cantTotal);
  
     const tipTotal = total;
      def2 = parseInt(tipTotal);
     
     const totalPerPerson = parseFloat((def+def2)/people).toFixed(1);
     
   
    return (
        {totalPerPerson}
    )
  }

  const TipAmount = (total,tip, people, reset) =>{
    const cantTotal = ((total * tip) / 100);
  
     def = parseInt(cantTotal);
     const totalRecibido = total;
   
     def2=parseInt(totalRecibido);

   const general = parseInt(def+def2);
   return (
       <>
       { general }

       </>
   )
 }

 const Reset = () =>{
   
   window.location.reload();
  
 } 
  return (
    <div className='bg-[#C5E4E7] font-space-mono  flex flex-col w-full lg:h-screen relative  items-center justify-center p-8  py-12 flex-shrink-0 snap-start snap-always'>
  
      <h5 className='uppercase text-[#3E6062] text-center font-bold tracking-2 '>Spli <br /> tter</h5>
    
        <div className='bg-white flex flex-col lg:flex-row gap-10 lg:gap-0  justify-between h-full w-3/4 lg:w-11/12  p-8 lg:px-4  rounded-xl sm:mt-20 mt-20 '>
         <div className=' flex flex-col lg:flex-row md:flex-col w-full lg:w-2/3 gap-12 pb-10  '>
            <div className='flex flex-col gap-10  lg:w-11/12 h-full  justify-between'>
                <div className='flex flex-col  w-full gap-2 '>
                    <h5 className='text-[#3E6062] text-sm font-bold tracking-widest'>Bill</h5>
                    
                    
                    <div className={foc ? 'relative flex items-center bg-[#F3F8FB] text-[#548B90] rounded-lg w-full appearance-none leading-tight border-2 outline-none  border-[#00474B]':
                    'relative flex items-center  bg-[#F3F8FB] text-[#548B90] rounded-lg  w-full appearance-none leading-tight border-none'}>
                        <label className='absolute pl-4' htmlFor="">$</label>
                        <input className='p-3 w-full text-right bg-transparent appearance-none teading-tight focus:outline-none text-[#3E6062] font-bold rounded-lg border-2 focus:border-[#27C1AD]'  onInput={(e)=>setTotal(e.target.value)}  type="text" />
                    </div>
                
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <h5 className='text-[#3E6062] text-sm font-bold tracking-widest'>Select Tip %</h5>
                    
                    <div className=' flex  gap-6 flex-wrap justify-center text-[#548B90] rounded-lg w-full lg:p-2 md:p-0'>
                        <div className=' grid grid-cols-3 lg:gap-2 md:gap-2.5 gap-2.5 text-2xl'>
                            <button onClick={()=>setTip(5)} className={tip===5 ?'bg-[#27C1AD] text-[#3E6062] w-full py-2 rounded-md' :'hover:bg-[#27C1AD] hover:text-[#3E6062] bg-[#00474B] text-white w-full py-2 rounded-md'}>5%</button>
                            <button  onClick={()=>setTip(10)} className={tip===10 ?'bg-[#27C1AD] text-[#3E6062] w-full py-2 rounded-md' :'hover:bg-[#27C1AD] hover:text-[#3E6062] bg-[#00474B] text-white w-full py-2 rounded-md'}>10%</button>
                            <button  onClick={()=>setTip(15)} className={tip===15 ?'bg-[#27C1AD] text-[#3E6062] w-full py-2 rounded-md' :'hover:bg-[#27C1AD] hover:text-[#3E6062] bg-[#00474B] text-white w-full py-2 rounded-md'}>15%</button>
                            <button  onClick={()=>setTip(25)} className={tip===25 ?'bg-[#27C1AD] text-[#3E6062] w-full py-2 rounded-md' :'hover:bg-[#27C1AD] hover:text-[#3E6062] bg-[#00474B] text-white w-full py-2 rounded-md'}>25%</button>
                            <button  onClick={()=>setTip(30)} className={tip===50 ?'bg-[#27C1AD] text-[#3E6062] w-full py-2 rounded-md' :'hover:bg-[#27C1AD] hover:text-[#3E6062] bg-[#00474B] text-white w-full py-2 rounded-md'}>50%</button>
                        
                            <input onInput={(e)=>setTip(e.target.value)} className='bg-[#F5F8F9] text-center text-[#3E6062] font-bold w-full py-2 rounded-md appearance-none border-2  leading-tight focus:outline-none focus:bg-white focus:border-m-cyan-800 lg:text-xl md:text-body text-body' type="text"  placeholder='Custom'/>
                        
                        </div>
                
                </div>
            </div>

            <div className='flex flex-col w-full  gap-2'>
                <div className='flex flex-row justify-between'>
                    <h5 className='text-[#3E6062] text-sm font-bold tracking-widest'>Number of People</h5>
                    {people < 1 ? <span className='text-orange-600 text-sm font-bold tracking-widest '>Cant be zero</span> :""}
                </div>
                <div className={people < 1 ?
                'justify-between bg-[#F3F8FB]  font-bold flex flex-row text-[#3E6062] rounded-lg w-full items-center border-2 border-orange-600 relative  ' :
                    foc2 ?
                'justify-between flex flex-row text-[#3E6062]  font-bold bg-[#F3F8FB] rounded-lg w-full  items-center border-2 outline-none  border-none relative ':
                 'bg-[#F3F8FB] flex flex-row text-[#548B90] rounded-lg w-full  items-center justify-between font-bold relative'}>
                    
                    
                        <label className='pl-4 absolute ' htmlFor=""><HiUser color='#9DBFBD' className=''/> </label>
                        <input   onInput={ (e)=>setPeople(e.target.value)}   className={people<1 ?
                        'text-right w-full p-3 bg-[#F3F8FB] appearance-none leading-tight focus:outline-none text-[#3E6062] font-bold lg:px-9 md:px-0.5 px-0.5' :
                        'text-right  w-full p-3 rounded-lg relative  bg-transparent appearance-none leading-tight focus:outline-none text-[#3E6062] font-bold border-2 focus:border-[#27C1AD] '} value={people} placeholder='0' type="number"/>
                </div>

             </div>     
            </div>
            </div>
            <div className='flex flex-col bg-[#00474B] w-full h-full lg:w-1/3 items-center rounded-xl '>
                <div className='flex flex-col gap-32  justify-between h-full pb-10 w-full  '>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-row  w-full  lg:px-8  px-4  mt-12 justify-between '>
                            <div className='flex flex-col '>
                                <h4 className='text-white text-lg font-semibold'>Tip Amount</h4>
                                <h5 className='text-sm text-[#548B90] font-semibold'>/ person</h5>
                            </div>
                        <div>
                            <h2 className='xl:text-5xl lg:text-4xl text-3xl text-[#27C1AD] font-bold'>$ {total > 0 && people > 0?
                            TipAmount(total, tip, people)  :
                            "0.0"}</h2>
                        </div>
                        </div>
                        <div className='flex flex-row w-full lg:px-8 px-4 justify-between'>
                            <div className='flex flex-col '>
                                <h1 className='text-white text-lg font-semibold'>Total</h1>
                                <h1 className='text-sm text-[#548B90] font-semibold'>/ person</h1>
                            </div>
                            <div>
                                <h2 className='xl:text-5xl lg:text-4xl text-3xl text-[#27C1AD] font-bold'>$ {total > 0 && people > 0?
                                TotalPerson(total, people, tip) :
                                "0.0"}</h2>
                            </div>
                        </div>
                    </div>
                
                <button className='uppercase text-[#3E6062] bg-[#27C1AD] self-center text-xl p-2 w-3/4  font-semibold rounded-md hover:bg-[#9FE8DF]' onClick={()=>Reset()}>reset</button>
                </div>
             <div>
           
            </div>

        </div>
       
    </div>
</div>
  )
}

