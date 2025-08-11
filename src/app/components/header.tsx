'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Link from "next/link";


const languages = [
  { code: 'en', name: 'English', flag: '/images/icon/flag-kingdom.png' },
  { code: 'tr', name: 'Türkçe', flag: '/images/icon/flag-turkey.png' },
];

export default function Header(){
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

useEffect(() => {
  // On laisse le navigateur restaurer la position
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'auto';
  }

  const handleScroll = () => {
    const scrollThreshold = 40;
    setIsFixed(window.scrollY > scrollThreshold);
  };

  // Vérifie immédiatement la position au chargement
  handleScroll();

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  
  const [isVisible, setIsVisible] = useState(false);

    return (
      <header className={`${styles.navbar} ${isFixed ? `${styles.fixed}` : ''} top-0 left-0 navbar w-full flex justify-between items-center px-2 py-4 lg:px-16 absolute z-40`}>
          <div className="">
            <Image
            width={60}
            height={20}
            src="/images/logo/logo-or-dark.png"
            alt="Logo"
            />
        
        </div>

        <div className="hidden lg:flex space-x-8">

        <Link href="/#home" className="text-lg font-semibold">Accueil</Link>
        <Link href="/#about" className="text-lg font-semibold">À propos</Link>
        <Link href="/#services" className="text-lg font-semibold">Services</Link>
        <Link href="/#project" className="text-lg font-semibold">Projets</Link>
        <Link href="/#contact" className="text-lg font-semibold">Contact</Link>

        </div>

      <div className="lg:hidden flex p-2">
        <button onClick={() => setIsVisible(!isVisible)}>
          <i className="fa-solid fa-bars text-4xl"></i>
        </button>
      </div>

      <div className="max-lg:hidden relative inline-block text-left">
      {/* <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 border px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#181c31]"
      >
        <Image
          src={selectedLang.flag}
          alt={selectedLang.name}
          width={20}
          height={20}
        />
        <span>{selectedLang.name}</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full light:bg-white border rounded shadow">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#181c31]"
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={20} />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )} */}
    </div>
    {isVisible && (
      <div className="absolute">
      <div className="fixed inset-0 bg-white menu z-50 flex flex-col items-center justify-center">
        <button
          className="absolute top-8 right-8"
          onClick={() => setIsVisible(!isVisible)}
        >
          <i className="fa-solid fa-xmark text-2xl text-gray-500 hover:text-black"></i>
        </button>
        <div className="flex flex-col justify-center items-center space-y-8">
          <Link href="/#home" className="text-lg text-gray-500 font-bold" onClick={() => setIsVisible(!isVisible)}>Accueil</Link>
          <Link href="/#work" className="text-lg text-gray-500 font-bold" onClick={() => setIsVisible(!isVisible)}>À propos</Link>
          <Link href="/#project" className="text-lg text-gray-500 font-bold" onClick={() => setIsVisible(!isVisible)}>Projets</Link>
          <Link href="/#contact" className="text-lg text-gray-500 font-bold" onClick={() => setIsVisible(!isVisible)}>Contact</Link>

        {/* <div className="lg:hidden relative inline-block text-left">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 border px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#181c31]"
        >
          <Image
            src={selectedLang.flag}
            alt={selectedLang.name}
            width={20}
            height={20}
          />
          <span className="text-lg text-gray-500 font-bold">{selectedLang.name}</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <ul className="absolute z-10 mt-2 w-full light:bg-white border rounded shadow">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang);
                  setOpen(false);
                  setIsVisible(!isVisible)
                }}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#181c31]"
              >
                <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                <span className="text-lg text-gray-500 font-bold">{lang.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div> */}
        </div>
      </div>
    </div>

    )}


    </header>

    );
}