import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="page">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
