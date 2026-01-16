import React from "react";
import "./Gallery.css";

// Casual & Party
import nail1 from "../assets/nail1.jpg";
import nail2 from "../assets/nail2.jpg";
import nail3 from "../assets/nail3.jpg";
import nail4 from "../assets/nail4.jpg";
import nail5 from "../assets/nail5.jpg";

// Bridal
import nail6 from "../assets/nail6.jpg";
import nail7 from "../assets/nail7.jpg";
import nail8 from "../assets/nail8.jpg";
import nail9 from "../assets/nail9.jpg";

// Close-up
import nail10 from "../assets/nail10.jpg";
import nail11 from "../assets/nail11.jpg";

const Gallery = () => {
  return (
    <div className="gallery-page">

      {/* Hero */}
      <section className="gallery-hero">
        <h1>Our Nail Creations</h1>
        <p>Every nail tells a story ✨</p>
      </section>

      {/* Casual & Party */}
      <section className="gallery-section">
        <h2>🎉 Casual & Party Nails</h2>
        <div className="gallery-grid">
          {[nail1, nail2, nail3, nail4, nail5].map((img, index) => (
            <img key={index} src={img} alt="Casual nail art" />
          ))}
        </div>
      </section>

      {/* Bridal */}
      <section className="gallery-section">
        <h2>👰 Bridal Nails</h2>
        <div className="gallery-grid">
          {[nail6, nail7, nail8, nail9].map((img, index) => (
            <img key={index} src={img} alt="Bridal nail art" />
          ))}
        </div>
      </section>

      {/* Close-up */}
      <section className="gallery-section">
        <h2>🔍 Close-Up Nail Art</h2>
        <div className="gallery-grid">
          {[nail10, nail11].map((img, index) => (
            <img key={index} src={img} alt="Close up nail art" />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Gallery;
