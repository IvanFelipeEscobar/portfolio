import React, { useState, useEffect, useMemo, useCallback } from "react";

interface TypingAnimationProps {
  typingSpeed?: number;
  cursorSpeed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  typingSpeed = 200,
  cursorSpeed = 500,
}) => {
  const phrases: string[] = useMemo(
    () => [
      `Hey! I'm Ivan`,
      `I'm a developer`,
      `I'm a tinkerer`,
      `I love to play guitar!`,
      'I build solutions',
      'I want to make an impact',
      `I love coding`
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
