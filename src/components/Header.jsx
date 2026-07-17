import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed-top w-100 transition-all" style={{ zIndex: 1030 }}>
      {/* Topbar - hides when scrolled */}
      <div 
        className={`bg-light border-bottom d-none d-lg-block overflow-hidden transition-all`} 
        style={{ 
          height: isScrolled ? '0px' : '40px',
          opacity: isScrolled ? 0 : 1,
          paddingTop: isScrolled ? '0' : '8px',
          paddingBottom: isScrolled ? '0' : '8px'
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between text-muted small">
            <div className="d-flex gap-4">
              <span><i className="fa fa-phone-alt me-2 text-primary"></i>+62 8 515 61 727 61</span>
              <span><i className="fa fa-envelope me-2 text-primary"></i>albarokahplered@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span>Follow Us:</span>
              <div className="d-flex gap-2">
                <a href="#" className="text-muted hover-primary"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-muted hover-primary"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-muted hover-primary"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-muted hover-primary"><i className="fab fa-instagram"></i></a>
              </div>
              <a href="#" className="text-muted hover-primary border-start ps-3 ms-1 text-decoration-none">
                <i className="fa fa-lock me-2"></i>Signup/login
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`navbar navbar-expand-lg transition-all ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`} 
        style={{ padding: isScrolled ? '15px 0' : '20px 0' }}
      >
        <div className="container">
          <div className="d-flex align-items-center">
            <a href="#home" className="navbar-brand d-flex align-items-center me-0">
              <img src="/img/logo.png" alt="Logo Masjid Al-Barokah" style={{ height: '50px' }} />
            </a>
            {/* Display on mobile only (optional) */}
            <a href="#donasi" className="btn btn-modern ms-3 d-inline-flex d-lg-none py-1 px-2" style={{ fontSize: '14px' }}>Donasi</a>
          </div>
          
          <button className="navbar-toggler border-0 px-2 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars text-primary fs-3"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Center Nav Links */}
            <div className="navbar-nav mx-auto align-items-center">
              <a href="#home" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Beranda</a>
              <a href="#profil" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Profil</a>
              <a href="#agenda" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Agenda</a>
              <a href="#kajian" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Kajian</a>
              <a href="#berita" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Berita</a>
              <a href="#galeri" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Galeri</a>
              <a href="#pengurus" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Pengurus</a>
              <a href="#keuangan" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Keuangan</a>
              <a href="#kontak" className={`nav-item nav-link fw-bold ${!isScrolled ? 'text-white' : ''}`}>Kontak</a>
            </div>
            
            {/* Right Donasi Button (Desktop) */}
            <div className="d-none d-lg-flex align-items-center">
              <a href="#donasi" className="btn btn-modern py-2 px-4" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-main)' }}>Donasi</a>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
        .hover-primary:hover {
          color: var(--primary) !important;
        }
        .navbar-nav .nav-link {
          transition: color 0.3s;
          color: var(--text-main);
        }
        .navbar-nav .nav-link.text-white {
          color: #ffffff !important;
        }
        .navbar-nav .nav-link:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </header>
  );
}

export default Header;
