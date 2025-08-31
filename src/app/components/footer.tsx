import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";


export default function Footer(){
  const {t} = useTranslation();
    return(
      <>
      {/* <div className="section-bar" ></div> */}
      <footer className="flex flex-col w-full space-y-16 px-4 lg:px-16 pt-8">
        <div className="flex max-lg:flex-col items-center lg:space-x-16 max-lg:space-y-8 w-full">

            <div className="flex flex-col space-y-4 w-full lg:w-[25%]">
              <Image
              width={60}
              height={20}
              src="/images/logo/logo-or-dark.png"
              alt="logo"
              />

              <p className="text-sm text-gray-500 max-lg:w-72">{t("footer.socials")}</p>

              <ul className="flex items-center gap-5">
                <li>
                  <Link aria-label="Link for Facebook" target="_blank" href="#">
                  <i className="fa-brands fa-facebook-f text-2xl text-[#D1D8E0] transition-all duration-300 hover:text-[#006bff]"></i>
                  </Link>
                </li>
                <li>
                  <Link aria-label="Link for Linkedin" target="_blank" href="https://www.linkedin.com/in/fidelyngolion/">
                  <i className="fa-brands fa-linkedin-in text-2xl text-[#D1D8E0] transition-all duration-300 hover:text-[#006bff]"></i>
                  </Link>
                </li>
                <li>
                  <Link aria-label="Link for Instagram" target="_blank" href="https://www.instagram.com/fidely_ng?igsh=NXF4dWh6dXdraTd0">
                  <i className="fa-brands fa-instagram text-2xl text-[#D1D8E0] transition-all duration-300 hover:text-[#006bff]"></i>
                  </Link>
                </li>
              </ul>
            </div>


            <div className="flex lg:justify-between w-full max-md:flex-col max-md:space-y-8 max-lg:space-x-8 max-md:space-x-0">
            <div className="flex flex-col space-y-4">
              
              <h2 className="text-xl font-semibold">{t("footer.link")}</h2>

              <ul className="flex flex-col space-y-2 text-gray-500">
                <li>
                  <Link href="/#home">{t("Header.home")}</Link>
                </li>
                <li>
                  <Link href="/#about">{t("Header.about")}</Link>
                </li>
                 <li>
                  <Link href="/#services">{t("Header.work")}</Link>
                </li>
                <li>
                  <Link href="/#project">{t("Header.project")}</Link>
                </li>
                <li>
                  <Link href="/#contact">{t("Header.contact")}</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              
              <h2 className="text-xl font-semibold">{t("Header.work")}</h2>

              <ul className="flex flex-col space-y-2 text-gray-500">
                <li>
                  <Link href="#">{t("section2.first-service.title")}</Link>
                </li>
                <li>
                  <Link href="#">{t("section2.second-service.title")}</Link>
                </li>
                <li>
                  <Link href="#">{t("section2.fourth-service.title")}</Link>
                </li>
                 <li>
                  <Link href="#">{t("section2.five-service.title")}</Link>
                </li>
                <li>
                  <Link href="# ">{t("section2.third-service.title")}</Link>
                </li>
              </ul>
            </div>

          {/* <div className="flex flex-col space-y-4">  
              <h2 className="text-xl font-semibold">Support</h2>
              <ul className="flex flex-col space-y-2 text-gray-500">
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Press media</a>
                </li>
                <li>
                  <a href="#">Our Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div> */}
 
            <div className="flex flex-col space-y-6 w-[70%] lg:w-[30%]">
              
              <h2 className="text-xl font-semibold">Newsletter</h2>
         

              <p className="text-gray-500">{t("footer.subscribe")}</p>
              <div className="relative w-full ">
                <input 
                  type="text" 
                  className="rounded-full p-3 pr-12 news dark:bg-[#181c31] w-full" 
                  placeholder="example@gmail.com" 
                />
                <button><i className="fi fi-sr-paper-plane-top text-xl absolute top-7 right-4 -translate-y-1/2 text-gray-500"></i></button>
              </div>

            </div>  
            </div>  
            
        </div>

        <div className="flex max-md:flex-col max-md:space-y-4 justify-center foot pt-2">
          {/* <div className="flex space-x-2 max-md:justify-center">
            <Link href="#" className="text-gray-500">Privacy Policy</Link>
            <Link href="#" className="text-gray-500">Support</Link>
          </div> */}

          <div className="flex max-md:justify-center">
            <span className="text-gray-500">© 2025 NGOLION. {t("footer.reserved")}</span>
          </div>
        </div>
      </footer>
      </>
    );
}