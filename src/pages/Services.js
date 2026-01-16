import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegStar, FaSpa, FaPaintBrush, FaHandSparkles } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">

      {/* Hero Section */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Premium on-site nail experiences for every event</p>
      </section>

      {/* Main Service */}
      <section className="main-service">
        <h2>On-Site Nail Bar</h2>
        <p>
          NailVibe brings a fully equipped nail studio directly to your venue.
          Our professional nail artists provide trendy, hygienic and high-quality nail services
          for your guests.
        </p>
      </section>

      {/* Event Types */}
      <section className="event-services">
        <h2>Perfect For Every Event</h2>

        <div className="event-grid">
          <div className="event-card">
            <h3>💍 Bridal & Weddings</h3>
            <p>Bridal nails, bridesmaid designs, and wedding-themed nail art.</p>
          </div>

          <div className="event-card">
            <h3>🎂 Birthday Parties</h3>
            <p>Fun, colorful and trendy nail designs for all age groups.</p>
          </div>

          <div className="event-card">
            <h3>👯 Girls Night & Kitty Parties</h3>
            <p>Mini manicures and stylish nail art to elevate your gathering.</p>
          </div>

          <div className="event-card">
            <h3>🏢 Corporate & Brand Events</h3>
            <p>Quick, professional nail services for employees, clients and brand activations.</p>
          </div>
        </div>
      </section>

      {/* Nail Services */}
      <section className="nail-services">
        <h2>Nail Services We Offer</h2>

        <div className="nail-grid">
          <div className="nail-card">
            <FaHandSparkles />
            <h3>Basic Care</h3>
            <p>Nail cleaning, shaping, cuticle care and polish.</p>
          </div>

          <div className="nail-card">
            <FaSpa />
            <h3>Gel Nails</h3>
            <p>Long-lasting gel polish with glossy or matte finish.</p>
          </div>

          <div className="nail-card">
            <FaPaintBrush />
            <h3>Nail Art</h3>
            <p>Minimal, floral, French tips, ombre, glitter and stickers.</p>
          </div>

          <div className="nail-card">
            <FaRegStar />
            <h3>Premium Designs</h3>
            <p>Chrome nails, rhinestones, 3D art and bridal designs.</p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="packages">
        <h2>Event Packages</h2>

        <div className="package-grid">
          <div className="package-card">
            <h3>Mini Party Package</h3>
            <p>Up to 10 guests</p>
            <p>Basic nail polish + simple nail art</p>
          </div>

          <div className="package-card">
            <h3>Premium Event Package</h3>
            <p>Up to 25 guests</p>
            <p>Gel polish + stylish nail art</p>
          </div>

          <div className="package-card">
            <h3>Luxury Event Package</h3>
            <p>Unlimited guests (2–3 hours)</p>
            <p>Premium nail art & bridal designs</p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="addons">
        <h2>Add-On Services</h2>
        <ul>
          <li>Hand massage</li>
          <li>Nail repair</li>
          <li>Nail extensions</li>
          <li>French tips</li>
          <li>Glitter & stone upgrades</li>
          <li>Custom designs</li>
        </ul>
      </section>

      {/* Booking Process */}
      <section className="booking">
        <h2>How It Works</h2>
        <div className="steps">
          <div>1️⃣ Choose your event</div>
          <div>2️⃣ Select a package</div>
          <div>3️⃣ Pick date & location</div>
          <div>4️⃣ We arrive & glam up your guests 💅</div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Ready to Book NailVibe?</h2>
        <button onClick={() => navigate("/contact")}>
          Get a Quote
        </button>
      </section>

    </div>
  );
};

export default Services;
