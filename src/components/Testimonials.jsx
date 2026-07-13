import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';
import { clientAvatars } from '../assets';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // IntersectionObserver for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
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

  // Parallax Mouse Movement effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // scaling factor
    const y = (e.clientY - top - height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Positions and parallax factors for surrounding client avatars
  const avatarConfigs = [
    { id: 1, top: '15%', left: '8%', size: '90px', factor: -1.2 },
    { id: 2, top: '48%', left: '5%', size: '100px', factor: 0.8 },
    { id: 3, top: '10%', right: '10%', size: '85px', factor: -0.6 },
    { id: 4, top: '55%', right: '4%', size: '110px', factor: 1.4 },
    { id: 5, bottom: '-15px', left: '30%', size: '80px', factor: -0.8 },
  ];

  return (
    <section className="testimonials-section reveal" ref={sectionRef}>
      <div 
        className="container testimonials-container" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="h-lg testimonials-heading">
            <span className="highlight-pill-mint">What</span> our customer <br />
            says <span className="highlight-underline">About Us</span>
          </h2>
        </div>

        {/* Scattered Client Avatars */}
        {clientAvatars.map((client, idx) => {
          const cfg = avatarConfigs[idx % avatarConfigs.length];
          const translationStyle = {
            transform: `translate(${mousePos.x * cfg.factor}px, ${mousePos.y * cfg.factor}px)`,
            top: cfg.top,
            left: cfg.left,
            right: cfg.right,
            bottom: cfg.bottom,
            width: cfg.size,
            height: cfg.size,
          };
          return (
            <div 
              key={client.id} 
              className="scattered-avatar-item" 
              style={translationStyle}
            >
              <div className="scattered-avatar-inner">
                <img src={client.img} alt={client.name} className="scattered-avatar-img" />
              </div>
            </div>
          );
        })}

        {/* Central Testimonial Card */}
        <div className="testimonial-card-wrapper">
          <div className="testimonial-card">
            {/* SVG Quote Icon */}
            <div className="quote-icon-container">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H5V6H10V11ZM10 11C10 13.5 8 16.5 5 18M19 11H14V6H19V11ZM19 11C19 13.5 17 16.5 14 18" stroke="rgba(0, 0, 0, 0.08)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <p className="testimonial-quote-text">
              "Elementum delivered the site as they requested. In the end, the client found a 50% 
              increase in traffic within days since its launch. They also had an impressive ability 
              to use technologies that the other developers (Moments Hub) which have also proved to 
              be easy to use and reliable."
            </p>

            {/* Testimonial Author Brand */}
            <div className="testimonial-brand">
              <span className="brand-logo-tag">Moments Hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
