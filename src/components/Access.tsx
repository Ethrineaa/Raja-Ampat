import React from 'react';

const Access: React.FC = () => {
    return (
        <section id="access" className="section access-section">
            <div className="container">
                <div className="section-head" style={{ marginBottom: '2rem' }}>
                    <h2 className="section-title">Access & Travel Info</h2>
                </div>

                <div className="grid grid-3">
                    <div className="info-card">
                        <div className="info-icon">✈️</div>
                        <h3>Getting There</h3>
                        <p className="text-muted">Fly to Sorong (SOQ) from Jakarta, Makassar, or Manado. Then take a ferry to Waisai.</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">☀️</div>
                        <h3>Best Time to Visit</h3>
                        <p className="text-muted">October to April offers the best weather and calmest seas for diving.</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">💡</div>
                        <h3>Travel Tips</h3>
                        <p className="text-muted">Bring cash (IDR), reef-safe sunscreen, and mosquito repellent.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Access;
