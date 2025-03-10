import React, { useState, useEffect, useRef } from "react";
import "../index.css";

const Process = () => {
  const steps = [
    "Technology driven screening test - to help understand a student’s strengths and weaknesses",
    "Personalised study plan",
    "Live online classes (need based) with recorded backups",
    "Individual doubt clearing sessions",
    "Weekly/Bi-weekly mentorship session to track progress",
    "Strategic alterations in the study plan to score 99+ percentile",
  ];

  const [highlighted, setHighlighted] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setHighlighted((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, steps.length]);

  return (
    <div className="process-container">
      <h2 className="section-title">Process</h2>
      <div className="process-wrapper">
        <div className="process-grid" ref={sliderRef}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`process-block ${isMobile ? "active" : index === highlighted ? "active" : ""}`}
              onMouseEnter={() => !isMobile && setHighlighted(index)}
            >
              <h3 className="step-heading">Step</h3>
              <div className="step-circle">{index + 1}</div>
              <p className="step-text">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
