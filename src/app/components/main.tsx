'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Typewriter } from "./typewriter";



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
      <section className="flex flex-col justify-between max-lg:space-y-16 w-full px-2 lg:px-16 pt-16 max-lg:pt-32 max-md:pt-52" id="home">

      <div className="w-full flex flex-col justify-between items-center animation-item">
        <div className="w-full flex justify-between items-center">
          <div className="max-lg:w-full w-[60%] flex flex-col space-y-6">
            <h1 className="text-4xl font-bold max-lg:text-3xl">Salut 👋</h1>
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold max-lg:text-2xl"><strong>Je suis FIDELY GEMAEL NGOLIO-NGONDIO</strong></h1>
              <div className="h-6">
                <h1 className="text-3xl font-bold max-lg:text-2xl animate-blink">
                <Typewriter words={['Ingénieur en Génie Civil', 'Co-fondateur de Turkey Healthcare Group', 'Directeur pour la région Afrique']} />
              </h1>
              </div>
            </div>
            <p className="lg:text-justify text-gray-500">Professionnel engagé dans le développement des infrastructures et de la santé sur le continent africain, Je combine expertise en génie civil et vision stratégique pour bâtir des partenariats durables. En tant que co-fondateur du Turkey Healthcare Group, j’œuvre pour améliorer l’accès aux soins innovants à travers la collaboration internationale.</p>
            <div className="flex space-x-8">
              <a href="#work" className="p-4 bg-[#006bff] rounded-full text-white text-center max-lg:text-md">En savoir plus</a>
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
          <div className="flex flex-col space-y-4 px-2">
            <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl text-center">Pourquoi travailler avec NG ?</h1>
            <p className="text-center text-sm text-gray-500">Nous vous proposons de nombreux services pour satisfaire vos besoins et nous vous accompagnons à la réalisation de vos projets.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 lg:px-24">
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
      <div className="flex flex-col justify-center items-center space-y-4 px-2">
        <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl">Trusted by Global Brands</h1>
        <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
      </div>
      <div className="w-full flex max-lg:flex-col max-lg:space-y-8 justify-center items-center space-x-16">
        
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
      </div>
      <div className="border-b border-gray-300 px-24"></div>
    </section>

    <section className="w-full flex flex-col space-y-16" id="project">
      <div className="flex flex-col justify-center items-center space-y-4 px-2">
          <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl ">Latest Projects</h1>
          <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
        </div>
      {/* <div className="flex w-full px-16">
          <div className="project flex flex-col justify-center space-y-6 items-center rounded-xl p-4">
              <div className="flex">
                <Image
                width={100}
                height={44}
                src="/images/icon/black-preview.png"
                alt="logitech"
                />
              </div>
              <div className="w-full flex space-x-8 items-center">
                <h2 className="text-md font-semibold text-gray-500">Juhan Ahamed</h2>
                <h2 className="text-md font-semibold text-gray-500">Aug 28 2024</h2>
              </div>
              <div className="w-full flex items-center">
                <a href="#" className="font-bold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </div>
          </div>
      </div> */}
      <div className="w-full px-16 flex lg:space-x-4 max-lg:flex-col max-lg:items-center max-lg:space-y-4 overflow-x-auto">
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="relative h-96 w-full">
          <Image
            src="/images/icon/dentist.jpg" // remplace par ton image
            alt="Vaccine vials"
            layout="fill"
            objectFit="cover"
          />
          {/* Play Button */}
          <div className="absolute top-6 right-6">
            <div className="relative w-[40px] h-[40px]">
              <span className="pulse-ring"></span> {/* Cercle animé */}
              <div className="bg-[#006bff] rounded-full p-2 cursor-pointer relative z-1">
                <Image
                  width={40}
                  height={40}
                  src="/images/icon/icon-play.svg"
                  alt="logitech"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Caption */}
        <div className="p-4 bg-gray-700 text-white text-sm font-medium">
          Lorem ipsum dolor sit amet conse adipiscing elit.
        </div>
      </div>

        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="relative h-96 w-full">
          <Image
            src="/images/icon/doctor.jpg" // remplace par ton image
            alt="Vaccine vials"
            layout="fill"
            objectFit="cover"
          />
          {/* Play Button */}
          <div className="absolute top-6 right-6">
            <div className="relative w-[40px] h-[40px]">
              <span className="pulse-ring"></span> {/* Cercle animé */}
              <div className="bg-[#006bff] rounded-full p-2 cursor-pointer relative z-1">
                <Image
                  width={40}
                  height={40}
                  src="/images/icon/icon-play.svg"
                  alt="logitech"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="p-4 bg-gray-700 text-white text-sm font-medium">
          Lorem ipsum dolor sit amet conse adipiscing elit.
        </div>
      </div>

      <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="relative h-96 w-full">
          <Image
            src="/images/icon/worker.jpg" // remplace par ton image
            alt="Vaccine vials"
            layout="fill"
            objectFit="cover"
          />
          {/* Play Button */}
          <div className="absolute top-6 right-6">
            <div className="relative w-[40px] h-[40px]">
              <span className="pulse-ring"></span> {/* Cercle animé */}
              <div className="bg-[#006bff] rounded-full p-2 cursor-pointer relative z-1">
                <Image
                  width={40}
                  height={40}
                  src="/images/icon/icon-play.svg"
                  alt="logitech"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="p-4 bg-gray-700 text-white text-sm font-medium">
          Lorem ipsum dolor sit amet conse adipiscing elit.
        </div>
      </div>

        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="relative h-96 w-full">
          <Image
            src="/images/icon/plane.jpg" // remplace par ton image
            alt="Vaccine vials"
            layout="fill"
            objectFit="cover"
          />
          {/* Play Button */}
          <div className="absolute top-6 right-6">
            <div className="relative w-[40px] h-[40px]">
              <span className="pulse-ring"></span> {/* Cercle animé */}
              <div className="bg-[#006bff] rounded-full p-2 cursor-pointer relative z-1">
                <Image
                  width={40}
                  height={40}
                  src="/images/icon/icon-play.svg"
                  alt="logitech"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="p-4 bg-gray-700 text-white text-sm font-medium">
          Lorem ipsum dolor sit amet conse adipiscing elit.
        </div>
      </div>
      </div>
    </section>

      <section className="contact w-full p-4 lg:p-12 flex flex-col justify-end space-y-16" id="contact">
          
        <div className="flex flex-col justify-center items-center space-y-4 px-2">
          <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl ">Lets Stay Connected</h1>
          <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
        </div>
        

        <div className="flex w-full max-md:flex-col max-md:space-y-8 md:space-x-8 md:px-8 lg:px-24">
            <div className="w-[25%] max-lg:w-[50%] max-md:w-full block-contact social-media p-8 rounded-xl">
              <div className="flex flex-col space-y-10">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Email Address</h2>
                    <a href="mailto:support@startup.com" className="text-gray-500">support@startup.com</a>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Office location</h2>
                  <a href="#" className="text-gray-500">76/A, Green valle, Califonia USA.</a>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Phone number</h2>
                  <a href="tel:+00987543433223" className="text-gray-500">+009 8754 3433 223</a>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Skype Email</h2>
                    <a href="mailto:support@startup.com" className="text-gray-500">support@startup.com</a>
                </div>

                <div className="border border-gray-500"></div>

                <div className="flex flex-col space-y-8">
                  <h2 className="text-lg font-semibold">Social Media</h2>

                <ul className="flex items-center gap-5">
                <li>
                  <a aria-label="Footer Link for Facebook" href="#"
                    ><svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#006bff]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs></svg>
                  </a>
                </li>
                <li>
                  <a aria-label="Footer Link for Twitter" href="#"
                    ><svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#006bff]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1502)">
                        <path
                          d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1502">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs></svg>
                  </a>
                </li>
                <li>
                  <a aria-label="Footer Link for Linkedin" href="#"
                    ><svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#006bff]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs></svg>
                  </a>
                </li>
              </ul>
                </div>
              </div>
            </div>
            <div className="w-[75%] max-lg:w-[50%] max-md:w-full block-contact social-media p-8 rounded-xl">
              <form action="" className="flex flex-col space-y-8">
                <div className="flex max-lg:flex-col justify-between items-center max-lg:space-y-4 lg:space-x-8">
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Full name</label>
                      <input type="text" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="John Smith" required />
                  </div>

                  
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Email address</label>
                      <input type="email" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="exemple@gmail.com" required />
                  </div>
                </div>

                <div className="flex max-lg:flex-col justify-between items-center max-lg:space-y-4 lg:space-x-8">
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Phone Number</label>
                      <input type="text" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="+009 3342 3432" required />
                  </div>

                  
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Subdject</label>
                      <input type="text" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="Type of Subject" required />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Message</label>
                  <textarea name="" id="" cols={30} rows={7} className="w-full p-4 border border-gray-500 hover:border-[#006bff] rounded-lg dark:bg-[#181c31]" placeholder="Message" required></textarea>
                </div>

                <div className="flex justify-center">
                  <button className="bg-[#006bff] p-4 text-white rounded-full">Send Message</button>
                </div>
              </form>
            </div>
        </div>
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