import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", contact: "", status: "No" });
  const [submitted, setSubmitted] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? (checked ? value : formData[name]) : value
    });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "formResponses"), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        status: formData.status === "Yes" ? "Retaker" : "1st Timer",
        type,
        timestamp: new Date(),
      });

      console.log("Data submitted:", { ...formData, type });

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
          <h2 className="section-title">Join Us</h2>
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
            placeholder="Contact No."
            value={formData.contact}
            onChange={handleChange}
            required
          />

<div className="radio-group">
  <p>Attempted CAT Before?</p>
  <div className="radio-options">
    <label>
      <input
        type="radio"
        name="status"
        value="Retaker"
        checked={formData.status === "Retaker"}
        onChange={handleChange}
      />
      Yes
    </label>
    <label>
      <input
        type="radio"
        name="status"
        value="1st Timer"
        checked={formData.status === "1st Timer"}
        onChange={handleChange}
      />
      No
    </label>
  </div>
</div>



          <div className="btn-group">
            <button onClick={(e) => handleSubmit(e, "Mentorship")}>Free 15 min mentorship session</button>
            <button onClick={(e) => handleSubmit(e, "Study Plan")}>Free personalised study plan</button>
          </div>
        </form>
      ) : (
        <div className={`thank-you ${animation ? "fade-in" : ""}`}>
          <h2>Thank You!</h2>
          <p>We'll be in touch soon.</p>
        </div>
      )}
    </div>
  );
};

export default Form;
