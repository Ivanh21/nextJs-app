'use client';

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Link from "next/link";
import { useTranslation } from "react-i18next";


export default function Email(){
  const {t} = useTranslation();
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

    const toastId = toast.loading(t("section4.loading"));

    emailjs
      .sendForm(
        'service_hbmfl8s',  
        'template_b1xmi2w',  
        form.current,
        'B2hJtZR6UR-qCW1yJ' 
      )
      .then(() => {
        toast.success(t("section4.success"), { id: toastId });
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error(t("section4.error"), { id: toastId });
      });
  };

    return (
        <>
          <div className="flex flex-col justify-center items-center space-y-4 px-2">
          <h1 className="text-5xl font-bold max-md:text-2xl max-lg:text-4xl ">{t("section4.title")}</h1>
          <p className="text-sm text-gray-500 w-[50%] max-md:w-full text-center">{t("section4.description")}</p>
        </div>
        

        <div className="flex w-full max-md:flex-col max-md:space-y-8 md:space-x-8 md:px-8 lg:px-24">
            <div className="w-[25%] max-lg:w-[50%] max-md:w-full block-contact social-media p-8 rounded-xl">
              <div className="flex flex-col space-y-10">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">{t("section4.email")}</h2>
                    <Link href="mailto:Gemaeln21@gmail.com" className="text-gray-500">Gemaeln21@gmail.com</Link>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">{t("section4.address")}</h2>
                  <Link href="https://maps.app.goo.gl/4n9bSfm9LXM7jMAh9" target="_blank" className="text-gray-500">HEALTHCARE GROUP, Merkez, Çukurçeşme Cd.</Link>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">{t("section4.tel")}</h2>
                  <Link href="tel:+00905313789460" className="text-gray-500">+009 0531 3789 460</Link>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Skype Email</h2>
                    <Link href="mailto:support@startup.com" className="text-gray-500">support@startup.com</Link>
                </div>

                <div className="border border-gray-500"></div>

                <div className="flex flex-col space-y-8">
                  <h2 className="text-lg font-semibold">{t("section4.social-media")}</h2>

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
              </div>
            </div>
            <div className="w-[75%] max-lg:w-[50%] max-md:w-full block-contact social-media p-8 rounded-xl">
              <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-8">
                <div className="flex max-lg:flex-col justify-between items-center max-lg:space-y-4 lg:space-x-8">
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">{t("section4.name")}</label>
                      <input type="text" name="name" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="John Smith" required />
                  </div>

                  
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">{t("section4.email")}</label>
                      <input type="email" name="email" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="exemple@gmail.com" required />
                  </div>
                </div>

                <div className="flex max-lg:flex-col justify-between items-center max-lg:space-y-4 lg:space-x-8">
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">{t("section4.phone")}</label>
                      <input type="text" name="tel" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder="+009 3342 3432" required />
                  </div>

                  
                  <div className="w-full flex flex-col space-y-1">
                      <label htmlFor="">{t("section4.subject")}</label>
                      <input type="text" name="subject" className="p-4 w-full border border-gray-500 rounded-lg hover:border-[#006bff] dark:bg-[#181c31]" placeholder={t("section4.type")} required />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="">{t("section4.message")}</label>
                  <textarea name="message" id="" cols={30} rows={7} className="w-full p-4 border border-gray-500 hover:border-[#006bff] rounded-lg dark:bg-[#181c31]" placeholder={t("section4.message")} required></textarea>
                </div>

                <div className="flex justify-center">
                  <button className="bg-[#006bff] p-4 text-white rounded-full">{t("section4.send")}</button>
                </div>

             
              </form>
            </div>
        </div>
        </>
    );
}