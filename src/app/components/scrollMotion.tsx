"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  description: string;
  images: string[];
}



const projects: Project[] = [
  {
    title: "Pharmacie la Maison Blanche",
    description: "Côte d'Ivoire, Abidjan 2025",
    images: ["/images/project/projet-01.jpg", "/images/project/projet-02.jpg", "/images/project/projet-03.jpg", "/images/project/projet-04.jpg"]
  },
   {
    title: "Pharmacie Jagger",
    description: "Congo, Brazzaville 2025",
    images: ["/images/project/projet-01.jpg", "/images/project/projet-02.jpg", "/images/project/projet-03.jpg", "/images/project/projet-04.jpg"]
  },
];

export default function ProjectsHorizontal() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [visibleCount, setVisibleCount] = useState(1); // d'abord 1 projet visible
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null); // 👈 ref sur le container

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  const handleVoirMoins = () => {
    setVisibleCount(1);

    // ramène doucement au premier projet
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollIntoView({ behavior: "smooth" });
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

      <div ref={projectsContainerRef} className="flex flex-col gap-12 px-2 py-10">
        {projects.slice(0, visibleCount).map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            className="w-full p-4"
            ref={i === 0 ? ref : undefined}
          >
            {/* Images sur une ligne */}
            <div className="w-full flex lg:justify-center gap-4 overflow-x-auto no-scrollbar">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Projet ${i + 1}`}
                  className="w-72 h-72 object-cover rounded-lg flex-shrink-0"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

        <div className="flex justify-center gap-4 p-2">
          {visibleCount < projects.length && (
            <button
              onClick={() => setVisibleCount(prev => prev + 2)}
              className="bg-[#006bff] px-6 py-3 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Voir plus
            </button>
          )}

          {visibleCount > 2 && (
            <button
              onClick={handleVoirMoins}
              className="bg-gray-500 px-6 py-3 text-white rounded-xl hover:bg-gray-700 transition"
            >
              Voir moins
            </button>
          )}
        </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)} // fermer en cliquant dehors
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Aperçu projet"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            {/* bouton fermer */}
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
  );
}
