import React from 'react';

interface Props {
  items: string[];
}

const Culinary: React.FC<Props> = ({ items }) => {
  return (
    <section id="culinary" className="section">
      <div className="container">
        <div className="culinary-wrapper">
          <div className="culinary-left animate slide-left">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
              alt="Papeda and Kuah Kuning"
            />
          </div>

          <div className="culinary-right animate slide-right delay-200">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Taste of Papua</h2>
            <p className="text-light" style={{ marginBottom: '2rem' }}>
              Experience the unique flavors of Eastern Indonesia, from the savory Papeda to fresh grilled fish.
            </p>

            <div className="grid">
              {items.map((item, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#e0f2fe',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    🍲
                  </div>
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culinary;
