import React from 'react';
import type { GalleryItem } from "../data/rajaAmpat";

interface Props {
  items: GalleryItem[];
}

const Gallery: React.FC<Props> = ({ items }) => {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title">Gallery Moments</h2>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <div key={item.id} className={`masonry-item item-${index}`}>
              <img src={item.image} alt={item.alt || 'Gallery image'} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
