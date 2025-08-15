'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      name: 'Devid Smith',
      role: 'Co-founder of Turkey Healthcare Group',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: '/images/icon/portrait.jpg',
      logo: '/images/brand/brand-light-01.svg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Surgeon at Istanbul Care',
      text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      image: '/images/icon/wife.jpg',
      logo: '/images/brand/brand-light-02.svg',
    },
    {
      name: 'Ali Yılmaz',
      role: 'Patient & Entrepreneur',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      image: '/images/icon/vision.jpg',
      logo: '/images/brand/brand-light-03.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, nextSlide]);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col space-y-16">
      <div className="flex flex-col justify-center items-center space-y-4 px-2">
        <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl">
          Avis des clients
        </h1>
      </div>

      <div className="w-full flex flex-col justify-center space-y-8 lg:px-24">
        <div className="w-full flex max-md:flex-col max-md:space-y-8 p-8 dark:bg-[#1c2136] rounded-lg md:space-x-16 testimonial">
          <div className="relative h-72 w-[30%] max-lg:w-full">
            <Image
              fill
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-between max-lg:space-y-8 lg:w-[70%]">
            <div className="flex flex-col space-y-4">
              <Image
                src={`/images/icon/icon-quote.svg`}
                width={50}
                height={50}
                alt="Quote"
              />
              <p className="text-2xl font-bold text-gray-600 italic">
                {testimonial.text}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-1">
                <h1 className="text-lg font-bold">{testimonial.name}</h1>
                <p className="text-sm font-bold text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className="flex justify-center items-center">
            <button onClick={prevSlide}>
              <i className="fa-solid fa-arrow-left size-12 border border-gray-500 rounded-full p-4 text-gray-500 hover:bg-[#006bff] hover:border-[#006bff] hover:text-white"></i>
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button onClick={nextSlide}>
              <i className="fa-solid fa-arrow-right size-12 border border-gray-500 rounded-full p-4 text-gray-500 hover:bg-[#006bff] hover:border-[#006bff] hover:text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






// 'use client';

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function Testimonial(){
//     const testimonials = [
//   {
//     name: 'Devid Smith',
//     role: 'Co-founder of Turkey Healthcare Group',
//     text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//     image: '/images/icon/portrait.jpg',
//     logo: '/images/brand/brand-light-01.svg',
//   },
//   {
//     name: 'Sarah Johnson',
//     role: 'Lead Surgeon at Istanbul Care',
//     text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
//     image: '/images/icon/wife.jpg',
//     logo: '/images/brand/brand-light-02.svg',
//   },
//   {
//     name: 'Ali Yılmaz',
//     role: 'Patient & Entrepreneur',
//     text: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
//     image: '/images/icon/vision.jpg',
//     logo: '/images/brand/brand-light-03.svg',
//   },
//  ];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Auto-scroll every 5 seconds
//   useEffect(() => {
//     timeoutRef.current = setTimeout(nextSlide, 5000);
//     return () => clearTimeout(timeoutRef.current!);
//   }, [currentIndex]);

//   const testimonial = testimonials[currentIndex];
    
//         return(
//             <div className="flex flex-col space-y-16">
//                 <div className="flex flex-col justify-center items-center space-y-4 px-2">
//                     <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl ">Avis des clients</h1>
//                 </div>
//                 <div className="w-full flex flex-col justify-center space-y-8 lg:px-24">
                
//                 <div className="w-full flex max-md:flex-col max-md:space-y-8 p-8 dark:bg-[#1c2136] rounded-lg md:space-x-16 testimonial">
//                     <div className="relative h-72 w-[30%] max-lg:w-full">
//                         <Image 
//                             layout="fill"
//                             src={testimonial.image}
//                             alt={testimonial.name}
//                             objectFit="cover"
//                             className="rounded-2xl"
//                         />
//                     </div>

//                     <div className="flex flex-col justify-between max-lg:space-y-8 lg:w-[70%]">
//                         <div className="flex flex-col space-y-4">
//                             <Image
//                             src={`/images/icon/icon-quote.svg`}
//                             width={50}
//                             height={50}
//                             alt="Quote"
//                             />
//                             <p className="text-2xl font-bold text-gray-600 italic">{testimonial.text}</p>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <div className="flex flex-col space-y-1">
//                                 <h1 className="text-lg font-bold">{testimonial.name}</h1>
//                                 <p className="text-sm font-bold text-gray-500">{testimonial.role}</p>
//                             </div>

//                             {/* <Image
//                             src={testimonial.logo}
//                             width={100}
//                             height={50}
//                             alt="Quote"
//                             /> */}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex items-center justify-center space-x-4">
//                     <div className="flex justify-center items-center">
//                         <button   onClick={prevSlide}>
//                             <i className="fa-solid fa-arrow-left size-12 border border-gray-500 rounded-full size-12 p-4 text-gray-500 hover:bg-[#006bff] hover:border-[#006bff] hover:text-white"></i>
//                         </button>
//                     </div>

//                     <div className="flex justify-center items-center">
//                         <button onClick={nextSlide}>
//                             <i className="fa-solid fa-arrow-right size-12 border border-gray-500 rounded-full size-12 p-4 text-gray-500 hover:bg-[#006bff] hover:border-[#006bff] hover:text-white"></i>
//                         </button>
//                     </div>
//                 </div>
//                 </div>
                      
//             </div>
//         );
// }