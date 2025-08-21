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