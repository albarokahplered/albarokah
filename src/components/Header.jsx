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
        <a href="#home" className="navbar-brand d-flex align-items-center">
          <i className="fa fa-mosque text-primary fa-2x me-2"></i>
          <h2 className="mb-0 fw-bold">Al-Barokah</h2>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars text-primary"></span>
        </button>
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
            <a href="#donasi" className="btn btn-modern ms-lg-3 mt-3 mt-lg-0">Donasi</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
