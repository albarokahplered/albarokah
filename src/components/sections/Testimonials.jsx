import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Bapak Ahmad',
      text: 'Alhamdulillah, semenjak ada website ini, saya jadi lebih mudah mengetahui jadwal kajian dan transparansi dana masjid. Sangat profesional!',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
      rating: 5
    },
    {
      name: 'Ibu Siti Khadijah',
      text: 'Program santunan anak yatim sangat transparan. Terima kasih pengurus DKM yang telah memfasilitasi donasi online.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
      rating: 5
    },
    {
      name: 'Rizki Fadillah',
      text: 'Desain webnya bagus sekali, anak muda jadi tertarik untuk sering-sering cek agenda masjid. Sukses terus pemuda hijrah Al-Barokah!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      rating: 5
    },
    {
      name: 'Hj. Aminah',
      text: 'Kajian muslimah sekarang jadwalnya bisa diakses kapan saja. Sangat membantu ibu-ibu yang sibuk agar tidak ketinggalan jadwal.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1b4dce?auto=format&fit=crop&q=80&w=150',
      rating: 4
    }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Testimoni Jamaah</h2>
          <p>Apa kata mereka tentang program dan layanan di Masjid Al-Barokah.</p>
        </div>
        
        <div 
          className="d-flex gap-4 pb-4" 
          style={{ 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory', 
            scrollPadding: '0 15px',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonials.map((testi, index) => (
            <div 
              key={index} 
              className="card-modern flex-shrink-0" 
              style={{ width: '350px', scrollSnapAlign: 'start' }}
            >
              <div className="text-warning mb-3">
                {[...Array(testi.rating)].map((_, i) => (
                  <i key={i} className="fa fa-star me-1"></i>
                ))}
              </div>
              <p className="text-muted fst-italic mb-4">"{testi.text}"</p>
              <div className="d-flex align-items-center mt-auto">
                <img src={testi.image} alt={testi.name} className="rounded-circle me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <h6 className="fw-bold mb-0">{testi.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
