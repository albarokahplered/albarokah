import React, { useState } from 'react';

function Testimonials() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comment, setComment] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(comment.trim() !== '') {
      alert("Terima kasih! Testimoni Anda telah dikirim dan sedang menunggu persetujuan admin.");
      setComment('');
    }
  };

  return (
    <section id="testimoni" className="section-padding bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Testimoni Jamaah</h2>
          <p>Apa kata mereka tentang program dan layanan di Masjid Al-Barokah.</p>
        </div>
        
        <div 
          className="d-flex gap-4 pb-4 mb-5" 
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

        {/* Add Testimonial Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card-modern p-4 p-md-5 text-center">
              <h4 className="fw-bold mb-3">Berikan Testimoni Anda</h4>
              <p className="text-muted mb-4">Kritik, saran, dan apresiasi Anda sangat berharga bagi kami untuk terus meningkatkan layanan.</p>
              
              {!isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(true)} className="btn btn-outline-dark rounded-pill py-2 px-4 d-inline-flex align-items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: '20px' }} />
                  Login dengan Google
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="text-start mt-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src="https://ui-avatars.com/api/?name=User&background=4CAF7D&color=fff" alt="User" className="rounded-circle me-3" style={{ width: '40px' }} />
                    <span className="fw-bold">Login sebagai Pengguna</span>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-muted small">Komentar Anda</label>
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      placeholder="Tuliskan pengalaman Anda bersama Masjid Al-Barokah..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      style={{ borderRadius: '12px' }}
                      required
                    ></textarea>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-modern">Kirim Testimoni</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
