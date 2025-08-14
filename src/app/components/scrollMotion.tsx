"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Projet 1",
    description: "Description du projet 1",
    image: "/images/project/projet-01.jpg"
  },
  {
    title: "Projet 2",
    description: "Description du projet 2",
    image: "/images/project/projet-02.jpg"
  },
  {
    title: "Projet 3",
    description: "Description du projet 3",
    image: "/images/project/projet-03.jpg"
  },
  {
    title: "Projet 4",
    description: "Description du projet 4",
    image: "/images/project/projet-04.jpg"
  }
];

export default function ProjectsHorizontal() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -320 : 320; // largeur carte + marge
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

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
      <div className="relative w-full">
        {/* Bouton gauche */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#006bff] shadow rounded-full p-2 max-md:hidden"
        >
          <i className="fa-solid fa-arrow-left text-xl text-white"></i>
        </button>

        {/* Container scroll horizontal */}
        <div
          ref={scrollRef}
          className="flex md:justify-center md:items-center gap-6 px-6 py-10 overflow-x-auto scroll-smooth no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              className="min-w-[300px] max-w-[300px] bg-white dark:bg-[#1c2136] dark:border dark:border-[#f4f7fa] rounded-xl shadow-lg p-4 flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
              ref={i === 0 ? ref : undefined}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bouton droit */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#006bff] shadow rounded-full p-2 max-md:hidden"
        >
          <i className="fa-solid fa-arrow-right text-xl text-white"></i>
        </button>
      </div>
    </>
  );
}
