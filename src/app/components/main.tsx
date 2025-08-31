'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Typewriter } from "./typewriter";
import Testimonial from "./testimonial";
import Email from "./email";
import Services from "./services";
import Link from "next/link";
import AnimatedBlock from "./scroll";
import ProjectsHorizontal from "./scrollMotion";
import Carrousel from "./carrousel";
import { useTranslation } from "react-i18next";

export default function Main(){

  const { t } = useTranslation();

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
    <main className="w-full h-full flex flex-col space-y-40">
      <AnimatedBlock>

      <section className="flex flex-col justify-between max-lg:space-y-16 w-full px-4 lg:px-16 pt-16 max-lg:pt-32 max-md:pt-44" id="home">

      <div className="w-full flex flex-col justify-between items-center  space-y-8">
        <div className="w-full flex justify-between items-center">
          <div className="max-lg:w-full w-[60%] flex flex-col space-y-6 max-lg:space-y-12">
            <h1 className="text-5xl max-lg:text-4xl max-md:text-2xl font-bold">{t("Index.title")}</h1>
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold max-lg:text-3xl"><strong>FIDELY NGOLION</strong></h1>
              <div className="h-6">
                <h1 className="text-3xl font-bold max-lg:text-2xl">
                <Typewriter words={[ t("Main.poste1"), t("Main.poste2"), t("Main.poste3")]} />
              </h1>
              </div>
            </div>
            <p className="md:text-justify text-gray-500 text-lg">{t("Main.myself")} <br />
            </p>
            <div className="flex space-x-8">
              <Link href="#about" className="p-4 bg-[#006bff] rounded-full text-white text-center max-lg:text-md">{t("Main.show-more")}</Link>
            </div>
          </div>

          <div className="w-[40%] flex justify-center max-md:hidden">
               <Image 
                width={450}
                height={300}
                src="/images/project/ngolion.png"
                alt="Logo"
                className="rounded-[50%]"
                /> 
          </div>

        </div>
      </div>


      </section>
      </AnimatedBlock>

      <AnimatedBlock>

      <section className="w-full flex flex-col justify-center space-y-16" id="about">
          <div className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl text-center">
            <h1>{t("Main.about-me")}</h1>
          </div>
          <div className="w-full flex justify-center items-center px-4 lg:space-x-8">
            <div className="max-md:hidden -mt-44">
                <Image 
                width={300}
                height={200}
                src="/images/icon/fidely.png"
                alt="Logo"
                className="rounded-[50%]"
                /> 
            </div>
            <div className="flex flex-col space-y-6 justify-center w-[50%] max-md:w-full">
            <p className="text-gray-500 md:text-justify">
              {t("Main.about-me-info1")} <br />
              {t("Main.about-me-info2")}
            </p>
              <div className="flex justify-center">
                <Link href="#" className="w-auto p-4 border border-[#006bff] rounded-full text-center max-lg:text-md flex justify-center">{t("Main.cv")}</Link>
              </div>
            </div>
          </div>
      </section>
      </AnimatedBlock>

      <AnimatedBlock>
      
      <section className="flex flex-col space-y-16 justify-center items-center" id="work">
         <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-4 px-2 max-lg:px-4">
            <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-2xl text-center">{t("section1.title")}</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 px-4 lg:px-24">
            <div className="flex max-md:flex-col items-center justify-center max-md:space-y-4 md:space-x-4">
              <div className="w-[30%] max-lg:w-full menu-item h-56 rounded-lg p-4 space-y-4 flex flex-col justify-center items-center cursor-pointer">
                <i className="fi fi-ss-entrance icon-circle"></i>              
                <div className="flex flex-col">
                <span className="text-lg font-bold text-center">{t("section1.first-why")}</span>
              </div>
              </div>

            <div className="w-[30%] max-lg:w-full p-4 menu-item h-56 rounded-lg space-y-4 flex flex-col justify-center items-center cursor-pointer">
              <i className="fi fi-sr-people-group icon-circle"></i>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-center">{t("section1.second-why")}</span>
              </div>
            </div>

            <div className="w-[30%] max-lg:w-full p-4 menu-item h-56 rounded-lg space-y-4 flex flex-col justify-center items-center cursor-pointer">
              <i className="fi fi-sr-sack-dollar icon-circle"></i>
              <div className="flex">
                <span className="text-lg font-bold text-center">{t("section1.third-why")}</span>
              </div>
            </div>
            </div>

            <div className="w-full flex max-md:flex-col items-center justify-center max-md:space-y-4 md:space-x-4">
              <div className="w-[30%] max-lg:w-full menu-item h-56 rounded-lg p-4 space-y-4 flex flex-col justify-center items-center cursor-pointer">
              <i className="fi fi-ss-hr-management icon-circle"></i>
              <div className="flex flex-col space-y-6">
                <span className="text-lg font-bold text-center">{t("section1.fourth-why")}</span>
              </div>
              </div>

            <div className="w-[30%] max-lg:w-full menu-item h-56 rounded-lg p-4 hover:p-4 space-y-4 flex flex-col justify-center items-center cursor-pointer">
              <i className="fi fi-ss-user-headset icon-circle"></i>
              <div className="flex flex-col space-y-6">
                <span className="text-lg font-bold text-center">{t("section1.five-why")}</span>
              </div>
            </div>

            </div>
        </div>
      </section>
      </AnimatedBlock> 

      <AnimatedBlock>
        <section className="w-full flex flex-col space-y-16 justify-center items-center" id="services">
          <Services/>
        </section>
      </AnimatedBlock>    

    <AnimatedBlock>
      <section className="w-full flex flex-col space-y-16 p-2 lg:pt-12 lg:pb-12" id="project">
        <Carrousel />
      </section>   
    </AnimatedBlock>
 
    <AnimatedBlock>
      <section className="w-full flex-col flex px-4 space-y-16" id="">
        <div className="flex flex-col justify-center items-center space-y-4 px-2">
        <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl">
          {t("section5.title")}
        </h1>
      </div>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div className="elfsight-app-a1149538-5229-4faf-b883-f4956c478ce5" data-elfsight-app-lazy></div>
      </section>
    </AnimatedBlock> 


   {/* <AnimatedBlock>
    <section className="w-full flex flex-col space-y-8 materiel-item p-2 lg:p-12" id="project">
      <ProjectsHorizontal />
    </section> 
   </AnimatedBlock>  */}

    {/* <AnimatedBlock>
      <section className="w-full flex flex-col space-y-16 p-4 lg:p-12">
        <Testimonial />
      </section>
    </AnimatedBlock> */}


      

     <AnimatedBlock>
       <section className="contact w-full p-4 lg:p-12 flex flex-col justify-end space-y-16" id="contact">
          <Email />
      </section>
     </AnimatedBlock>
      {show && (
      <div className="absolute  z-10">
        <Link href="#home"
          className="fixed bottom-6 right-4 p-3 rounded-md bg-[#006bff] text-white shadow-lg hover:bg-blue-700 transition"
          aria-label="Scroll to top"
        >
        <i className="fa-solid fa-arrow-up"></i>
        </Link>
      </div>
    )}

    </main>
    );
}