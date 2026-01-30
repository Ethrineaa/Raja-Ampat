import React from "react";
import type { Activity } from "../data/rajaAmpat";

interface Props {
  items: Activity[];
}

const Activities: React.FC<Props> = ({ items }) => {
  return (
    <section id="activities" className="section bg-white">
      <div className="container">
        <h2 className="section-title animate fade-up" style={{ textAlign: 'center' }}>Things to Do</h2>

        <div className="grid grid-4">
          {items.map((item, index) => (
            <div key={item.id} className={`activity-item animate fade-up delay-${(index + 1) * 100}`}>
              <div className={`activity-icon animate bounce-in delay-${(index + 1) * 100 + 200}`}>
                {item.icon || '✨'}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p className="text-light" style={{ fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
