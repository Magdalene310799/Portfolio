import React from "react";
import "./style.css";
import ReviewData from "../data/TestimonialData";


const Testimonial = () => {

  return (
    <div className="testimonials-container">
      <h1>ACCOLADES & APPRECIATIONS</h1>
      <h2>Endorsements From Those Who Guided Me</h2>
      {ReviewData.map((v, index) => {
        return(
          <div
          className={`testimonial-card ${
            index % 2 === 0 ? "slide-from-left" : "slide-from-right"
          }`}
          key={index}
        >
          <div className="testimonial-image-wrapper">
            <img
              src={process.env.PUBLIC_URL + v.image}
              alt={v.name}
              className="testimonial-image"
            />
          </div>
          <div className="testimonial-content">
            <h3>{v.content}</h3>
            <p className="testimonial-author">
              <strong>{v.name}</strong> <br /> {v.designation} 
            </p>
          </div>
        </div>
        )
      }
       
      )}
    </div>
  );
};

export default Testimonial;
