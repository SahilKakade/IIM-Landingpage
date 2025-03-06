import { User, Puzzle, Clock, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
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
  return (
    <section className="why-us-section">
      <div className="container">
        <h2 className="section-title">Why Us?</h2>
        <div className="features-wrapper">
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
      </div>
    </section>
  );
};

export default WhyUs;