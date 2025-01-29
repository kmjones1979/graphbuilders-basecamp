"use client";

import { useEffect, useState } from "react";

interface TerminalTextProps {
  text: string;
  className?: string;
  startDelay?: number;
}

const TerminalText = ({ text, className = "", startDelay = 1000 }: TerminalTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Delayed text animation
    const textTimeout = setTimeout(() => {
      let currentIndex = 0;
      const textInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(textInterval);
        }
      }, 100);

      return () => clearInterval(textInterval);
    }, startDelay);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(textTimeout);
    };
  }, [text, startDelay]);

  return (
    <span className={className}>
      {displayText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
};

export default TerminalText;
