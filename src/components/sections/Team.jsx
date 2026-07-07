import React from 'react';

function Team() {
  const teams = [
    {
      name: 'H. Abdullah Rahman',
      role: 'Ketua DKM',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500',
      wa: '6281234567890'
    },
    {
      name: 'Ustadz Hasanudin',
      role: 'Imam Besar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500',
      wa: '6281234567891'
    },
    {
      name: 'Budi Santoso',
      role: 'Bendahara',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500',
      wa: '6281234567892'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Sekretaris',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500',
      wa: '6281234567893'
    }
  ];

  return (
    <section id="pengurus" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Pengurus Masjid</h2>
          <p>Mengenal lebih dekat para pengurus yang berkhidmat untuk Masjid Al-Barokah.</p>
        </div>
        <div className="row g-4">
          {teams.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card-modern text-center h-100 p-4">
                <div className="mb-4 mx-auto" style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary)' }}>
                  <img src={member.image} alt={member.name} className="w-100 h-100 object-fit-cover" />
                </div>
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p className="text-muted small mb-4">{member.role}</p>
                <a href={`https://wa.me/${member.wa}`} target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm rounded-pill px-4 mt-auto">
                  <i className="fab fa-whatsapp me-2"></i>Hubungi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
