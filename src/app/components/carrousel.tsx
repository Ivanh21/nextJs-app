'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// export default function Carrousel(){
//    const scrollRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = ['dentist', 'doctor', 'worker', 'plane', 'architect', 'surgery', 'istanbul'];
//   const itemWidth = 300; // largeur approximative d’un élément (en px)

//   // Auto-scroll
//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const scrollInterval = setInterval(() => {
//       const maxScrollLeft = container.scrollWidth - container.clientWidth;

//       if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
//         container.scrollLeft = 0;
//       } else {
//         container.scrollBy({ left: itemWidth, behavior: 'smooth' });
//       }
//     }, 5000);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   // Mettre à jour l'index actif
//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const index = Math.round(container.scrollLeft / itemWidth);
//       setActiveIndex(index);
//     };

//     container.addEventListener('scroll', handleScroll);
//     return () => container.removeEventListener('scroll', handleScroll);
//   }, []);

//     return(
//         <>
//             <div className="flex flex-col justify-center items-center space-y-4 lg:px-2">
//                       <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl ">Latest Projects</h1>
//                       <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
//                     </div>
//                   <div className="w-full  flex space-x-2 lg:space-x-4">
                      
//                     <div className="flex justify-center items-center relative">
//                         <button  onClick={() =>
//                         scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
//                       }>
//                         <i className="fa-solid fa-arrow-left size-12 border border-[#006bff] rounded-full size-12 p-4 bg-[#006bff] text-white absolute top-48 left-8 z-10"></i>
//                       </button>
//                     </div>
            
//                      <div
//                     ref={scrollRef}
//                     className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 lg:px-1"
//                     style={{ scrollSnapType: 'x mandatory' }}
//                   >
//                     {['dentist', 'doctor', 'worker', 'plane', 'architect', 'surgery', 'istanbul'].map((img, i) => (
//                       <div
//                         key={i}
//                         className="flex-shrink-0 w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white scroll-snap-align-start"
//                       >
//                         <div className="relative h-96 w-full">
//                           <Image
//                             src={`/images/icon/${img}.jpg`}
//                             alt={`Image ${img}`}
//                             layout="fill"
//                             objectFit="cover"
//                           />
            
//                           {/* Play Button */}
//                           {/* <div className="absolute top-6 right-6">
//                             <div className="relative w-[40px] h-[40px]">
//                               <span className="pulse-ring"></span>
//                               <div className="bg-[#006bff] rounded-full p-2 cursor-pointer relative z-1">
//                                 <Image
//                                   width={40}
//                                   height={40}
//                                   src="/images/icon/icon-play.svg"
//                                   alt="play"
//                                 />
//                               </div>
//                             </div>
//                           </div> */}
//                         </div>
            
//                         <div className="p-4 bg-gray-700 text-white text-sm font-medium">
//                           Lorem ipsum dolor sit amet conse adipiscing elit.
//                         </div>
//                       </div>
//                     ))}
                    
//                   </div>
//                     <div className="flex justify-center items-center relative">
//                       <button onClick={() =>
//                         scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
//                       }>
//                         <i className="fa-solid fa-arrow-right size-12 border rounded-full size-12 p-4 bg-[#006bff] border-[#006bff] text-white absolute top-48 right-8"></i>
//                       </button>
//                     </div>
                    
//                   </div>
//                         {/* Indicateurs de position */}
//                     <div className="flex justify-center w-full mt-4 space-x-2">
//                         {images.map((_, i) => (
//                         <div
//                             key={i}
//                             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                             i === activeIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
//                             }`}
//                         ></div>
//                         ))}
//                     </div>
//         </>
//     );
// }




// export default function Carrousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const itemRef = useRef<HTMLDivElement>(null);
//   const [itemWidth, setItemWidth] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//  const images = ['dentist', 'doctor', 'worker', 'plane', 'architect', 'surgery', 'istanbul'];


//   return (
//     <>
//       <div className="flex flex-col justify-center items-center space-y-4 lg:px-2">
//         <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl text-center">
//           Latest Projects
//         </h1>
//         <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">
//           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
//         </p>
//       </div>

//       <div className="w-full flex space-x-2 lg:space-x-4 items-center mt-8">
        
