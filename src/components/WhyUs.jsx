import { User, Puzzle, Clock, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../index.css";

const features = [
  {
    icon: <User size={40} className="icon" />, 
    title: "Personalized", 
    description: "Custom AI-driven study plans based on your progress. Mentoring by IIM alumni with real-world insights."
  },
  {
    icon: <Puzzle size={40} className="icon" />, 
    title: "Modular", 
    description: "Focus on your strengths with tailored modules. Selective module options to enhance your learning experience."
  },
  {
    icon: <Clock size={40} className="icon" />, 
    title: "Self-paced, Concept-based", 
    description: "Learn at your own speed. Flexible learning schedule."
  },
  {
    icon: <GraduationCap size={40} className="icon" />, 
    title: "Mentorship-based", 
    description: "Weekly or bi-weekly reviews to track progress. Exclusive strategies from those who’ve been through it all."
  }
];

const WhyUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="why-us-section">
      <div className="container">
        <h2 className="section-title">Why Us?</h2>
        <div className="features-wrapper desktop-view">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mobile-slider">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="slider-card"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              <div className="icon-container">{features[currentIndex].icon}</div>
              <h3 className="feature-title">{features[currentIndex].title}</h3>
              <p className="feature-description">{features[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
