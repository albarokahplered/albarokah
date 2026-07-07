import React from 'react';

function HeroSection() {
  return (
    <section id="home" className="position-relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background Image with Overlay */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{ 
          top: 0, left: 0, zIndex: -1, 
          backgroundImage: 'url("https://images.unsplash.com/photo-1564683214964-b2959828236d?auto=format&fit=crop&q=80&w=2070")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h5 className="text-white fw-light mb-3">Selamat Datang di</h5>
            <h1 className="display-3 text-white fw-bold mb-4" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Masjid Al-Barokah</h1>
            <p className="lead text-white-50 mb-5">
              Pusat Ibadah, Dakwah, Pendidikan, dan Pelayanan Umat.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#agenda" className="btn btn-modern">Lihat Agenda</a>
              <a href="#donasi" className="btn btn-modern" style={{ backgroundColor: '#fff', color: 'var(--primary)' }}>Donasi Sekarang</a>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="row g-4 mt-5 pt-4">
          <div className="col-md-3 col-sm-6">
            <div className="card-modern text-center" style={{ padding: '20px' }}>
              <i className="fa fa-mosque fa-2x text-primary mb-3"></i>
              <h6 className="fw-bold mb-1">Jadwal Sholat</h6>
              <p className="text-muted small mb-0">Hari Ini</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card-modern text-center" style={{ padding: '20px' }}>
              <i className="fa fa-calendar-alt fa-2x text-primary mb-3"></i>
              <h6 className="fw-bold mb-1">Agenda</h6>
              <p className="text-muted small mb-0">Terdekat</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card-modern text-center" style={{ padding: '20px' }}>
              <i className="fa fa-book-open fa-2x text-primary mb-3"></i>
              <h6 className="fw-bold mb-1">Kajian</h6>
              <p className="text-muted small mb-0">Berikutnya</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card-modern text-center" style={{ padding: '20px' }}>
              <i className="fa fa-heart fa-2x text-primary mb-3"></i>
              <h6 className="fw-bold mb-1">Total Donasi</h6>
              <p className="text-muted small mb-0">Bulan Ini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
