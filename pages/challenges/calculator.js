import React, {useState} from "react";

export default function Calculator(){
  const [toggle, setToogle] = useState(1);
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops=['/', '*', '+','-', '.'];

  const updateCalc = (value) =>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) return;

    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const calculate = ()=>{
    setCalc(eval(calc).toString());
  
  }

  const del = ()=>{
    if (calc === ''){
      return;
    }
    const value =calc.slice(0, -1);

    setCalc(value);
  }

  const deleteAll = ()=>{
    if (calc === ''){
      return;
    }
    setCalc('');
  }
  function calculator (value) {
  
   
    return (
      <div className={toggle===1 ? 'flex flex-row justify-end overflow-hidden  bg-[#181F32] rounded-lg h-[130px]' :
      toggle===2 ? 'flex flex-row justify-end  bg-[#EEEEEE]  rounded-lg h-[130px]' :
      toggle===3 ? 'flex flex-row justify-end  bg-[#1E0836] rounded-lg h-[130px]' : ''
      } >
     
      {<h1 className={toggle === 1 ? 'text-6xl font-semibold mr-8 text-white self-center' :
      toggle === 2 ? 'text-6xl font-semibold mr-8 text-[#34342B] self-center' :
      toggle === 3 ? 'text-6xl font-semibold mr-8 text-[#FCE641] self-center' : ''}>{calc}</h1> || "0"}
    </div>
    )
  }

  return (
   <div className={toggle === 1 ? 'bg-[#3B4664] font-spartan w-full h-screen flex flex-col items-center justify-center ' :
   toggle === 2 ? 'bg-[#E6E6E6] font-spartan  w-full h-screen flex flex-col items-center justify-center' :
   toggle === 3 ? 'bg-[#17062A] font-spartan w-full h-screen flex flex-col items-center justify-center' : ''
   }>
     <div className='flex flex-col justify-center gap-4 w-full lg:w-1/2 px-14 '>
      <div className='flex flex-row justify-between w-full font-bold'>
      <h2 className={toggle===1 ?'text-white text-5xl  ' :
      toggle===2 ?'text-[#36352F] text-5xl  ' :
      toggle===3 ?'text-[#FCE641] text-5xl  ' : ''
      }>calc</h2>
      <div className='flex flex-row gap-4'>
      <h5 className={toggle === 1 ? 'uppercase text-white  self-end' :
      toggle === 2 ? 'uppercase  text-[#36352F]  self-end' :
      toggle === 3 ? 'uppercase  text-[#FCE641]   self-end' : ''
      }>theme</h5>
      <div className='flex flex-col  items-center'>
      <div className='flex flex-row  w-12 justify-between'> 
        <h5 className={toggle === 1 ? 'text-white text-sm' :
        toggle === 2 ? 'text-[#36352F]  text-sm' :
        toggle === 3 ? 'text-[#FCE641] text-sm' : ''
        }>1</h5>
       <h5 className={toggle === 1 ? 'text-white text-sm' :
        toggle === 2 ? 'text-[#36352F]   text-sm' :
        toggle === 3 ? 'text-[#FCE641] text-sm' : ''
        }>2</h5>
         <h5 className={toggle === 1 ? 'text-white text-sm' :
        toggle === 2 ? 'text-[#36352F]   text-sm' :
        toggle === 3 ? 'text-[#FCE641] text-sm' : ''
        }>3</h5>
      </div>
      <label className={toggle === 1 ? 'switch relative z-0 inline-block w-14 h-5 rounded-3xl bg-[#252D44] appearance-none' :
      toggle === 2 ? 'switch relative z-0 inline-block w-14 h-5 rounded-3xl bg-[#D3CDCD] appearance-none' :
      toggle === 3 ? 'switch relative z-0 inline-block w-14 h-5 rounded-3xl bg-[#1E0836] appearance-none' : ''
      } htmlFor="">
            <input type="checkbox" className='w-4 h-4 absolute z-50 inset-y-1 left-1 opacity-0' onClick={()=>setToogle(1)}   name="" id="" />
            <input type="checkbox" className='w-4 h-4 absolute z-50 inset-y-1 left-5 opacity-0' onClick={()=>setToogle(2)}   name="" id="" />
            <input type="checkbox" className='w-4 h-4 absolute z-50 inset-y-1 left-9 opacity-0' onClick={()=>setToogle(3)}   name="" id="" />
            <span className={toggle === 1 ? 'slider absolute translate-x-0 w-4 h-4 bg-[#D13F30] rounded-full inset-y-0.5 left-1 appearance-none' :
             toggle === 2 ? 'slider absolute translate-x-4 w-4 h-4 bg-[#C85401] rounded-full inset-y-0.5 left-1 appearance-none' :
             toggle === 3 ? 'slider  absolute translate-x-8 w-4 h-4   bg-[#00DECF]   rounded-full inset-y-0.5 left-1 appearance-none' :
             ''}/>
           
        </label>
      </div>
      </div>
      </div>
     {calculator()}

      <div className={toggle===1 ?'bg-[#252D44] grid grid-rows w-full-4 gap-6 p-8 rounded-lg font-bold  ' :
      toggle===2 ?'bg-[#D3CDCD] flex flex-col gap-6 p-8 rounded-lg font-bold' :
      toggle===3 ?'bg-[#1E0836] flex flex-col gap-6 p-8 rounded-lg font-bold' : ''
      }>
      <div className='flex flex-row gap-6 '>
        <button onClick={()=>updateCalc('7')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>7</button>
        <button onClick={()=>updateCalc('8')}  className={toggle ===1 ? 'bg-[#B4A399]   shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>8</button>
        <button onClick={()=>updateCalc('9')}  className={toggle ===1 ? 'bg-[#B4A399]   shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>9</button>
        <button onClick={()=>del()} className={toggle===1?'bg-[#647299] shadow shadow-[#424E74] text-white text-3xl   w-full h-14  pt-1 rounded-lg uppercase ' :
        toggle===2?'  bg-[#388187] shadow shadow-[#1B6065] text-white text-3xl   w-full h-14  pt-1 rounded-lg uppercase ' :
        toggle===3?'bg-[#56077C] shadow shadow-[#BF16F5] text-white text-3xl   w-full h-14  pt-1 rounded-lg uppercase' : ''
        }>del</button>
        
      </div>

      <div className='flex flex-row gap-6 '>
        <button onClick={()=>updateCalc('4')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>4</button>
        <button onClick={()=>updateCalc('5')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>5</button>
        <button onClick={()=>updateCalc('6')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>6</button>
        <button onClick={()=>updateCalc('+')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>+</button>
      </div>

      <div className='flex flex-row gap-6'>
        <button onClick={()=>updateCalc('1')}  className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>1</button>
        <button onClick={()=>updateCalc('2')}  className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>2</button>
        <button onClick={()=>updateCalc('3')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? ' bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>3</button>
        <button onClick={()=>updateCalc('-')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>-</button>
      </div>

      <div className='flex flex-row gap-6'>
      <button onClick={()=>updateCalc('.')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>.</button>
        <button onClick={()=>updateCalc('0')}  className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>0</button>
        <button onClick={()=>updateCalc('/')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>/</button>
        <button onClick={()=>updateCalc('*')} className={toggle ===1 ? 'bg-[#B4A399]  shadow-[#B4A399]  text-[#4A4E5B]  number' :
        toggle ===2 ? 'bg-[#E5E4E0] shadow shadow-[#A59F93] text-[#4A4E5B]  number' :
        toggle ===3 ? 'bg-[#331B4D] shadow shadow-[#871E9F]  text-[#FCE641] number' : ''
        }>x</button>
      </div>

     <div className='flex gap-6 justify-between'> 
     <button onClick={()=>deleteAll()} className={toggle===1?'bg-[#647299] shadow shadow-[#414D74] text-white text-3xl    h-14 pt-1 rounded-lg uppercase w-full' :
     toggle===2?'  bg-[#388187] shadow shadow-[#1B6065] text-white text-3xl    h-14 pt-1 rounded-lg uppercase w-full' :
     toggle===3?'bg-[#56077C] shadow shadow-[#BF16F5] text-white text-3xl    h-14 pt-1 rounded-lg uppercase w-full' : ''
     }>reset</button>
     <button onClick={calculate} className={toggle === 1 ?'bg-[#D13F30] shadow-[#9F2719] text-white text-4xl    h-14 pt-1 rounded-lg uppercase w-full' :
     toggle === 2 ?'bg-[#C85401] shadow shadow-[#883A01] text-white text-4xl    h-14 pt-1 rounded-lg uppercase w-full' :
     toggle === 3 ?'bg-[#00DECF] shadow shadow-[#6EFAF1] text-white text-4xl    h-14 pt-1 rounded-lg uppercase w-full' : ''
     }>=</button>

      </div>
      </div>
      
     </div>
   </div>
  )
}