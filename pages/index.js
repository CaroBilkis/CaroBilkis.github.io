import CardJobs from "../components/CardJobs"

import Menu from "../components/menu"
import Image from 'next/image'

export default function Home() {

  const data = [
    {
    title:"La Rivera",
    place: "GorillaSite",
    img: "/img/larivera.com_es_ desktop.png",
    color:"bg-indigo-500 ",
    link:"https://larivera.com/es/"
  },
  {
    title:"La Rivera",
    place: "GorillaSite",
    img: "/img/masterplan.png",
    color:"bg-lime-500 ",
    link:"https://larivera.com/es/"
  },

  {
    title:"La Rivera",
    place: "GorillaSite",
    img: "/img/blog_gorilla.png",
    color:"xl:bg-lime-500 bg-indigo-500 ",
    link:"https://larivera.com/es/"
  },

  {
    title:"La Rivera",
    place: "GorillaSite",
    img: "/img/welfi_blog.png",
    color:"bg-indigo-500 ",
    link:"https://larivera.com/es/"
  },

  {
    title:"La Rivera",
    place: "GorillaSite",
    img: "/img/customer.png",
    color:"bg-lime-500 xl:bg-indigo-500 ",
    link:"https://larivera.com/es/"
  },

  {
    title:"La Rivera",
    place: "DTE, DCGyEC, BsAs",
    img: "/img/golazo.abc.gob.ar.png",
    color:"bg-lime-500 ",
    link:"https://larivera.com/es/"
  },

  {
    title:"La Rivera",
    place: "GorillaSite",
    img: "/img/asociacionanahi.org.ar_.png",
    color:"bg-lime-500 ",
    link:"https://larivera.com/es/"
  },
  ];
  
  return (
   <div className="flex flex-col  w-full h-full items-center justify-center  bg-[#fafafa] px-20 pb-20 ">

    <Menu/>
   
      <div className="grid xl:grid-cols-2 w-full gap-x-40 gap-y-20 font-clash">
        <div className="flex flex-col gap-10 w-full items-center justify-center p-8 rounded-xl border border-black">
         <div className="flex flex-col gap-4">
          <h1 className="lg:text-[40px] text-3xl font-medium "> ¡Hola! Soy Carolina Bilkis, diseñadora multimedial y desarrolladora frontend</h1>
            <p>Tengo 24 años y soy Lic. en Diseño Multimedial.
                Me especializo en el diseño y desarrollo de páginas web y experiencias lúdico interactivas.
                Tengo mucho interés en la educación, tecnología y el aprendizaje a través del juego.</p>
         </div>
         <div className="flex flex-row justify-between w-full">
         <button className="py-2 px-4 bg-black text-white rounded-full">Contact me</button>

         <div className="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/carolina-bilkis/" className="border border-black  p-2 rounded-full group hover:bg-black hover:border-white">
              <svg className="text-black group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/carolina-bilkis/" className="border border-black  p-2 rounded-full group hover:bg-black hover:border-white">
            <svg className="text-black group-hover:text-white"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.357 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z" fill="currentColor"/>
            </svg>

            </a>

            <a href="https://www.linkedin.com/in/carolina-bilkis/" className="border border-black  p-2 rounded-full group hover:bg-black hover:border-white">
            <svg className="text-black group-hover:text-white"  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_109_216)">
              <path d="M20 0C21.2396 0 22.2995 0.440104 23.1797 1.32031C24.0599 2.20052 24.5 3.26042 24.5 4.5V19.5C24.5 20.7396 24.0599 21.7995 23.1797 22.6797C22.2995 23.5599 21.2396 24 20 24H5C3.76042 24 2.70052 23.5599 1.82031 22.6797C0.940104 21.7995 0.5 20.7396 0.5 19.5V4.5C0.5 3.26042 0.940104 2.20052 1.82031 1.32031C2.70052 0.440104 3.76042 0 5 0H20ZM8.29688 5.73438H2.5V18.0312H8.46875C9.6875 18.0312 10.7135 17.7318 11.5469 17.1328C12.3802 16.5339 12.7969 15.6458 12.7969 14.4688C12.7969 12.8229 12.0521 11.7812 10.5625 11.3438C11.6771 10.8021 12.2344 9.94792 12.2344 8.78125C12.2344 8.1875 12.1328 7.6849 11.9297 7.27344C11.7266 6.86198 11.4323 6.54688 11.0469 6.32812C10.6615 6.10938 10.25 5.95573 9.8125 5.86719C9.375 5.77865 8.86979 5.73438 8.29688 5.73438ZM7.95312 10.7031H5.20312V7.82812H7.75C8.98958 7.82812 9.60938 8.29688 9.60938 9.23438C9.60938 10.2135 9.05729 10.7031 7.95312 10.7031ZM8.09375 15.9375H5.20312V12.5469H8.15625C9.44792 12.5469 10.0938 13.1354 10.0938 14.3125C10.0938 15.3958 9.42708 15.9375 8.09375 15.9375ZM18.25 16.4375C17.5417 16.4375 17 16.2396 16.625 15.8438C16.25 15.4479 16.0625 14.8906 16.0625 14.1719H22.4844C22.4948 14.0677 22.5 13.9115 22.5 13.7031C22.5 12.3281 22.112 11.1797 21.3359 10.2578C20.5599 9.33594 19.5 8.875 18.1562 8.875C16.8229 8.875 15.7292 9.32292 14.875 10.2188C14.0208 11.1146 13.5938 12.2396 13.5938 13.5938C13.5938 15 14.0052 16.1302 14.8281 16.9844C15.651 17.8385 16.7604 18.2656 18.1562 18.2656C20.2917 18.2656 21.6823 17.2708 22.3281 15.2812H20.1719C20.0573 15.6354 19.8099 15.9167 19.4297 16.125C19.0495 16.3333 18.6562 16.4375 18.25 16.4375ZM18.0938 10.7188C19.2708 10.7188 19.9167 11.3542 20.0312 12.625H16.0625C16.1042 12.0417 16.3073 11.5781 16.6719 11.2344C17.0365 10.8906 17.5104 10.7188 18.0938 10.7188ZM15.5625 6.5625H20.5469V7.76562H15.5625V6.5625Z" fill="currentColor"/>
              </g>
              <defs>
              <clipPath id="clip0_109_216">
              <rect width="24" height="24" fill="none" transform="translate(0.5)"/>
              </clipPath>
              </defs>
              </svg>

            </a>
         </div>
         </div>
        </div>

        <div className="w-full rounded-xl border border-black overflow-hidden">
            <img className="w-full h-full object-cover aspect-[4/3]" src="/img/profile.png" alt="" />
        </div>

        
       
      {data.map(({title, link,img, place, color, id}) => (
        <CardJobs key={id} link={link} title={title} img={img} color={color} place={place}/>
      ))}
      </div>

        

     
   </div>
  )
}
