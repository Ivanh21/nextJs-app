'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Typewriter } from "./typewriter";
import Carrousel from "./carrousel";
import Materiel from "./materiel";
import Testimonial from "./testimonial";
import Email from "./email";



export default function Main(){
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

    return (
    <main className="w-full space-y-40">
      <section className="flex flex-col justify-between max-lg:space-y-16 w-full px-4 lg:px-16 pt-16 max-lg:pt-32 max-md:pt-44" id="home">

      <div className="w-full flex flex-col justify-between items-center animation-item">
        <div className="w-full flex justify-between items-center">
          <div className="max-lg:w-full w-[60%] flex flex-col space-y-6 max-lg:space-y-12">
            <h1 className="text-4xl font-bold max-lg:text-3xl">Bienvenue !</h1>
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-bold max-lg:text-2xl"><strong>Je suis FIDELY GEMAEL NGOLION-GONDIO</strong></h1>
              <div className="h-6">
                <h1 className="text-3xl font-bold max-lg:text-2xl">
                <Typewriter words={['Ingénieur en Génie Civil', 'Co-fondateur de Turkey Healthcare Group', 'Directeur pour la région Afrique']} />
              </h1>
              </div>
            </div>
            <p className="text-justify text-gray-500">Professionnel engagé dans le développement des infrastructures et de la santé sur le continent africain, Je combine expertise en génie civil et vision stratégique pour bâtir des partenariats durables. En tant que co-fondateur du Turkey Healthcare Group, j’œuvre pour améliorer l’accès aux soins innovants à travers la collaboration internationale.</p>
            <div className="flex space-x-8">
              <a href="#work" className="p-4 bg-[#006bff] rounded-full text-white text-center max-lg:text-md">En savoir plus</a>

              {/* <a href="#" className="p-4 border border-[#006bff] rounded-full text-center max-lg:text-md">Télécharger mon CV</a> */}
              {/* <div className="flex flex-col space-y-2">
                <span>Call us (000)XXX-XXX</span>
                <p className="text-gray-500">For any question or concern</p>
              </div> */}
            </div>
          </div>

        {/* <div className="absolute top-[-1rem] right-[-2rem] flex justify-center">
          <Image
          width={50}
          height={50}
          src="/images/shape/shape-01.svg"
          alt="Construction"
          />
        </div>

        <div className="absolute top-[-0.5rem] right-[24rem] flex justify-center">
          <Image
          width={50}
          height={50}
          src="/images/shape/shape-02.svg"
          alt="Construction"
          
          
            />
        </div> */}

          <div className="w-[40%] flex justify-center max-md:hidden">
               <Image 
                width={450}
                height={300}
                src="/images/icon/white.png"
                alt="Logo"
                /> 
          </div>

        </div>
          {/* <div className="hidden xl:flex relative">
            
                <Image 
                width={750}
                height={684}
                src="/images/shape/shape-04.svg"
                alt="Logo"
                className="absolute top-[180%] left-0"
                />    
          
             <div>
                <Image 
                width={100}
                height={40}
                src="/images/shape/shape-01.svg"
                className="absolute top-64 left-[-65px]"
                alt="Logo"
                />
            </div>
 
          </div> */}
      </div>

      <div className="flex w-full max-lg:flex-wrap items-center lg:justify-between justify-center max-lg:gap-8 max-md:flex-col max-md:gap-16">
        <div className="max-md:w-full flex items-center space-x-4">
        <div className="bg-[#F57] p-4 rounded-full">
        <Image
          width={36}
          height={36}
          src="images/icon/icon-01.svg"
          alt="Logo"
        />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Cutting-edge Features</span>
          <p className="text-sm text-justify w-52 text-gray-500">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
        </div>

        <div className="max-md:w-full flex items-center space-x-4">
        <div className="bg-[#4DB355] p-4 rounded-full">
        <Image
          width={36}
          height={36}
          src="images/icon/icon-02.svg"
          alt="Logo"
        />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">10+ Useful Integrations</span>
          <p className="text-sm text-justify w-52 text-gray-500">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
        </div>

        <div className="max-md:w-full flex items-center space-x-4">
        <div className="bg-[#F57F47] p-4 rounded-full">
        <Image
          width={36}
          height={36}
          src="images/icon/icon-03.svg"
          alt="Logo"
        />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">High-quality Modern Design</span>
          <p className="text-sm text-justify w-52 text-gray-500">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
        </div>
        </div>
      </section>


      <section className="flex flex-col space-y-16 justify-center items-center" id="work">
        <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-4 px-2 max-lg:px-4">
            <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl text-center">Pourquoi travailler avec NG ?</h1>
            <p className="text-center text-sm text-gray-500">Nous vous proposons de nombreux services pour satisfaire vos besoins et nous vous accompagnons à la réalisation de vos projets.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 px-4  lg:px-24">
            <div className="flex max-md:flex-col items-center justify-center">
              <div className="w-[40%] max-lg:w-full menu-item rounded-lg p-4">
              <Image
                width={50}
                height={50}
                src="/images/icon/icon-04.svg"
                alt="Logo"
              />
              <div className="flex flex-col space-y-6 pt-6">
                <span className="text-lg font-bold">Services sanitaires & Tourisme médical</span>
                <p className="text-sm text-gray-500">Travailler avec nous, c’est garantir à vos patients un soin de qualité, en toute sécurité et dans la dignité.</p>
              </div>
              </div>

            <div className="w-[40%] max-lg:w-full p-4 menu-item rounded-lg">
              <Image
                width={50}
                height={50}
                src="/images/icon/icon-05.svg"
                alt="Logo"
              />
              <div className="flex flex-col space-y-6 pt-6">
                <span className="text-lg font-bold">Fourniture de Matériel Médical et de Laboratoire</span>
                <p className="text-sm text-gray-500">Vous n’achetez pas seulement du matériel, vous achetez un accompagnement et une garantie de performance.</p>
              </div>
            </div>

            <div className="w-[40%] max-lg:w-full p-4 menu-item rounded-lg">
              <Image
                width={50}
                height={50}
                src="/images/icon/icon-06.svg"
                alt="Logo"
              />
              <div className="flex flex-col space-y-6 pt-6">
                <span className="text-lg font-bold">Matériel de Construction & Finition</span>
                <p className="text-sm text-gray-500">Vous construisez mieux, plus vite et à moindre coût, avec une vision à long terme.</p>
              </div>
            </div>
            </div>

            <div className="flex max-md:flex-col items-center justify-center">
              <div className="w-[40%] max-lg:w-full menu-item rounded-lg p-4">
              <Image
                width={50}
                height={50}
                src="/images/icon/icon-07.svg"
                alt="Logo"
              />
              <div className="flex flex-col space-y-6 pt-6">
                <span className="text-lg font-bold">Voyages d’Affaires en Turquie</span>
                <p className="text-sm text-gray-500">Avec nous, vous ne visitez pas la Turquie : vous y bâtissez des opportunités concrètes.</p>
              </div>
              </div>

            <div className="w-[40%] max-lg:w-full menu-item rounded-lg p-4">
              <Image
                width={50}
                height={50}
                src="/images/icon/icon-08.svg"
                alt="Logo"
              />
              <div className="flex flex-col space-y-6 pt-6">
                <span className="text-lg font-bold">Projets en Afrique</span>
                <p className="text-sm text-gray-500">Vous ne travaillez pas avec un prestataire, mais avec un partenaire engagé pour le développement du continent.</p>
              </div>
            </div>

            {/* <div className="w-[40%] p-4 max-lg:w-full menu-item rounded-lg">
              <Image
                width={50}
                height={50}
                src="/images/icon/icon-09.svg"
                alt="Logo"
              />
              <div className="flex flex-col space-y-6 pt-6">
                <span className="text-lg font-bold">Regular Updates</span>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
              </div>
            </div> */}
            </div>
        </div>
      </section>


    <section className="w-full flex flex-col space-y-16 justify-center lg:px-16" id="brand">
      <div className="flex flex-col justify-center items-center space-y-4 px-2 max-lg:px-4">
        <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">Trusted by Global Brands</h1>
        <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
      </div>
      {/* <div className="w-full flex max-lg:flex-col max-lg:space-y-8 justify-center items-center lg:space-x-16">
        
        <div className="flex items-center justify-center space-x-4 md:space-x-16">
          <Image
          width={100}
          height={44}
          src="/images/brand/brand-light-01.svg"
          alt="logitech"
          />
        
          <Image
          width={100}
          height={44}
          src="/images/brand/brand-light-02.svg"
          alt="logitech"
          />
          
          <Image
          width={100}
          height={44}
          src="/images/brand/brand-light-03.svg"
          alt="logitech"
          />
        
        </div>

        <div className="flex justify-center items-center space-x-4 md:space-x-16">

          <Image
          width={100}
          height={44}
          src="/images/brand/brand-light-04.svg"
          alt="logitech"
          />
      
          <Image
          width={100}
          height={44}
          src="/images/brand/brand-light-05.svg"
          alt="logitech"
          />

          <Image
          width={100}
          height={44}
          src="/images/brand/brand-light-06.svg"
          alt="logitech"
          />
  

        </div>
      </div> */}
      <div className="border-b border-gray-300 px-24"></div>
    </section>

    <section className="w-full flex flex-col space-y-16 project-item p-2 lg:pt-12 lg:pb-12" id="project">
      <Carrousel />
    </section>



    {/* <section className="w-full flex flex-col space-y-16 materiel-item p-2 lg:p-12" id="">
      <Materiel />
    </section> */}


    <section className="w-full flex flex-col space-y-16 p-4 lg:p-12">
      <Testimonial />
    </section>


      <section className="contact w-full p-4 lg:p-12 flex flex-col justify-end space-y-16" id="contact">
          <Email />
      </section>
      {show && (
      <div className="absolute">
        <a href="#home"
          className="fixed bottom-6 right-4 p-3 rounded-md bg-[#006bff] text-white shadow-lg hover:bg-blue-700 transition"
          aria-label="Scroll to top"
        >
        <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    )}

    </main>
    );
}