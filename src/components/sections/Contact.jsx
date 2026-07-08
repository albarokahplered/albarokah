import React from 'react';

function Contact() {
  return (
    <section id="kontak" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Lokasi & Kontak</h2>
          <p>Kunjungi kami atau hubungi pengurus untuk informasi lebih lanjut.</p>
        </div>
        
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="card-modern p-0 overflow-hidden" style={{ height: '450px' }}>
              <iframe 
                src="https://maps.google.com/maps?q=Jalan+Raya+Tritih+Lor,+Jeruklegi,+Cilacap+Regency,+Central+Java+53252&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-100 h-100 border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Lokasi Masjid Al-Barokah"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Informasi Kontak</h3>
            <div className="d-flex mb-4">
              <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                <i className="fa fa-map-marker-alt text-primary fa-lg"></i>
              </div>
              <div className="ms-4">
                <h6 className="fw-bold mb-1">Alamat</h6>
                <p className="text-muted mb-0">Plered, Jalan Raya Tritih Lor, Jeruklegi, Cilacap Regency, Central Java 53252</p>
              </div>
            </div>
            
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="d-flex">
                  <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                    <i className="fa fa-phone-alt text-primary fa-lg"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Telepon/WA</h6>
                    <p className="text-muted mb-0">+62 8 515 61 727 61</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex">
                  <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                    <i className="fa fa-envelope text-primary fa-lg"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="text-muted mb-0">info@albarokah.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex">
                  <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                    <i className="fa fa-clock text-primary fa-lg"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Jam Operasional</h6>
                    <p className="text-muted mb-0">Setiap Hari 24 Jam</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="https://maps.app.goo.gl/FkX3ew3Av8GRFY2S6" target="_blank" rel="noreferrer" className="btn btn-modern w-100">
              <i className="fa fa-location-arrow me-2"></i>Petunjuk Arah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