//         <div className="flex justify-center items-center relative">
//           <button>
//             <i className="fa-solid fa-arrow-left size-12 border rounded-full p-4 bg-[#006bff] border-[#006bff] text-white absolute bottom-0 left-8 z-10"></i>
//           </button>
//         </div>

        
//         <div
//           ref={scrollRef}
//           className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-1 scroll-smooth snap-x snap-mandatory"
//         >
//           {images.map((img, i) => (
//             <div
//               key={i}
//               ref={i === 0 ? itemRef : null}
//               className="flex-shrink-0 snap-start 
//               w-[90vw] sm:w-[50vw] md:w-[33vw] lg:w-[384px] 
//               rounded-lg overflow-hidden shadow-lg bg-white"
//             >
//               <div className="relative h-96 w-full">
//                           <Image
//                             src={`/images/icon/${img}.jpg`}
//                             alt={`Image ${img}`}
//                             layout="fill"
//                             objectFit="cover"
//                           />
            
                          
//                           <div className="absolute top-6 right-6">
//                             <div className="relative w-[40px] h-[40px]">
//                               <span className="pulse-ring"></span>
//                               <div className="bg-[#006bff] rounded-full p-2 cursor-pointer relative z-1">
//                                 <Image
//                                   width={40}
//                                   height={40}
//                                   src="/images/icon/icon-play.svg"
//                                   alt="play"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//               <div className="p-4 bg-gray-700 text-white text-sm font-medium">
//                 Lorem ipsum dolor sit amet conse adipiscing elit.
//               </div>
//             </div>
//           ))}
//         </div>

        
//         <div className="flex justify-center items-center relative">
//           <button>
//             <i className="fa-solid fa-arrow-right size-12 border rounded-full p-4 bg-[#006bff] border-[#006bff] text-white absolute bottom-0 right-8"></i>
//           </button>
//         </div>
//       </div>

      
//     </>
//   );
// }

interface Projet {
  title: string;
  images: string;
}

const images: Projet[] = [
  {
    title:'Rencontre institutionnelle avec la Polyclinique Internationale Sainte-Anne-Marie (PISAM), Abidjan CIV, 2025.',
    images: 'projet-01'
  },
  {
    title:'Rencontre institutionnelle avec la Polyclinique Internationale Sainte-Anne-Marie (PISAM), Abidjan CIV, 2025.',
    images: 'projet-02'
  },
  {
    title:'Rencontre institutionnelle avec la Polyclinique Internationale Sainte-Anne-Marie (PISAM), Abidjan CIV, 2025.',
    images: 'projet-03'
  },
  {
    title:'Rencontre institutionnelle avec la Polyclinique Internationale Sainte-Anne-Marie (PISAM), Abidjan CIV, 2025.',
    images: 'projet-04'
  }
]

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Calcule le décalage pour un slide
  const getScrollOffset = () => {
  if (!scrollRef.current) return 0
  const children = scrollRef.current.children
  if (!children.length) return 0
  return (scrollRef.current.scrollWidth / children.length)
  }


  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const offset = getScrollOffset()
    scrollRef.current.scrollTo({
      left: offset * index,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    setActiveIndex((prev) => {
      const next = prev + 1 >= images.length ? 0 : prev + 1
      scrollToIndex(next)
      return next
    })
  }

  const scrollLeft = () => {
    setActiveIndex((prev) => {
      const next = prev - 1 < 0 ? images.length - 1 : prev - 1
      scrollToIndex(next)
      return next
    })
  }

    const startAutoScroll = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      scrollRight()
    }, 4000)
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Auto scroll every 4s
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     scrollRight()
  //   }, 4000)
  //   return () => clearInterval(interval)
  // }, [])
    useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [])

  // Met à jour l'index actif en fonction du scroll manuel
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      const scrollLeft = scrollRef.current.scrollLeft
      const offset = getScrollOffset()
      const index = Math.round(scrollLeft / offset)
      setActiveIndex(index)
    }

    const container = scrollRef.current
    container?.addEventListener('scroll', handleScroll)
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    
     <div className="flex flex-col justify-center items-center space-y-4 lg:px-2">
        <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl text-center">
          Derniers projets
         </h1>
         <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">
           Un catalogue des derniers projets sur lesquels j’ai travaillé.
        </p>
       </div>
    <div className="w-full flex flex-col items-center relative lg:px-20 mt-8 overflow-hidden">
      {/* Flèche gauche */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10"
      >
        <i className="fa-solid fa-arrow-left size-12 border rounded-full p-4 bg-[#006bff] border-[#006bff] text-white"></i>
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide cursor-pointer px-2 py-4 scroll-smooth snap-x snap-mandatory w-full"
         onMouseEnter={stopAutoScroll}
         onMouseLeave={startAutoScroll}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start 
            w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[33vw] xl:w-[25vw] 
            rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="relative h-72 w-full">
               <Image
                  src={`/images/project/${img.images}.jpg`}
                  alt={`Image ${img.images}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  onClick={() => setSelectedImage(`/images/project/${img.images}.jpg`)}
                />

              {/* <div className="absolute top-6 right-6">
                <div className="relative w-[40px] h-[40px]">
                  <span className="pulse-ring"></span>
                  <div className="bg-[#006bff] rounded-full p-2 cursor-pointer relative z-1">
                    <Image
                      width={40}
                      height={40}
                      src="/images/icon/icon-play.svg"
                      alt="play"
                    />
                  </div>
                </div>
              </div> */}
            </div>
                
            <div className="p-4 bg-gray-700 text-white text-md font-bold text-center">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button
        onClick={scrollRight}
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10"
      >
        <i className="fa-solid fa-arrow-right size-12 border rounded-full p-4 bg-[#006bff] border-[#006bff] text-white"></i>
      </button>

      {/* Indicateurs */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? 'bg-[#006bff]' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>

    {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full p-4">
                <Image
                  src={selectedImage}
                  alt="Aperçu projet"
                  width={1200}
                  height={800}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
    </>
  )
}