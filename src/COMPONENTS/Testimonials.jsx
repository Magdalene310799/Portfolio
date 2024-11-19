import React from "react";
import "./style.css";
import sunilsir from '../images/sunilsir'

const testimonials = [
  {
    image: "person1.jpg",
    content: "It has been a privilege to guide Magdalene Xavier during her postgraduate studies in Physics. She exemplifies a rare combination of intellectual curiosity, diligence, and unwavering dedication to her work. Her ability to grasp complex concepts with ease and apply them innovatively is truly commendable. Beyond academics, Magdalene’s integrity and reliability have always stood out, making her a valued member of any team or project she undertakes. Her calm demeanor, coupled with a strong sense of purpose, makes her an exceptional student and a promising professional. I have no doubt that she will excel in any path she chooses and leave a meaningful impact wherever she goes.",
    name: "Dr. Sunil C Vattappalam",
    designation: "Assistant Professor, St. Xavier's College, Thumba",
  },
  {
    image: "person2.jpg",
    content: "Highly recommend this to anyone looking for quality and reliability.",
    name: "Nolee Fernandez X",
    designation: "Product Manager",
  },
  {
    image: "person3.jpg",
    content: "It has been an absolute pleasure teaching Magdalene Xavier. Her passion for learning and her ability to grasp complex concepts in Physics and programming are truly commendable. Magdalene consistently demonstrates a strong work ethic, curiosity, and a desire to grow, which are evident in her academic achievements and projects. What stands out about Magdalene is her positive attitude and willingness to help her peers, fostering a collaborative and uplifting learning environment. She approaches every task with dedication and precision, whether it's mastering new concepts or exploring innovative solutions in programming. I am confident that her determination and diligence will lead her to great success in her future endeavors.",
    name: "Fathima Nizar",
    designation: "Designer",    
  },
  {
    image: "person4.jpg",
    content: "The results speak for themselves! I will definitely use this service again.",
    name: "Nisha Rego",
    designation: "Marketing Specialist",  
  },
  {
    image: "person5.jpg",
    content: "Magdalene Xavier is one of the most dedicated and hardworking individuals I have had the privilege to mentor. She approaches every challenge with patience, a calm demeanor, and a commitment to finding effective solutions. Her transition into Python Full Stack development showcases her adaptability and eagerness to expand her skill set. What impresses me most about Magdalene is her natural curiosity and ability to ask insightful questions. She is always looking for ways to refine her knowledge and improve her craft, making her a standout learner in any environment. Her professionalism, coupled with her friendly nature, makes her a joy to work with, and I have no doubt she will excel in any role she takes on.",
    name: "Mohammad Khalid",
    designation: "Entrepreneur",    
  },
  {
    image: "person6.jpg",
    content: "The best decision I made! Top-notch service and quality.",
    name: "Dr. Nimmy D E",
    designation: "Freelancer",  
  },
  {
    image: "person7.jpg",
    content: "Exceeded all my expectations. Truly a pleasure to work with!",
    name: "Sophia Garcia",
    designation: "HR Manager",  
  },
  {
    image: "person8.jpg",
    content: "Impressive work! The team delivered exceptional results.",
    name: "Daniel Wilson",
    designation: "Consultant",  
  },
];

const Testimonial = () => {
  return (

    <div className="testimonials-container">
      <h1>ACCOLADES & APPRECIATIONS</h1>
      <h2>Endorsements From Those Who Guided Me</h2>
      {testimonials.map((testimonial, index) => (
        <div
          className={`testimonial-card ${
            index % 2 === 0 ? "slide-from-left" : "slide-from-right"
          }`}
          key={index}
        >
          <div className="testimonial-image-wrapper">
            <img
              src={sunilsir}
              alt={testimonial.name}
              className="testimonial-image"
            />
          </div>
          <div className="testimonial-content">
            <h3>{testimonial.content}</h3>
            <p className="testimonial-author">
              <strong>{testimonial.name}</strong> <br /> {testimonial.designation} 
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
