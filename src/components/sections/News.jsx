import React from 'react';

function News() {
  const newsList = [
    {
      title: 'Pembangunan Kanopi Halaman Depan Masjid Selesai',
      date: '02 Nov 2026',
      category: 'Infrastruktur',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1000',
      summary: 'Alhamdulillah, proses pembangunan kanopi halaman depan masjid telah selesai dan dapat digunakan oleh jamaah untuk sholat Jumat.'
    },
    {
      title: 'Penerimaan Santri Baru TPQ Al-Barokah',
      date: '28 Okt 2026',
      category: 'Pendidikan',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaab315d?auto=format&fit=crop&q=80&w=1000',
      summary: 'TPQ Al-Barokah kembali membuka pendaftaran santri baru untuk tahun ajaran 2026/2027. Pendaftaran gratis dan terbuka untuk umum.'
    },
    {
      title: 'Penyaluran Bantuan Korban Bencana Banjir',
      date: '15 Okt 2026',
      category: 'Sosial',
      image: 'https://images.unsplash.com/photo-1593113544331-561b3699317b?auto=format&fit=crop&q=80&w=1000',
      summary: 'Tim relawan DKM Masjid Al-Barokah telah menyalurkan bantuan sembako dan pakaian layak pakai kepada korban banjir di desa tetangga.'
    }
  ];

  return (
    <section id="berita" className="section-padding bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Berita Terbaru</h2>
          <p>Kabar terkini seputar kegiatan, program, dan informasi penting dari Masjid Al-Barokah.</p>
        </div>
        <div className="row g-4">
          {newsList.map((news, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card-modern p-0 overflow-hidden h-100 d-flex flex-column">
                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                  <img src={news.image} alt={news.title} className="w-100 h-100 object-fit-cover" style={{ transition: 'var(--transition)' }} />
                  <span className="badge bg-primary position-absolute top-0 start-0 m-3">{news.category}</span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="mb-3 text-muted small">
                    <i className="far fa-calendar-alt me-2 text-primary"></i>{news.date}
                  </div>
                  <h5 className="fw-bold mb-3">{news.title}</h5>
                  <p className="text-muted flex-grow-1">{news.summary}</p>
                  <a href="#" className="text-primary fw-bold text-decoration-none mt-auto">Baca Selengkapnya <i className="fa fa-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
