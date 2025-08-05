'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Materiel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = ['tools', 'iron', 'laboratory', 'blood', 'dentist', 'doctor', 'worker'];

  // Mesurer dynamiquement la largeur d’un élément
  useEffect(() => {
    if (itemRef.current) {
      const width = itemRef.current.getBoundingClientRect().width;
      setItemWidth(width);
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || itemWidth === 0) return;

    const scrollInterval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
        container.scrollLeft = 0;
      } else {
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, [itemWidth]);

  // Mettre à jour l'index actif pour les indicateurs
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / itemWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [itemWidth]);

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 lg:px-2">
        <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl text-center">
          Matériel médical & de laboratoire
        </h1>
        <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
        </p>
      </div>

      <div className="w-full flex space-x-2 lg:space-x-4 items-center mt-8">
        {/* Bouton gauche */}
        <div className="flex justify-center items-center max-md:hidden">
          <button onClick={() =>
            scrollRef.current?.scrollBy({ left: -itemWidth, behavior: 'smooth' })
          }>
            <i className="fa-solid fa-arrow-left size-12 border border-gray-500 rounded-full p-4 text-gray-500 hover:bg-[#006bff] hover:border-[#006bff] hover:text-white"></i>
          </button>
        </div>

        {/* Carrousel */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-1 scroll-smooth snap-x snap-mandatory"
        >
          {images.map((img, i) => (
            <div
              key={i}
              ref={i === 0 ? itemRef : null}
              className="flex-shrink-0 snap-start 
              w-[90vw] sm:w-[50vw] md:w-[33vw] lg:w-[384px] 
              rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={`/images/icon/${img}.jpg`}
                  alt={`Image ${img}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-4 bg-gray-700 text-white text-sm font-medium">
                Lorem ipsum dolor sit amet conse adipiscing elit.
              </div>
            </div>
          ))}
        </div>

        {/* Bouton droit */}
        <div className="flex justify-center items-center max-md:hidden">
          <button onClick={() =>
            scrollRef.current?.scrollBy({ left: itemWidth, behavior: 'smooth' })
          }>
            <i className="fa-solid fa-arrow-right size-12 border border-gray-500 rounded-full p-4 text-gray-500 hover:bg-[#006bff] hover:border-[#006bff] hover:text-white"></i>
          </button>
        </div>
      </div>

      {/* Indicateurs de position */}
      <div className="flex justify-center w-full mt-4 space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}
