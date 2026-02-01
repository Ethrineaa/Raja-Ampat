import React from 'react';
import { FaLeaf, FaWater, FaHome } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="info-section">
      <div className="container">
        <div className="grid grid-3">

          <div className="info-card animate fade-up delay-100">
            <div className="info-icon">
              <FaLeaf size={32} />
            </div>
            <div>
              <h3>Biodiversity</h3>
              <p className="text-light">
                Home to 75% of the world's coral species and 1,500+ fish species.
              </p>
            </div>
          </div>

          <div className="info-card animate fade-up delay-200">
            <div className="info-icon">
              <FaWater size={32} />
            </div>
            <div>
              <h3>Pristine Nature</h3>
              <p className="text-light">
                Untouched islands, crystal clear waters, and lush tropical jungles.
              </p>
            </div>
          </div>

          <div className="info-card animate fade-up delay-300">
            <div className="info-icon">
              <FaHome size={32} />
            </div>
            <div>
              <h3>Local Heritage</h3>
              <p className="text-light">
                Rich cultural traditions and warm hospitality from the Papuan people.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
