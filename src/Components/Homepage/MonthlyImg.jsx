import "../Homepage/MonthlyImg.css";
import { useEffect, useRef } from "react";

function MonthlyImg() {
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
    <div ref={elementRef} className="MonthlyImg">
      <img className="MonthlyImg-img" src="/kraken-shoe-shad.png" />
    </div>
  );
}

export default MonthlyImg;
