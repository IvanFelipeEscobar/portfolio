import React, { useState, useEffect, useMemo, useCallback } from "react";

interface TypingAnimationProps {
  typingSpeed?: number;
  cursorSpeed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  typingSpeed = 100,
  cursorSpeed = 600,
}) => {
  const phrases: string[] = useMemo(
    () =>[
        "Passionate about crafting clean and efficient code.",
        "Dedicated to delivering innovative solutions.",
        "Driven by a love for problem-solving.",
        "Adaptable and always eager to learn.",
        "Enthusiastic about creating seamless user experiences.",
        "Detail-oriented with a focus on quality.",
        "Collaborative team player with excellent communication skills.",
        "Committed to staying up-to-date with the latest technologies.",
        "Excited to contribute to impactful projects.",
        "Infusing creativity into every line of code.",
        "Embracing challenges with a positive mindset.",
        "Continuously evolving and evolving with the tech landscape."
      ],
    []
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const typeAndEraseText = useCallback(() => {
    if (isTyping) {
      if (charIndex < phrases[phraseIndex].length) {
        setDisplayedText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsTyping(false);
      }
    } else {
      if (charIndex > 0) {
        setDisplayedText((prevText) => prevText.slice(0, -1));
        setCharIndex((prevIndex) => prevIndex - 1);
      } else {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, phraseIndex, phrases]);

  useEffect(() => {
    const interval = setInterval(typeAndEraseText, isTyping ? typingSpeed : 80);
    return () => clearInterval(interval);
  }, [typeAndEraseText, isTyping, typingSpeed]);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorSpeed]);

  return (
    <div className="text-animation relative">
      <span className="text-stone-600">{displayedText}</span>
      <span className={`cursor text-stone-600 opacity-0 transition-opacity duration-300 ${showCursor ? 'opacity-100' : ''}`}>|</span>
    </div>
  );
};

export default TypingAnimation;
