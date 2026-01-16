import React from "react";
import { useNavigate } from "react-router-dom";
import "./Reviews.css";

const Reviews = () => {
  const navigate = useNavigate();

  return (
    <div className="reviews-page">

      {/* Hero */}
      <section className="reviews-hero">
        <h1>Client Love</h1>
        <p>Real vibes. Real reviews 💕</p>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-grid">

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            NailVibe was the highlight of my bridal shower! Every guest loved
            the designs and the team was super professional.
          </p>
          <h4>— Riya S.</h4>
          <span>Bridal Event</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            Absolutely loved the vibe and hygiene standards. Perfect for
            parties and girls’ nights.
          </p>
          <h4>— Ananya M.</h4>
          <span>Birthday Party</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★☆</div>
          <p>
            Beautiful nail art and quick service. My guests couldn’t stop
            clicking pictures!
          </p>
          <h4>— Pooja K.</h4>
          <span>House Party</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            Loved how professional yet fun the NailVibe team was. Will
            definitely book again.
          </p>
          <h4>— Neha R.</h4>
          <span>Corporate Event</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            The nail designs were trendy and elegant. Perfect for my engagement
            party!
          </p>
          <h4>— Simran A.</h4>
          <span>Engagement</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            NailVibe made our event feel luxurious. Everyone kept asking where
            we booked them from.
          </p>
          <h4>— Kavya D.</h4>
          <span>Wedding Event</span>
        </div>

      </section>

      {/* CTA */}
      <section className="reviews-cta">
        <h2>Ready to Create Your Own NailVibe Moment?</h2>
        <button onClick={() => navigate("/contact")}>
          Book NailVibe
        </button>
      </section>

    </div>
  );
};

export default Reviews;
