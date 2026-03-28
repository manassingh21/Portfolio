import { useState, useEffect } from 'react';

interface TypewriterOptions {
  speed?: number;
  delay?: number;
}

export const useTypewriter = (
  words: string[],
  { speed = 100, delay = 1500 }: TypewriterOptions = {}
): string => {
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
    
  }, [wordIndex, text, isDeleting, words, speed, delay]);

  return text;
};