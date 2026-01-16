import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Let’s create nail magic for your next event ✨</p>
      </section>

      {/* Content */}
      <section className="contact-container">

        {/* Form */}
        <div className="contact-form">
          <h2>Book NailVibe</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Event Type (Bridal / Party / Corporate)" />
            <textarea placeholder="Tell us about your event"></textarea>

            <button type="submit">Send Request</button>
          </form>
        </div>

        {/* Info */}
        <div className="contact-info">
          <h2>Contact Details</h2>

          <p><strong>WhatsApp:</strong> +91 9XXXXXXXXX</p>
          <p><strong>Email:</strong> nailvibe@gmail.com</p>
          <p><strong>Instagram:</strong> @nailvibe</p>

          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>
        </div>

      </section>

    </div>
  );
};

export default Contact;
