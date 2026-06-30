import React from 'react';

function Header() {
  return (
    <>
      {/* Topbar start */}
      <div className="container-fluid fixed-top">
          <div className="container topbar d-none d-lg-block">
              <div className="topbar-inner">
                  <div className="row gx-0">
                      <div className="col-lg-7 text-start">
                          <div className="h-100 d-inline-flex align-items-center me-4">
                              <span className="fa fa-phone-alt me-2 text-dark"></span>
                              <a href="#" className="text-secondary"><span>+62 8 515 61 727 61</span></a>
                          </div>
                          <div className="h-100 d-inline-flex align-items-center">
                              <span className="far fa-envelope me-2 text-dark"></span>
                              <a href="#" className="text-secondary"><span>albarokahplered@gmail.com</span></a>
                          </div>
                      </div>
                      <div className="col-lg-5 text-end">
                          <div className="h-100 d-inline-flex align-items-center">
                              <span className="text-body">Follow Us:</span>
                              <a className="text-dark px-2" href=""><i className="fab fa-facebook-f"></i></a>
                              <a className="text-dark px-2" href=""><i className="fab fa-twitter"></i></a>
                              <a className="text-dark px-2" href=""><i className="fab fa-linkedin-in"></i></a>
                              <a className="text-dark px-2" href=""><i className="fab fa-instagram"></i></a>
                              <a className="text-body ps-4" href=""><i className="fa fa-lock text-dark me-1"></i> Signup/login</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container">
              <nav className="navbar navbar-light navbar-expand-lg py-3">
                  <a href="#home" className="navbar-brand">
                      <h1 className="mb-0">Masjid<span className="text-primary">Al-Barokah</span> </h1>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                      <span className="fa fa-bars text-primary"></span>
                  </button>
                  <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                      <div className="navbar-nav ms-lg-auto mx-xl-auto">
                          <a href="#home" className="nav-item nav-link">Beranda</a>
                          <a href="#about" className="nav-item nav-link">Tentang</a>
                          <a href="#activities" className="nav-item nav-link">Aktivitas</a>
                          <a href="#event" className="nav-item nav-link">Acara</a>
                          <a href="#sermon" className="nav-item nav-link">Khotbah</a>
                          <a href="#blog" className="nav-item nav-link">Blog</a>
                          <a href="#team" className="nav-item nav-link">Pengurus</a>
                          <a href="#testimonial" className="nav-item nav-link">Testimoni</a>
                      </div>
                      <a href="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block">Infak</a>
                  </div>
              </nav>
          </div>
      </div>
      {/* Topbar End */}
    </>
  );
}

export default Header;
