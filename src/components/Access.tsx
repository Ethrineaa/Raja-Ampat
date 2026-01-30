import React from 'react';

const Access: React.FC = () => {
    return (
        <section id="access" className="section bg-light">
            <div className="container">
                <h2 className="section-title animate fade-up" style={{ textAlign: 'center' }}>Travel Information</h2>

                <div className="grid grid-3">
                    <div className="access-card animate fade-up delay-100">
                        <div className="access-icon">✈️</div>
                        <h4>Getting There</h4>
                        <p className="text-light">Fly to Sorong (SOQ) from Jakarta or Makassar, then take a ferry to Waisai.</p>
                    </div>

                    <div className="access-card animate fade-up delay-200">
                        <div className="access-icon">☀️</div>
                        <h4>Best Time</h4>
                        <p className="text-light">October to April offers the best weather and calmest seas for diving.</p>
                    </div>

                    <div className="access-card animate fade-up delay-300">
                        <div className="access-icon">💡</div>
                        <h4>Travel Tips</h4>
                        <p className="text-light">Bring reef-safe sunscreen, insect repellent, and cash (IDR) for local transactions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Access;
