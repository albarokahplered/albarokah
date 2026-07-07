import React from 'react';

function Agenda() {
  const agendas = [
    {
      title: 'Kajian Ahad Pagi',
      date: '10 Nov 2026',
      time: '06:00 - 07:30 WIB',
      location: 'Ruang Utama Masjid Al-Barokah',
      speaker: 'Ustadz Abdullah Taslim',
      desc: 'Kajian rutin membahas kitab Riyadhus Shalihin.',
    },
    {
      title: 'Pengajian Muslimah',
      date: '12 Nov 2026',
      time: '16:00 - 17:30 WIB',
      location: 'Aula Serbaguna',
      speaker: 'Ustadzah Halimah Alaydrus',
      desc: 'Pengajian khusus muslimah membahas fiqih wanita.',
    },
    {
      title: 'Gotong Royong',
      date: '15 Nov 2026',
      time: '07:00 - Selesai',
      location: 'Lingkungan Masjid',
      speaker: 'Pengurus DKM',
      desc: 'Kerja bakti membersihkan lingkungan masjid bersama warga.',
    },
    {
      title: 'Santunan Anak Yatim',
      date: '20 Nov 2026',
      time: '19:30 - Selesai',
      location: 'Halaman Masjid Al-Barokah',
      speaker: 'Tim ZIS',
      desc: 'Penyaluran dana santunan untuk 50 anak yatim.',
    },
    {
      title: 'Pelatihan Remaja Masjid',
      date: '25 Nov 2026',
      time: '09:00 - 12:00 WIB',
      location: 'Ruang Rapat DKM',
      speaker: 'Tim IT Masjid',
      desc: 'Pelatihan desain grafis dan pengelolaan media sosial untuk dakwah.',
    }
  ];

  return (
    <section id="agenda" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Agenda Terdekat</h2>
          <p>Ikuti berbagai kegiatan bermanfaat yang diselenggarakan oleh Masjid Al-Barokah.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline">
              {agendas.map((item, index) => (
                <div key={index} className="timeline-item card-modern mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0 fw-bold">{item.title}</h5>
                    <span className="badge bg-primary px-3 py-2 rounded-pill">{item.date}</span>
                  </div>
                  <hr className="my-3 text-muted" />
                  <div className="row g-2 mb-3">
                    <div className="col-md-4">
                      <p className="mb-0 text-muted small"><i className="far fa-clock me-2 text-primary"></i>{item.time}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-0 text-muted small"><i className="fa fa-map-marker-alt me-2 text-primary"></i>{item.location}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-0 text-muted small"><i className="fa fa-user-tie me-2 text-primary"></i>{item.speaker}</p>
                    </div>
                  </div>
                  <p className="text-muted">{item.desc}</p>
                  <a href="#" className="btn btn-modern-outline btn-sm">Lihat Detail</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agenda;
