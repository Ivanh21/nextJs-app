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

const images = ['dentist', 'doctor', 'worker', 'plane', 'architect', 'surgery', 'istanbul']

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Calcule le décalage pour un slide
  const getScrollOffset = () => {
    if (!scrollRef.current) return 0
    const firstChild = scrollRef.current.querySelector('div')
    return firstChild?.clientWidth ? firstChild.clientWidth + 16 : 300 // + gap
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

  // Auto scroll every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight()
    }, 4000)
    return () => clearInterval(interval)
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
          Latest Projects
         </h1>
         <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
        </p>
       </div>
    <div className="w-full flex flex-col items-center relative mt-8 overflow-hidden">
      {/* Flèche gauche */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10"
      >
        <i className="fa-solid fa-arrow-left size-12 border rounded-full p-4 bg-[#006bff] border-[#006bff] text-white"></i>
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-2 py-4 scroll-smooth snap-x snap-mandatory w-full"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start 
            w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[33vw] xl:w-[25vw] 
            rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="relative h-96 w-full">
              <Image
                src={`/images/icon/${img}.jpg`}
                alt={`Image ${img}`}
                layout="fill"
                objectFit="cover"
              />

              <div className="absolute top-6 right-6">
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
              </div>
            </div>

            <div className="p-4 bg-gray-700 text-white text-sm font-medium">
              Lorem ipsum dolor sit amet conse adipiscing elit.
            </div>
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button
        onClick={scrollRight}
        className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10"
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
    </>
  )
}