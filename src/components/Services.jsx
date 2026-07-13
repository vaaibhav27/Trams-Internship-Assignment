import React, { useEffect, useRef } from 'react';
import './Services.css';

export default function Services() {
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

  const serviceItems = [
    {
      id: 1,
      category: "Office of multiple interest content",
      title: "Colaborative & partnership"
    },
    {
      id: 2,
      category: "The hanger US Air force digital experimental",
      title: "We talk about our weight"
    },
    {
      id: 3,
      category: "Delta faucet content, social, digital",
      title: "Piloting digital confidence"
    }
  ];

  return (
    <section className="services-section reveal" ref={sectionRef} id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="h-lg services-heading">
            What we <span className="highlight-pill-mint">can</span> <br />
            <span className="highlight-underline">offer</span> you!
          </h2>
        </div>

        {/* Services Table List */}
        <div className="services-list">
          {serviceItems.map((item) => (
            <div key={item.id} className="service-row-item">
              <div className="service-row-content">
                {/* Left Category Info */}
                <div className="service-category">
                  <p>{item.category}</p>
                </div>
                
                {/* Center Main Title */}
                <div className="service-title">
                  <h3>{item.title}</h3>
                </div>
                
                {/* Right Interactive Arrow */}
                <div className="service-arrow">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {/* Expanding Divider Line */}
              <div className="service-row-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
