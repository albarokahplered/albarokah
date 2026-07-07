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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.33945532502!2d107.38716181477123!3d-6.66668729517904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690f33a88dfec3%3A0x6e8e8e7a052e46b9!2sPlered%2C%20Purwakarta%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1689234567890!5m2!1sen!2sid" 
                className="w-100 h-100 border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Informasi Kontak</h3>
            <div className="d-flex mb-4">
              <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                <i className="fa fa-map-marker-alt text-primary fa-lg"></i>
              </div>
              <div className="ms-4">
                <h6 className="fw-bold mb-1">Alamat</h6>
                <p className="text-muted mb-0">Jl. Masjid Al-Barokah, Kec. Plered, Kab. Purwakarta, Jawa Barat</p>
              </div>
            </div>
            
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="d-flex">
                  <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
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
                  <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
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
                  <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                    <i className="fa fa-clock text-primary fa-lg"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Jam Operasional</h6>
                    <p className="text-muted mb-0">Setiap Hari 24 Jam</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-modern w-100">
              <i className="fa fa-location-arrow me-2"></i>Petunjuk Arah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
