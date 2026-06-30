import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const path = location.pathname;

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
                  <Link to="/" className="navbar-brand">
                      <h1 className="mb-0">Masjid<span className="text-primary">Al-Barokah</span> </h1>
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                      <span className="fa fa-bars text-primary"></span>
                  </button>
                  <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                      <div className="navbar-nav ms-lg-auto mx-xl-auto">
                          <Link to="/" className={`nav-item nav-link ${path === '/' ? 'active' : ''}`}>Beranda</Link>
                          <Link to="/about" className={`nav-item nav-link ${path === '/about' ? 'active' : ''}`}>Tentang</Link>
                          <Link to="/activity" className={`nav-item nav-link ${path === '/activity' ? 'active' : ''}`}>Aktivitas</Link>
                          <Link to="/event" className={`nav-item nav-link ${path === '/event' ? 'active' : ''}`}>Acara</Link>
                          <Link to="/sermon" className={`nav-item nav-link ${path === '/sermon' ? 'active' : ''}`}>Khotbah</Link>
                          <div className="nav-item dropdown">
                              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Halaman</a>
                              <div className="dropdown-menu m-0 rounded-0">
                                  <Link to="/blog" className="dropdown-item">Latest Blog</Link>
                                  <Link to="/team" className="dropdown-item">Our Team</Link>
                                  <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                  <Link to="/404" className="dropdown-item">404 Page</Link>
                              </div>
                          </div>
                          <Link to="/contact" className={`nav-item nav-link ${path === '/contact' ? 'active' : ''}`}>Kontak</Link>
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
