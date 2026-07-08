import React, { useState } from 'react';

function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1596700683935-f2d4e845bc80?auto=format&fit=crop&q=80&w=800', category: 'Sholat Berjamaah' },
    { src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800', category: 'Kajian Rutin' },
    { src: 'https://images.unsplash.com/photo-1584288127393-2708307db49f?auto=format&fit=crop&q=80&w=800', category: 'Kegiatan Ramadhan' },
    { src: 'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&q=80&w=800', category: 'Peringatan Idul Fitri' }
  ];

  return (
    <section id="galeri" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Galeri Kegiatan</h2>
          <p>Dokumentasi berbagai aktivitas dan momen berharga di Masjid Al-Barokah.</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-8">
            {images.map((img, index) => (
              <div key={index} className="card-modern p-3 mb-4 d-flex flex-row align-items-center gap-4">
                <div style={{ width: '150px', height: '150px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden' }}>
                  <img src={img.src} alt={img.category} className="w-100 h-100 object-fit-cover" />
                </div>
                <div>
                  <h4 className="fw-bold mb-2">{img.category}</h4>
                  <p className="text-muted mb-0">Dokumentasi kegiatan {img.category.toLowerCase()} yang diselenggarakan di lingkungan Masjid Al-Barokah untuk mempererat ukhuwah islamiyah jamaah.</p>
                </div>
              </div>
            ))}

            <div className="text-center mt-5">
              <a href="#" className="btn btn-modern-outline w-100 py-3" style={{ maxWidth: '400px' }}>
                Lihat Lainnya <i className="fa fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
