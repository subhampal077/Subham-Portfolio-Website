import React, { useEffect, useState } from "react";

function TypingEffect() {
  const fullText = "Frontend Developer.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === fullText.length) {
        setDisplayText("");
        setIndex(0);
      } else {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prevState) => prevState + 1);
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <p className="font-extrabold text-3xl sm:text-4xl sm:pl-20">
      I'm a&nbsp;
      <span className="text-[#00ffff]">{displayText}</span>
    </p>
  );
}

export default TypingEffect;
