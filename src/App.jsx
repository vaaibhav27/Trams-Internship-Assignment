import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TomorrowSection from './components/TomorrowSection';
import ProgressSection from './components/ProgressSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sticky Header Nav */}
      <Navbar />

      {/* Main Landing Sections */}
      <main>
        {/* Hero Area */}
        <Hero />

        {/* About Section: Tomorrow should be better than today */}
        <TomorrowSection />

        {/* Feature Section: See how we can help you progress */}
        <ProgressSection />

        {/* Offerings Table */}
        <Services />

        {/* Interactive Client Testimonial slider/parallax block */}
        <Testimonials />

        {/* Pastel newsletter signup form */}
        <Newsletter />
      </main>

      {/* Structured Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
