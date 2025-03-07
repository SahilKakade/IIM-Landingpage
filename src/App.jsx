import "./index.css";
import React from "react";
import WhyUs from "./components/WhyUs"; // Import Success Stories component
import SuccessStories from "./components/SuccessStories"; // Import Success Stories component
import Team from "./components/teamMembers"; 
import Form from "./components/Form";
import Process from "./components/Process";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* ✅ Banner Section */}
      <section className="banner-section">
        <div className="banner-overlay">
          <h1 className="banner-title">
            Welcome to <span className="highlight-text">IIMpossible</span>
          </h1>
        </div>
      </section>

      {/* ✅ Description Section */}
      <section className="description-section">
        <h2 className="section-title">
          About US
        </h2>
        <p className="section-text">
          IIM Possible is a <span className="highlight-red">personalized, AI-driven CAT coaching program</span>  that
          helps students optimize performance with a specialized approach. From
          a unique screening test that identifies strengths and weaknesses to a
          modular, self-paced learning strategy, every student receives only the
          coaching they need.
        </p>
        <p className="section-text-2">
          Our methodology focuses on concept-based modules, interactive
          practice, and dedicated mentorship from IIM alumni to boost success
          and confidence.
        </p>
      </section>

     
       {/* ✅ Success Stories Section */}
       <section >
        
        <WhyUs />
      </section>
      <section >
        
        <SuccessStories />
      </section>
      <section >
        
        <Process />
      </section>
      <section >
        
        <Team />
      </section>
      <section >
        
        <Form />
      </section>
    </div>
  );
};

export default LandingPage;
