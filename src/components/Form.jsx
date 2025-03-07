import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    try {
      // Add data to Firestore
      await addDoc(collection(db, "formResponses"), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        type,
        timestamp: new Date(),
      });

      console.log("Data submitted:", { ...formData, type });

      // Simulate animation effect
      setAnimation(true);
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <form className="form-box">
          <h2>Join Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact No"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <div className="btn-group">
            <button onClick={(e) => handleSubmit(e, "Signup")}>Sign Up</button>
            <button onClick={(e) => handleSubmit(e, "Free Trial")}>Get a Free Trial</button>
          </div>
        </form>
      ) : (
        <div className={`thank-you ${animation ? "fade-in" : ""}`}>
          <h2>Thank you!</h2>
          <p>We will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Form;
