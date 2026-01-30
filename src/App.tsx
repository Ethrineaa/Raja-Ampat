import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Activities from "./components/Activities";
import Culinary from "./components/Culinary";
import Culture from "./components/Culture";
import Access from "./components/Access";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import { destinations, activities, culinary, gallery } from "./data/rajaAmpat";

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      root: null,
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
    });

    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <a href="#" className="brand">
            Explore <span>Raja Ampat</span>
          </a>

          <button
            className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
            <a href="#activities" onClick={() => setMenuOpen(false)}>Activities</a>
            <a href="#culinary" onClick={() => setMenuOpen(false)}>Culinary</a>
            <a href="#culture" onClick={() => setMenuOpen(false)}>Culture</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="btn-nav" onClick={() => setMenuOpen(false)}>Book Now</a>
          </div>
        </div>
      </nav>

      <Hero />

      <main>
        <About />
        <Destinations items={destinations} />
        <Activities items={activities} />
        <Culinary items={culinary} />
        <Culture />
        <Access />
        <Gallery items={gallery} />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
