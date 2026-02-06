import { useEffect, useState } from "react";

export const useTypeWriter = (
  text: string,
  speed: number,
  startDelay: number,
  start: boolean,
) => {
  const [displayText, setDisplayText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!start || hasTyped) return;

    let currentIndex = 0;
    const startTyping = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setHasTyped(true);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, startDelay);

    return () => clearTimeout(startTyping);
  }, [start, hasTyped, speed, startDelay, text]);

  return { displayText, hasTyped };
};
