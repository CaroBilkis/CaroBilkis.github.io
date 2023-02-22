import React from "react";
import Menu from "../components/menu";

export default function Contact(){

    return(
        <div className="flex flex-col  w-full h-full items-center justify-center  bg-[#fafafa]  px-20 pb-20 ">

        <Menu/>
      <div className="flex flex-col gap-14 items-start w-full font-clash">
        <h2 className="lg:text-3xl text-2xl font-medium ">¡Pongámonos en contacto!</h2>
       <div className="grid grid-cols-2 w-full h-full  gap-10 justify-between">
        <form action="" className="flex flex-col justify-between items-start gap-10 w-full">
            <div className="flex flex-col border border-black rounded-xl p-8 w-full">
                <label className="text-2xl font-medium  " htmlFor="">Nombre</label>
                <div className="w-full h-[1px] bg-gradient-to-r from-black to-white"></div>
                <input type="text" className="bg-transparent appearance-none p-2 outline-none " /> 
            </div>

            <div className="flex flex-col border border-black rounded-xl p-8 w-full">
                <label className="text-2xl font-medium  " htmlFor="">Email</label>
                <div className="w-full h-[1px] bg-gradient-to-r from-black to-white"></div>
                <input type="text" className="bg-transparent appearance-none p-2 outline-none " /> 
            </div>

            <div className="flex flex-col border border-black rounded-xl p-8 w-full">
                <label className="text-2xl font-medium  " htmlFor="">Mensaje</label>
                <div className="w-full h-[1px] bg-gradient-to-r from-black to-white"></div>
                <input type="text" className="bg-transparent appearance-none p-2 outline-none " /> 
            </div>

            <button type="submit" className='w-1/4 flex items-center justify-center bg-[#69C6AC] hover:bg-[#69C6AC]/80 text-white font-medium border border-black p-2 rounded-xl'>Enviar</button>
            
        </form>
      
      <div className="w-full h-full rounded-xl border border-black overflow-hidden">
        <img className="w-full h-full aspect-[4/3] object-contain bg-[#2D2B30]" src="../img/popeye.jpg" alt="" />
      </div>
       </div>
      </div>
 
     </div>
    )
}