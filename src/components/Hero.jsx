import React from 'react';
import './Hero.css';
import { teamAvatars } from '../assets';

export default function Hero() {
  // Positioning configurations for the floating avatars to replicate the Figma layout
  const avatarPositions = [
    { id: 1, top: '10%', left: '8%', size: '90px', delay: '0.2s' },
    { id: 2, top: '40%', left: '16%', size: '100px', delay: '0.5s' },
    { id: 3, top: '15%', left: '32%', size: '110px', delay: '0.1s' },
    { id: 4, top: '50%', left: '42%', size: '120px', delay: '0.8s' },
    { id: 5, top: '18%', left: '55%', size: '115px', delay: '0.3s' },
    { id: 6, top: '45%', left: '68%', size: '120px', delay: '0.6s' },
    { id: 7, top: '12%', left: '78%', size: '105px', delay: '0.4s' },
    { id: 8, top: '38%', left: '88%', size: '95px', delay: '0.7s' },
  ];

  return (
    <section className="hero-section" id="home">
      {/* Decorative Accents */}
      <div className="accent-purple-half"></div>
      
      {/* Left side red wavy SVG line */}
      <svg className="accent-red-waves" width="220" height="300" viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-10,50 C40,70 80,20 120,80 C160,140 100,200 180,230 C220,245 260,200 300,280" stroke="rgba(248, 113, 113, 0.4)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M-10,80 C30,100 70,50 110,110 C150,170 90,230 170,260 C210,275 250,230 290,310" stroke="rgba(248, 113, 113, 0.2)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="container hero-container">
        {/* Hero Title */}
        <div className="hero-text-content">
          <h1 className="h-xl hero-headline">
            The <span className="highlight-underline">thinkers</span> and <br />
            doers were <span className="highlight-pill-pink">changing</span> <br />
            the <span className="highlight-pill-mint">status</span> Quo with
          </h1>
          
          <p className="text-p hero-subheading">
            We are a team of strategists, designers, communicators, and researchers. Together, 
            we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

        {/* Floating Avatar Cluster Container */}
        <div className="avatars-cluster-wrapper">
          <div className="avatars-cluster">
            {teamAvatars.map((member, idx) => {
              const pos = avatarPositions[idx % avatarPositions.length];
              return (
                <div 
                  key={member.id}
                  className="floating-avatar-item"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    width: pos.size,
                    height: pos.size,
                    animationDelay: pos.delay
                  }}
                >
                  <div className="avatar-img-container">
                    <img src={member.img} alt={member.name} className="avatar-img" />
                    <div className="avatar-tooltip">
                      <p className="tooltip-name">{member.name}</p>
                      <p className="tooltip-role">{member.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
