import React from 'react';

function HeroSection() {
  const services = [
    {
      title: 'Jadwal Sholat',
      desc: 'Lihat jadwal sholat lengkap beserta imam dan muadzin.',
      icon: 'fa-clock',
      link: '#jadwal'
    },
    {
      title: 'Kajian Rutin',
      desc: 'Informasi kajian mingguan, bulanan, dan kajian spesial.',
      icon: 'fa-book-reader',
      link: '#kajian'
    },
    {
      title: "TPQ & Belajar Al-Qur'an",
      desc: "Program belajar Al-Qur'an untuk anak, remaja, dan dewasa.",
      icon: 'fa-quran',
      link: '#pendidikan'
    },
    {
      title: 'Zakat, Infak & Sedekah',
      desc: 'Donasi online secara mudah dan transparan.',
      icon: 'fa-hand-holding-heart',
      link: '#donasi'
    },
    {
      title: 'Agenda Masjid',
      desc: 'Seluruh kegiatan yang akan datang.',
      icon: 'fa-calendar-alt',
      link: '#agenda'
    },
    {
      title: 'Laporan Keuangan',
      desc: 'Laporan pemasukan dan pengeluaran masjid.',
      icon: 'fa-chart-bar',
      link: '#keuangan'
    }
  ];

  return (
    <section id="home" className="position-relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingBottom: '100px' }}>
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
          </div>
        </div>

        {/* 6 Services Cards */}
        <div className="row g-4 mt-5">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <a href={service.link} className="text-decoration-none text-dark">
                <div className="card-modern text-center h-100 service-card" style={{ padding: '20px' }}>
                  <div className="mb-3">
                    <i className={`fa ${service.icon} fa-2x text-primary service-icon`} style={{ transition: 'var(--transition)' }}></i>
                  </div>
                  <h6 className="mb-2 fw-bold">{service.title}</h6>
                  <p className="text-muted small mb-0">{service.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card:hover .service-icon {
          color: var(--primary-dark) !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
