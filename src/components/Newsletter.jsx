import React, { useEffect, useRef } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Elementum!');
  };

  return (
    <section className="newsletter-section reveal" ref={sectionRef}>
      {/* Decorative Ornaments */}
      <div className="newsletter-accent-purple"></div>
      
      <svg className="newsletter-accent-waves" width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,30 C30,50 70,10 110,60 C150,110 100,140 180,160" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M-20,55 C25,75 60,35 100,85 C140,135 90,165 170,185" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="container">
        <div className="newsletter-box">
          <h2 className="h-lg newsletter-heading">
            Subscribe to <br />our newsletter
          </h2>
          
          <p className="newsletter-subheading">
            To make your stay special and even more memorable
          </p>

          {/* Email input and button */}
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input" 
              required 
            />
            <button type="submit" className="newsletter-submit-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
