import React, { useRef } from "react";
import "../../styles.css";
import { useIntersectionObserver } from '../../utils/useIntersectionObserver.js';

const LandingTextBox = ({heading, paragraph}) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref);

  return(
    <div
      ref={ref}
      className={`landing-text-box ${isVisible ? 'fadeInUp' : ''}`}
    >
      <h2 style={{color: "#FF6666", fontSize: "5rem", marginBottom: "2rem" }}>{heading}</h2>
      <p style={{ color: "#FF6666", fontSize: "1.5rem"}}>{paragraph}</p>
    </div>
  );
};

export default LandingTextBox;
