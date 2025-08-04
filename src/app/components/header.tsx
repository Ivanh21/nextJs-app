'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from './header.module.css';


const languages = [
  { code: 'en', name: 'English', flag: '/images/icon/flag-kingdom.png' },
  { code: 'tr', name: 'Türkçe', flag: '/images/icon/flag-turkey.png' },
];

export default function Header(){
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 40; 
      setIsFixed(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

    return (
      <header className={`${styles.navbar} ${isFixed ? `${styles.fixed}` : ''} top-0 left-0 navbar w-full flex justify-between items-center px-2 py-4 lg:px-16 absolute z-10`}>
          <div className="">
            <Image
            width={60}
            height={20}
            src="/images/logo/logo-or.png"
            alt="Logo"
            className="block dark:hidden"
            />
            <Image
            width={60}
            height={20}
            src="/images/logo/logo-or-dark.png"
            alt="Logo"
            className="hidden dark:block"
            />
        </div>

        <div className="hidden lg:flex space-x-8">

        <a href="#home" className="text-lg font-semibold">Home</a>
        <a href="#work" className="text-lg font-semibold">About</a>
        <a href="#project" className="text-lg font-semibold">Features</a>
        <a href="#contact" className="text-lg font-semibold">Support</a>

        </div>

      <div className="relative inline-block text-left">
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
      )}
    </div>

      </header>
    );
}