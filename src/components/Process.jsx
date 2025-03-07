import React, { useState, useEffect, useRef } from "react";
import "../index.css";

const Process = () => {
  const steps = [
    "AI driven screening test - to help understand a student’s strengths and weaknesses",
    "Personalised study plan",
    "Live online classes (need based) with recorded backups",
    "Weekly 1 on 1 mentorship session to track progress",
    "Doubt clearing sessions",
    "Strategic alterations in the study plan to score 99%ile",
  ];

  const [highlighted, setHighlighted] = useState(0);
  const sliderRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setHighlighted((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

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
