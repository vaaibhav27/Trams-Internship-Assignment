import React, { useEffect, useRef } from 'react';
import './TomorrowSection.css';
import { sectionImages } from '../assets';

export default function TomorrowSection() {
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

  return (
    <section className="tomorrow-section reveal" ref={sectionRef} id="about">
      {/* Background wave decorations */}
      <svg className="bg-wavy-decor" width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-50,100 C50,150 150,50 250,120 C350,190 200,220 400,250" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="2.5" fill="none"/>
      </svg>

      <div className="container grid-2">
        {/* Left Side: Content */}
        <div className="tomorrow-content">
          <h2 className="h-lg tomorrow-heading">
            <span className="highlight-underline">Tomorrow</span> should <br />
            be better than <span className="highlight-pill-mint">today</span>
          </h2>
          
          <p className="text-p tomorrow-description">
            We are a team of strategists, designers, communicators, and researchers. 
            Together, we believe that progress only happens when you refuse 
            to play things safe.
          </p>
          
          <a href="#about" className="read-more-link">
            Read more 
            <span className="line"></span> 
            <span className="arrow">→</span>
          </a>
        </div>

        {/* Right Side: Circular Image with Red Triangle Accent */}
        <div className="tomorrow-visual">
          <div className="image-wrapper">
            <img 
              src={sectionImages.tomorrow} 
              alt="Team collaborating in a meeting" 
              className="tomorrow-circle-img" 
            />
            {/* Red Triangle Decoration */}
            <div className="decor-triangle-red">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,10 90,50 10,90" fill="#ef4444" opacity="0.85" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
