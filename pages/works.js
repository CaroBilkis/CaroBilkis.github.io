import React from 'react'
import CardChallenges from '../components/CardChallenges';
import CardJobs from '../components/CardJobs'
import Menu from '../components/menu'

export default function Works() {
    const data = [
      {
      title:"La Rivera",
      place: "GorillaSite",
      img: "/img/larivera.com_es_ desktop.png",
      color:"card-impar ",
      link:"https://larivera.com/es/"
    },
    {
      title:"La Rivera",
      place: "GorillaSite",
      img: "/img/masterplan.png",
      color:"card-par ",
      link:"https://larivera.com/es/"
    },
  
    {
      title:"La Rivera",
      place: "GorillaSite",
      img: "/img/blog_gorilla.png",
      color:"card-impar ",
      link:"https://larivera.com/es/"
    },
  
    {
      title:"La Rivera",
      place: "GorillaSite",
      img: "/img/welfi_blog.png",
      color:"card-par ",
      link:"https://larivera.com/es/"
    },
  
    {
      title:"La Rivera",
      place: "GorillaSite",
      img: "/img/customer.png",
      color:"card-impar ",
      link:"https://larivera.com/es/"
    },
  
    {
      title:"La Rivera",
      place: "DTE, DCGyEC, BsAs",
      img: "/img/golazo.abc.gob.ar.png",
      color:"card-par ",
      link:"https://larivera.com/es/"
    },
  
    {
      title:"La Rivera",
      place: "GorillaSite",
      img: "/img/asociacionanahi.org.ar_.png",
      color:"card-impar ",
      link:"https://larivera.com/es/"
    },
    ];

    const challengesData = [
      {title:"Advice generator", 
      description:"TailwindCSS, API",
      img:"/img/advice/preview.png", 
      link:"/challenges/advice",
      color:"card-challenges-impar",
      },
      {title:"Dropwond generator", 
      description:"TailwindCSS, API",
      img:"/img/dropdown/preview.png", 
      link:"/challenges/dropdown",
      color:"card-challenges-par",
      },
     
      {title:"Tracking", 
      description:"TailwindCSS, API",
      img:"/img/tracking/preview.png", 
      link:"/challenges/tracking",
      color:"card-challenges-impar",
      },
      {title:"Landing page", 
      description:"TailwindCSS, API",
      img:"/img/landing/preview.png", 
      link:"/challenges/landing",
      color:"card-challenges-par",
      },
      {title:"Faq", 
      description:"TailwindCSS, API",
      img:"/img/faq/preview.png", 
      link:"/challenges/faq",
      color:"card-challenges-impar",
      },
      {title:"Landing page", 
      description:"TailwindCSS, API",
      img:"/img/landing/preview.png", 
      link:"/challenges/landing",
      color:"card-challenges-par",
      },
      {title:"Tips calculator", 
      description:"TailwindCSS, API",
      img:"/img/tips/preview.png", 
      link:"/challenges/tips",
      color:"card-challenges-impar",
      },
     
      {title:"QR", 
      description:"TailwindCSS, API",
      img:"/img/qr/preview.png", 
      link:"/challenges/qr",
      color:"card-challenges-par",
      },
      
      {title:"Calculator", 
      description:"TailwindCSS, API",
      img:"/img/calculator/preview.png", 
      link:"/challenges/calculator",
      color:"card-challenges-par",
      }
    ]
  return (
    <div className="flex flex-col  w-full h-full items-center justify-center  bg-[#fafafa] px-20 pb-20 ">

    <Menu/>
    <div className='flex flex-col gap-20'>
    <div className='flex flex-col gap-4'>
      <h2 className="lg:text-3xl text-2xl font-medium ">Work</h2>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 w-full gap-x-40 gap-y-20 font-clash">
        {data.map(({title, link,img, place, color, id}) => (
          <CardJobs key={id} link={link} title={title} img={img} color={color} place={place}/>
        ))}
      </div>
     </div>

    <div className='flex flex-col gap-4 items-start'>
      <h2 className="lg:text-3xl text-2xl font-medium ">Front-end challenges</h2>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 w-full gap-x-40 gap-y-20 font-clash">
        {challengesData.map(({title, link,img, place, color, id}) => (
          <CardChallenges key={id} link={link} title={title} img={img} color={color} place={place}/>
        ))}
      </div>
    </div>
     
   </div>
    </div>
  )
}
