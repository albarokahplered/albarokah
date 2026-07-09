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
    <nav className={`navbar navbar-expand-lg fixed-top navbar-modern ${isScrolled ? 'shadow-sm' : ''}`} style={{ padding: isScrolled ? '15px 0' : '20px 0' }}>
      <div className="container">
        <div className="d-flex align-items-center">
          <a href="#home" className="navbar-brand d-flex align-items-center me-0">
            <img src="/img/logo.png" alt="Logo Masjid Al-Barokah" style={{ height: '50px' }} />
          </a>
          <a href="#donasi" className="btn btn-modern ms-3 d-none d-sm-inline-flex py-2 px-3">Donasi</a>
        </div>
        
        <div className="d-flex align-items-center">
          <a href="#donasi" className="btn btn-modern me-2 d-inline-flex d-sm-none py-1 px-2" style={{ fontSize: '14px' }}>Donasi</a>
          <button className="navbar-toggler border-0 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars text-primary fs-3"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto align-items-center">
            <a href="#home" className="nav-item nav-link">Beranda</a>
            <a href="#profil" className="nav-item nav-link">Profil</a>
            <a href="#agenda" className="nav-item nav-link">Agenda</a>
            <a href="#kajian" className="nav-item nav-link">Kajian</a>
            <a href="#berita" className="nav-item nav-link">Berita</a>
            <a href="#galeri" className="nav-item nav-link">Galeri</a>
            <a href="#pengurus" className="nav-item nav-link">Pengurus</a>
            <a href="#keuangan" className="nav-item nav-link">Keuangan</a>
            <a href="#kontak" className="nav-item nav-link">Kontak</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
