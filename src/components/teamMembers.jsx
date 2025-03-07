import React from "react";


const teamMembers = [
  {
    name: "Sanjiv Kumar",
    title: "Founder & Chief Mentor",
    image: "https://cdn.shopify.com/s/files/1/0664/8292/9891/files/sanjiv.jpg?v=1741259279", // Replace with actual image URL
    description:
      "Sanjiv, an MBA from IIM Calcutta, has 20+ years of experience in BFSI with HDFC, ICICI, and Kotak. Passionate about education, he has been teaching CAT for over seven years, blending real-world expertise with mentorship to guide students to success.",
  },
  
  {
    name: "Shashank K Srivastava",
    title: "Co-founder",
    image: "https://cdn.shopify.com/s/files/1/0664/8292/9891/files/shashank.jpg?v=1741259279", // Replace with actual image URL
    description:
      "Shashank, with an MBA from IIM Bangalore, has led roles at Wipro Technologies and LogicCMG. A former professor at Sharda University, he combines industry insights with academic knowledge to offer strategic guidance, empowering students to excel in both academics and business leadership.",
  },
  {
    name: "Abhinav Jain",
    title: "Strategic Partner",
    image: "https://cdn.shopify.com/s/files/1/0664/8292/9891/files/abhinav.jpg?v=1741259280", // Replace with actual image URL
    description:
      "Abhinav, SVP at CoinDCX, and ex-CFO of PharmEasy, holds an MBA and CA. With expertise in strategic investments and business performance management, he mentors students using his vast corporate experience to sharpen their decision-making skills in real-world contexts.",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">The Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-title">{member.title}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
