// components/Typewriter.tsx
'use client'; // si tu utilises Next.js 13+ avec app directory

import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 1000,
}) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // index du mot actuel
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Passage à l'étape suivante
    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  return (

    
    <strong>
        {text}
    </strong>
    
  );
};
