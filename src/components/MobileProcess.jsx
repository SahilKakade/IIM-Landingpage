import React, { useState, useEffect } from "react";

const steps = [
  { step: 1, title: "Technology driven screening test To help understand a student’s strengths and weaknesses", description: "" },
  { step: 2, title: "Personalised study plan", description: "" },
  { step: 3, title: "Live online classes (need based) with recorded backups", description: "" },
  { step: 4, title: "Individual doubt clearing sessions", description: "" },
  { step: 5, title: "Weekly/Bi-weekly mentorship session To track progress", description: "" },
  { step: 6, title: "Strategic alterations in the study plan To score 99%ile", description: "" },
];

const MobileProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-process-container">
      <h2 className="section-title">Process</h2>
      <div className="mobile-process-slider">
        {steps.map((item, index) => (
          <div key={item.step} className={`mobile-process-step ${index === activeIndex ? "active" : ""}`}>
            <h3 className="step-heading">Step </h3>
            <div className="step-number">{item.step}</div>
            <p className="step-text">{item.title}</p>
            <p className="step-text">{item.description}</p>
            
          </div>
        ))}
      </div>
      <div className="dots-container">
        {steps.map((_, index) => (
          <div key={index} className={`dot ${index === activeIndex ? "active" : ""}`}></div>
        ))}
      </div>
    </div>
  );
};

export default MobileProcess;
