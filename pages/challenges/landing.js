import Image from 'next/image';
import React, {useState} from 'react'

export default function Landing() {
    const [menu, setMenu] =useState(false);

    const controllMenu = () =>{
        setMenu(!menu);
    }
  return (
    <div className='w-full relative bg-[#3EBFFF] font-barlow flex flex-col items-center justify-center py-8 snap-start snap-always'>
           <div className='flex flex-col w-full h-full'>   
                <div className='flex flex-row gap-20  justify-between items-start md:items-center sm:items-start px-8 z-40'>
                    <div>           
                    <svg className='' width="124" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z" fill="#FFF" fill-rule="nonzero"/></svg>
                    </div>
                    <div className='hidden flex-row gap-8 sm:hidden md:flex '>
                        <button className='font-barlow bg-transparent font-semibold text-white'>About</button>
                        <button className='font-barlow bg-transparent font-semibold text-white'>Services</button>
                        <button className='font-barlow bg-transparent font-semibold text-white'>Projects</button>
                        <button className='font-fraunces uppercase bg-white px-4  py-3 text-xs rounded-3xl font-bold text-black hover:bg-[#80D1F4] hover:text-white'>Contact</button>
                    </div>
                    <div className='flex flex-col w-full gap-8 sm:flex md:hidden '> 
                    <div className='flex justify-end'  onClick={()=>controllMenu()} >            
                    <svg  className=''  width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
                    </div>
                    
                    </div>
                    
                </div>
                {menu ? 
                        
                        <div className='flex relative sm:flex md:hidden mt-10 m-8  flex-col gap-8 p-12 bg-white  z-50 items-center'>
                        <div className='absolute -top-8 right-0'>
                        <svg width="50" height="50" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.646 100.766V0.766113L0.646484 100.766H100.646Z" fill="white"/>
                        </svg>
                        </div>
                        <button className='font-barlow bg-transparent font-semiboldtext-[#7B7B7D]'>About</button>
                        <button className='font-barlow bg-transparent font-semiboldtext-[#7B7B7D]'>Services</button>
                        <button className='font-barlow bg-transparent font-semiboldtext-[#7B7B7D]'>Projects</button>
                        <button className='font-fraunces uppercase bg-[#FFD302] py-3 text-xs w-32 rounded-3xl font-bold text-black hover:bg-yellow-300'>Contact</button>
                        </div>
                    :
                    ""}
                    
                <div className='flex flex-col  items-center justify-center'>
                    <div className={menu ? 'flex flex-col items-center absolute z-40' :
                     'flex flex-col justify-center items-center mt-0  gap-8 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-8 absolute self-center z-40'}>
                    <h1 className='text-white tracking-widest font-extrabold uppercase text-center text-6xl 2xl:text-6xl lg:text-6xl md:text-5xl sm:text-6xl relative self-center '>we are creatives</h1>
                    <svg className=' ' width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>   

                    </div>
                    <img  className='hidden md:flex   z-0 ' src="../img/landing/desktop/image-header.jpg" alt="" />
                   
                    <img  className='flex relative bottom-0 md:hidden sm:flex z-30 ' src="../img/landing/desktop/image-header.jpg" alt="" />     
                </div>

                <section className='grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2  justify-between w-full z-40 '>
                
                 <div className='bg-white w-full   p-20  flex flex-col items-center z-40'>
             
                    <div className='my-auto flex flex-col gap-8 w-[400px]  '>
                        <h3 className='text-3xl font-black font-fraunces text-m-gray-600 w-[400px]  mx-auto'>Transform your <br /> brand</h3>
                        <p className='w-400  mx-auto font-barlow  text-sm text-m-gray-400 font-semibold'>We are a full-service creative agency specializing in helpíng brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                        
                        <button className='uppercase font-bold w-32 text-center relative group z-40'>
                        <span className='relative z-40'>  Learn more</span>
                        <div className='w-32  border-b-8 rounded-xl border-[#FFD302] group-hover:translate-x-0.5 absolute top-4 z-0'></div>
                        </button>
                      
                    </div>        
                 </div>
                    
                 <img className='w-full h-full aspect-[4/3] object-cover z-0' src="../img/landing/desktop/image-transform.jpg" alt="" />
                </section>

                <section className='grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2  justify-between w-full h-full relative'>
               
                    <img className='w-full h-full aspect-[4/3] object-cover z-0 order-2' src="../img/landing/desktop/image-stand-out.jpg" alt="" />
                
                    <div className='bg-white w-full   p-20  flex flex-col items-center order-1 sm:order-1 md:order-2 z-40 '>
                    
                        <div className='my-auto flex flex-col gap-8 w-[400px] relative z-10  '>
                        
                        <h3 className='text-3xl font-black font-fraunces text-m-gray-600 w-[400px]  mx-auto'>Stand out to the right <br /> audience</h3>
                        <p className='w-400  mx-auto font-barlow text-sm text-m-gray-400 font-semibold'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we`ll build and extend your brand in digital places.</p>
                        
                       
                        <button className='uppercase font-bold w-32 text-center relative group z-40'>
                        <span className='relative z-40'>  Learn more</span>
                        <div className='w-32  border-b-8 rounded-xl border-[#FFD302] group-hover:translate-x-0.5 absolute top-4 z-0'></div>
                        </button>
                      
                       
                        </div>        
                    </div>
                
                </section>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  justify-between w-full h-full'>
                
               
                <section class="h-[590px] bg-[#98DACB] flex flex-col justify-end gap-5  2xl:bg-cover bg-top relative ">
                    <img className='w-full h-full aspect-[4/3] object-cover absolute z-0' src="../img/landing/desktop/image-graphic-design.jpg" alt="" />
                    <div className='flex flex-col relative z-10  pb-20 max-w-lg self-center  '>        
                        <h4 className='text-3xl font-fraunces font-black text-[#2B7564] text-center t-0 2xl:pt-8'>Graphic Design</h4>
                        <p className='font-barlow font-semibold text-[#2B7564] text-center mt-4 px-14 '> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potencial client`s attention.</p>
                    </div>
                   
                </section>
                
                

                <section class="h-[590px] bg-[#57D0FF] flex flex-col justify-end gap-5  2xl:bg-cover bg-top relative">
                <img className='w-full h-full aspect-[4/3] object-cover absolute z-0' src="../img/landing/desktop/image-photography.jpg" alt="" />
                <div className='flex flex-col relative z-10  pb-20 self-center '>
                    <h4 className='text-3xl font-fraunces font-black text-[#185470] text-center pt-0 2xl:pt-8'>Photography</h4>
                    <p className='font-barlow font-semibold text-[#185470] text-center mt-4 px-14 '> Increase your creadibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </section>
                </div>
                <div className='bg-white  w-full flex flex-col items-center align-middle justify-between'>
                    <h3 className='uppercase text-center font-fraunces font-extrabold text-lg text-[#B0B0B0] tracking-widest mt-8'>Client testimonials</h3>
                    <div className='flex flex-col md:flex-col xl:flex-row gap-10 mt-8 justify-center'>
                        
                        <div className='flex flex-col '>  
                        <div  className='flex flex-col items-center p-8 gap-8'>
                            <img className='rounded-full' src="../img/landing/image-emily.jpg" alt="" />
                            <p className='font-barlow font-semibold text-[#B0B0B0] text-center w-3/4 '>Sunnyside`s enthusiasm coupled with their keen interest in our brand`s sucess made it a satisfying and enjoyable experience.</p>
                        <div className='flex flex-col items-center gap-1.5'>
                        <p className='font-bold font-fraunces'>Emily R.</p>
                        <p className='font-barlow font-semibold text-xs text-[#B0B0B0]'>Marketing Director</p>
                        </div>
                        </div>
                        </div>

                        <div className='flex flex-col'>  
                        <div  className='flex flex-col items-center p-8 gap-8'>
                            <img className='rounded-full' src="../img/landing/image-thomas.jpg" alt="" />
                            <p className='font-barlow font-semibold text-[#B0B0B0] text-center  w-3/4 '>Sunnyside`s enthusiasm coupled with their keen interest in our brand`s sucess made it a satisfying and enjoyable experience.</p>
                        <div className='flex flex-col items-center gap-1.5'>
                            <p className='font-bold font-fraunces'>Thomas S.</p>
                            <p className='font-barlow font-semibold text-xs text-[#B0B0B0]'>Chief Operating Officer</p>
                        </div>
                        </div>
                        </div>

                        <div className='flex flex-col'>  
                        <div  className='flex flex-col items-center p-8 gap-8'>
                            <img className='rounded-full' src="../img/landing/image-jennie.jpg" alt="" />
                            <p className='font-barlow font-semibold text-[#7B7B7D] text-center  w-3/4 '>Sunnyside`s enthusiasm coupled with their keen interest in our brand`s sucess made it a satisfying and enjoyable experience.</p>
                        <div className='flex flex-col items-center gap-1.5'>
                            <p className='font-bold font-fraunces'>Jennie F.</p>
                            <p className='font-barlow font-semibold text-xs text-[#B0B0B0]'>Business Owner</p>
                        </div>
                        </div>
                        </div>
                        </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4'>
                    <img src="../img/landing/desktop/image-gallery-milkbottles.jpg" alt="" />
                    <img src="../img/landing/desktop/image-gallery-orange.jpg" alt="" />
                    <img src="../img/landing/desktop/image-gallery-cone.jpg" alt="" />
                    <img src="../img/landing/desktop/image-gallery-sugarcubes.jpg" alt="" />    
                </div>

                <div className='bg-[#90D4C5i]'>
                <div className='flex flex-col gap-4 items-center m-12'>           
                    <div>
                    <svg width="124" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z"
                    fill="#377E70" fill-rule="nonzero"/>
                    </svg>
                    </div>

                    <div className='flex flex-row gap-8 py-4'>
                    <h1 className='font-barlow font-semibold text-[#2B7564] hover:text-white'>About</h1>
                    <h1 className='font-barlow font-semibold text-[#2B7564] hover:text-white'>Services</h1>
                    <h1 className='font-barlow font-semibold text-[#2B7564] hover:text-white'>Projects</h1>
                    </div>

                    <div className='flex flex-row items-center  gap-6 mt-2  '>
                    <svg class="w-5 h-5 text-[#2B7564] hover:text-white" fill="currentColor" stroke="none" viewBox="0 0 20 20">
                    <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" 
                    />
                    </svg>
                    <svg class="w-5 h-5 text-[#2B7564] hover:text-white" fill="currentColor" stroke="none" viewBox="0 0 20 20">
                    <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                    />
                    </svg>
                    <svg class="w-5 h-5 text-[#2B7564] hover:text-white" fill="currentColor" stroke="none" viewBox="0 -2 20 20">
                    <path d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z" 
                    />
                    </svg>
                    <svg class="w-5 h-5 text-[#2B7564] hover:text-white" fill="currentColor" stroke="none" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" 
                    />
                    </svg>
                
                    </div>
                </div>
                </div>

                </div>
    </div>
  )
}
