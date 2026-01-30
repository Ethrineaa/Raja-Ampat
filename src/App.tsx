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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <a href="#" className="brand">
            Explore <span>Raja Ampat</span>
          </a>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#about">About</a>
            <a href="#destinations">Destinations</a>
            <a href="#activities">Activities</a>
            <a href="#culinary">Culinary</a>
            <a href="#culture">Culture</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact" className="nav-btn">Book Now</a>
          </div>

          {/* Mobile Toggle would go here if implemented fully */}
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
