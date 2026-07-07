import React, { useState } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1596700683935-f2d4e845bc80?auto=format&fit=crop&q=80&w=800', category: 'Sholat Berjamaah', height: '300px' },
    { src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800', category: 'Kajian', height: '400px' },
    { src: 'https://images.unsplash.com/photo-1584288127393-2708307db49f?auto=format&fit=crop&q=80&w=800', category: 'Ramadhan', height: '250px' },
    { src: 'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&q=80&w=800', category: 'Idul Fitri', height: '350px' },
    { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800', category: 'TPQ', height: '300px' },
    { src: 'https://images.unsplash.com/photo-1593113544331-561b3699317b?auto=format&fit=crop&q=80&w=800', category: 'Santunan', height: '400px' },
  ];

  return (
    <section id="galeri" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Galeri Kegiatan</h2>
          <p>Dokumentasi berbagai aktivitas dan momen berharga di Masjid Al-Barokah.</p>
        </div>

        <div className="row g-4" style={{ columns: '3 250px', columnGap: '1.5rem' }}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className="position-relative mb-4 overflow-hidden rounded" 
              style={{ display: 'inline-block', width: '100%', borderRadius: '16px', cursor: 'pointer' }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.category} className="w-100 object-fit-cover" style={{ height: img.height, transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <span className="text-white fw-bold">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
          style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1050, cursor: 'pointer' }}
          onClick={() => setSelectedImage(null)}
        >
          <span className="position-absolute top-0 end-0 m-4 text-white fa-2x" style={{ cursor: 'pointer' }}>&times;</span>
          <img src={selectedImage} alt="Fullscreen" style={{ maxWidth: '90%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }} />
        </div>
      )}
    </section>
  );
}

export default Gallery;
