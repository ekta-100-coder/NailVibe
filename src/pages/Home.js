import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// Using icons that actually exist in react-icons/gi
import { GiSparkles, GiLipstick, GiMagicSwirl } from "react-icons/gi";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Floating emojis */}
      <div className="floating heart">❤️</div>
      <div className="floating nail">💅</div>
      <div className="floating sparkle">✨</div>
      <div className="floating bow">🎀</div>
      <div className="floating lips">💋</div>
      <div className="floating flower">🌸</div>
      <div className="floating star">⭐</div>

      {/* Hero */}
      <div className="hero">
        <h1 className="logo">NailVibe</h1>
        <p className="hero-quote">Your nails, your vibe 💖</p>
        <p className="hero-subtext">Free nail art & exciting offers every week!</p>

        <div className="hero-offers">
          <span>Free Nail Art</span>
          <span>50% Off First Booking</span>
          <span>Gift Card Available</span>
        </div>

        {/* UPDATED BUTTON */}
        <button className="cta" onClick={() => navigate("/contact")}>
          Book Your Spot
        </button>
      </div>

      {/* Services Cards */}
      <div className="services">
        <div className="card">
          <div className="icon"><GiSparkles /></div>
          <h3>Classic Manicure</h3>
          <p>Elegant designs with soft pastels.</p>
        </div>
        <div className="card">
          <div className="icon"><GiLipstick /></div>
          <h3>Gel Extensions</h3>
          <p>Long-lasting shiny nails with glitter.</p>
        </div>
        <div className="card">
          <div className="icon"><GiMagicSwirl /></div>
          <h3>Special Designs</h3>
          <p>Unique nail art for every occasion.</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery">
        <img src={require("../assets/nail1.jpg")} alt="nail1" />
        <img src={require("../assets/nail2.jpg")} alt="nail2" />
        <img src={require("../assets/nail3.jpg")} alt="nail3" />
      </div>

      {/* Quotes */}
      <div className="quote">Shine like your nails ✨</div>
    </div>
  );
};

export default Home;
