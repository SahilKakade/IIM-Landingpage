import "./index.css";
import React from "react";
import WhyUs from "./components/WhyUs"; // Import Success Stories component
import SuccessStories from "./components/SuccessStories"; // Import Success Stories component
import Team from "./components/teamMembers"; 
import Form from "./components/Form";
import Process from "./components/Process";
import MobileProcess from "./components/MobileProcess";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* ✅ Banner Section */}
      <a href="https://iimpossible.in" target="_blank" rel="noopener noreferrer">
  <section className="banner-section">
    <img
      className="banner-image"
      src="https://cdn.shopify.com/s/files/1/0664/8292/9891/files/Web_banner_1.png?v=1741353718"
      alt="Banner"
    />
    <div className="banner-overlay">
      <h1 className="banner-title"></h1>
    </div>
  </section>
</a>




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
        <p className="section-text">
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
        
        <MobileProcess />
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
