import React, { useRef } from "react";
import "../../styles.css";
import { useIntersectionObserver } from '../../utils/useIntersectionObserver.js';


const StepSection = ({ svgPath1, svgPath2, text, index }) => {

  const ref = useRef();
  const isVisible = useIntersectionObserver(ref);

  const animationDelay = index * 400; // You can adjust the delay value here

  return (
    <div
      ref={ref}
      className={`step-section ${isVisible ? 'fadeInUp' : ''}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="red"
        viewBox="0 0 16 16"
      >
        <path d={svgPath1} />
        <path d={svgPath2} />
      </svg>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#FF6666",
          fontSize: "1.5rem",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default StepSection;
