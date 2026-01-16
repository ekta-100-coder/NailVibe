import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <h1>About NailVibe</h1>
        <p>Where nails meet vibes ✨</p>
      </section>

      {/* Story */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          NailVibe was created with a simple idea — to bring stylish, hygienic and
          Instagram-worthy nail experiences directly to your events. From intimate
          celebrations to large gatherings, we believe every guest deserves to feel
          pampered and confident.
        </p>
      </section>

      {/* Why Us */}
      <section className="about-section highlight">
        <h2>Why NailVibe?</h2>
        <ul>
          <li>On-site nail bar for events</li>
          <li>Trained and professional nail artists</li>
          <li>High-quality & hygienic products</li>
          <li>Trendy designs tailored to your vibe</li>
          <li>Perfect for weddings, parties & corporate events</li>
        </ul>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To redefine event beauty experiences by making nail art fun, luxurious
          and accessible — one vibe at a time.
        </p>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let’s Create Beautiful Nail Moments</h2>
        <button onClick={() => navigate("/contact")}>
          Book NailVibe
        </button>
      </section>

    </div>
  );
};

export default About;
