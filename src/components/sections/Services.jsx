import React from 'react';

function Services() {
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
    <section id="profil" className="section-padding bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Program & Layanan Masjid</h2>
          <p>Berbagai layanan yang disediakan Masjid Al-Barokah untuk melayani kebutuhan jamaah.</p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <a href={service.link} className="text-decoration-none text-dark">
                <div className="card-modern text-center h-100 service-card">
                  <div className="mb-4">
                    <i className={`fa ${service.icon} fa-3x text-secondary service-icon`} style={{ transition: 'var(--transition)' }}></i>
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="text-muted mb-0">{service.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card:hover .service-icon {
          color: var(--primary) !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default Services;
