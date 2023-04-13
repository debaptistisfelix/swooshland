import "../Homepage/BentoImg.css";
import { useEffect, useRef } from "react";

function BentoImg() {
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.add("BentoImg-animation");
        }
      });
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={elementRef} className="BentoImg">
      <img className="BentoImg-img" src="/bento-long.png" />
    </div>
  );
}

export default BentoImg;
