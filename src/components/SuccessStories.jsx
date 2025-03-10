import React, { useEffect, useState } from "react";


const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Add a slight delay for smooth appearance
  }, []);

  return (
    <div className={`success-stories ${isVisible ? "fade-in" : ""}`}>
      
      <div className="stories-container">
        <div className="story left">
          <span className="big-highlight bounce">75%</span>
          <p>of our students achieved a <br></br>99+ percentile score!</p>
        </div>
        <div className="story right">
          <span className="big-highlight bounce">45%</span>
          <p>of our students are now studying in <br></br>India's top 5 Management Institutes!</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
