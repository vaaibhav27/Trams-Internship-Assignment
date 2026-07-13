import React, { useEffect, useRef } from 'react';
import './ProgressSection.css';
import { sectionImages } from '../assets';

export default function ProgressSection() {
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
    <section className="progress-section reveal" ref={sectionRef}>
      {/* Decorative Wavy Lines */}
      <svg className="bg-progress-waves" width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,20 C80,80 150,-10 200,60 C250,130 180,180 280,190" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M30,40 C100,100 170,10 220,80 C270,150 200,200 300,210" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="container grid-2 grid-progress-reversed">
        {/* Left Side: Circular Image with Accent */}
        <div className="progress-visual">
          <div className="progress-image-wrapper">
            <img 
              src={sectionImages.progress} 
              alt="Designers discussing project details" 
              className="progress-circle-img" 
            />
            {/* Red Triangle Decoration */}
            <div className="progress-decor-triangle">
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 90,90 10,90" fill="#ef4444" opacity="0.85" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="progress-content">
          <h2 className="h-lg progress-heading">
            <span className="highlight-pill-mint">See</span> how we can <br />
            help you <span className="highlight-underline">progress</span>
          </h2>
          
          <p className="text-p progress-description">
            We add a layer of fearless insights and action that allows change makers 
            to accelerate their progress in areas such as brand, design digital, 
            comms and social research.
          </p>
          
          <a href="#services" className="read-more-link">
            Read more 
            <span className="line"></span> 
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
