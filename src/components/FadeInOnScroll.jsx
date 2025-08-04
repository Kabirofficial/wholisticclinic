import React from "react";
import { useInView } from "react-intersection-observer";
import "./FadeInOnScroll.css";

const FadeInOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? "is-visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
