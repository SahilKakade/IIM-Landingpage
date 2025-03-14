import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../index.css";

const features = [
  {
    image: "https://cdn.shopify.com/s/files/1/0664/8292/9891/files/personalized.jpg?v=1741600788",
    title: "Personalized", 
    description: [
      "Custom AI-driven study plans based on your progress.",
      "Mentoring by IIM alumni with real-world insights."
    ]
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0664/8292/9891/files/Modular.jpg?v=1741596619",
    title: "Modular", 
    description: [
      "Focus on your strengths with tailored modules.",
      "Selective module options to enhance your learning experience."
    ]
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0664/8292/9891/files/self_paced.jpg?v=1741596680",
    title: "Self-paced, Concept-based", 
    description: [
      "Learn at your own speed.",
      "Flexible learning schedule."
    ]
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0664/8292/9891/files/mentorship.jpg?v=1741601034",
    title: "Mentorship-based", 
    description: [
      "Weekly or bi-weekly reviews to track progress.",
      "Exclusive strategies from those who’ve been through it all."
    ]
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
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3 className="feature-title">{feature.title}</h3>
              <ul className="feature-description">
                {feature.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
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
              <img src={features[currentIndex].image} alt={features[currentIndex].title} className="feature-image" />
              <h3 className="feature-title">{features[currentIndex].title}</h3>
              <ul className="feature-description">
                {features[currentIndex].description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
