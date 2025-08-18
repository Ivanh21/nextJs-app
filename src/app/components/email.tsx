'use client';

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Link from "next/link";


export default function Email(){
  const form = useRef<HTMLFormElement>(null);
//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         'service_hbmfl8s',  
//         'template_b1xmi2w',  
//         form.current,
//         'B2hJtZR6UR-qCW1yJ'       
//       )
//        .then(
//         () => {
//           setStatus('Message envoyé avec succès !');
//           form.current?.reset();
//         },
//         (error) => {
//           console.error(error);
//           setStatus("Erreur lors de l'envoi du message.");
//         }
//       );
//   };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const toastId = toast.loading('Envoi du message...');

    emailjs
      .sendForm(
        'service_hbmfl8s',  
        'template_b1xmi2w',  
        form.current,
        'B2hJtZR6UR-qCW1yJ' 
      )
      .then(() => {
        toast.success('Message envoyé avec succès !', { id: toastId });
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Une erreur est survenue. Réessaie plus tard.", { id: toastId });
      });
  };

    return (
        <>
          <div className="flex flex-col justify-center items-center space-y-4 px-2">
          <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl ">Contactez-moi</h1>
          <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">Pour plus des informations, contactez-moi en utilisant mes coordonnées.</p>
        </div>
        

        <div className="flex w-full max-md:flex-col max-md:space-y-8 md:space-x-8 md:px-8 lg:px-24">
            <div className="w-[25%] max-lg:w-[50%] max-md:w-full block-contact social-media p-8 rounded-xl">
              <div className="flex flex-col space-y-10">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Adresse email</h2>
                    <Link href="mailto:support@startup.com" className="text-gray-500">support@startup.com</Link>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Nos bureaux</h2>
                  <Link href="https://maps.app.goo.gl/4n9bSfm9LXM7jMAh9" target="_blank" className="text-gray-500">HEALTHCARE GROUP, Merkez, Çukurçeşme Cd.</Link>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Tel</h2>
                  <Link href="tel:+00987543433223" className="text-gray-500">+009 8754 3433 223</Link>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Skype Email</h2>
                    <Link href="mailto:support@startup.com" className="text-gray-500">support@startup.com</Link>
                </div>

                <div className="border border-gray-500"></div>

                <div className="flex flex-col space-y-8">
                  <h2 className="text-lg font-semibold">Réseaux socials</h2>

                <ul className="flex items-center gap-5">
                <li>
                  <Link aria-label="Footer Link for Facebook" href="#"
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
                  </Link>
                </li>
                <li>
                  <Link aria-label="Footer Link for Twitter" href="#"
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
                  </Link>
                </li>
                <li>
                  <Link aria-label="Footer Link for Linkedin" href="#"
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
                  </Link>
                </li>
              </ul>
                </div>
              </div>
            </div>
            <div className="w-[75%] max-lg:w-[50%] max-md:w-full block-contact social-media p-8 rounded-xl">
              <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-8">
                <div className="flex max-lg:flex-col justify-between items-center max-lg:space-y-4 lg:space-x-8">
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Noms</label>
                      <input type="text" name="name" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="John Smith" required />
                  </div>

                  
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Adresse email</label>
                      <input type="email" name="email" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="exemple@gmail.com" required />
                  </div>
                </div>

                <div className="flex max-lg:flex-col justify-between items-center max-lg:space-y-4 lg:space-x-8">
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Numéro de téléphone</label>
                      <input type="text" name="tel" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="+009 3342 3432" required />
                  </div>

                  
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">Sujet</label>
                      <input type="text" name="subject" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="Type du sujet" required />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Message</label>
                  <textarea name="message" id="" cols={30} rows={7} className="w-full p-4 border border-gray-500 hover:border-[#006bff] rounded-lg dark:bg-[#181c31]" placeholder="Message" required></textarea>
                </div>

                <div className="flex justify-center">
                  <button className="bg-[#006bff] p-4 text-white rounded-full">Envoyer votre message</button>
                </div>

             
              </form>
            </div>
        </div>
        </>
    );
}