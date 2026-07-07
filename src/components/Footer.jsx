import React from 'react';

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container pb-4">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <a href="#home" className="d-flex align-items-center mb-4 text-white text-decoration-none">
              <i className="fa fa-mosque fa-2x me-2 text-primary"></i>
              <h3 className="mb-0 fw-bold">Al-Barokah</h3>
            </a>
            <p className="text-white-50 mb-4">
              Pusat Ibadah, Dakwah, Pendidikan, dan Pelayanan Umat. Kami berkomitmen untuk melayani jamaah dengan sepenuh hati dan profesional.
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-4">Menu Cepat</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2 text-decoration-none" href="#profil"><i className="fa fa-angle-right me-2"></i>Profil Masjid</a>
              <a className="text-white-50 mb-2 text-decoration-none" href="#agenda"><i className="fa fa-angle-right me-2"></i>Agenda</a>
              <a className="text-white-50 mb-2 text-decoration-none" href="#kajian"><i className="fa fa-angle-right me-2"></i>Kajian</a>
              <a className="text-white-50 mb-2 text-decoration-none" href="#berita"><i className="fa fa-angle-right me-2"></i>Berita</a>
              <a className="text-white-50 mb-2 text-decoration-none" href="#keuangan"><i className="fa fa-angle-right me-2"></i>Transparansi Keuangan</a>
              <a className="text-white-50 mb-2 text-decoration-none" href="#donasi"><i className="fa fa-angle-right me-2"></i>Donasi</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4 className="text-white mb-4">Kontak Kami</h4>
            <p className="text-white-50 mb-2"><i className="fa fa-map-marker-alt me-3"></i>Jl. Masjid Al-Barokah, Plered</p>
            <p className="text-white-50 mb-2"><i className="fa fa-phone-alt me-3"></i>+62 8 515 61 727 61</p>
            <p className="text-white-50 mb-2"><i className="fa fa-envelope me-3"></i>albarokahplered@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container border-top border-secondary pt-4">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white-50">
            &copy; <a className="text-white text-decoration-none" href="#">Masjid Al-Barokah Plered</a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end text-white-50">
            Designed by Al-Barokah Digital
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
