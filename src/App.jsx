import React, { useState, useEffect } from 'react';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-contact">
        <span><i className="fa fa-phone-alt"></i> +62 8 515 61 727 61</span>
        <span><i className="far fa-envelope"></i> albarokahplered@gmail.com</span>
      </div>
      <div className="topbar-social">
        <span style={{ fontWeight: 600 }}>Follow Us:</span>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="title-pacifico">Masjid<span>Al-Barokah</span></h1>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-item active">Beranda</a>
        <a href="#" className="nav-item">Tentang</a>
        <a href="#" className="nav-item">Aktivitas</a>
        <a href="#" className="nav-item">Acara</a>
        <a href="#" className="nav-item">Khotbah</a>
        <a href="#" className="nav-item">Kontak</a>
      </div>
      <button className="btn-primary">
        <i className="fa fa-heart"></i> Infak
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-subtitle">Bismillahir-rahmanir-rahim</div>
        <h1 className="hero-title title-pacifico">Selamat Datang di Masjid Al-Barokah</h1>
        <p className="hero-text">
          Pusat kegiatan keagamaan, sosial, dan pendidikan untuk membangun generasi Islami yang cerdas, berakhlak mulia, dan bermanfaat bagi masyarakat Plered.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Selengkapnya</button>
          <button className="btn-outline">Jadwal Sholat</button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <div className="feature-icon"><i className="fa fa-mosque"></i></div>
        <h3>Tempat Ibadah</h3>
        <p>Lingkungan yang bersih, nyaman, dan tenang untuk melaksanakan ibadah harian dan shalat Jumat.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon"><i className="fa fa-book-reader"></i></div>
        <h3>Pendidikan Agama</h3>
        <p>Taman Pendidikan Al-Qur'an (TPA) dan kajian rutin untuk memperdalam pemahaman agama Islam.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon"><i className="fa fa-hands-helping"></i></div>
        <h3>Sosial Kemanusiaan</h3>
        <p>Penyaluran Zakat, Infaq, Sadaqah (ZIS) serta bantuan sosial untuk masyarakat yang membutuhkan.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about-img-wrapper">
        <img src="https://images.unsplash.com/photo-1594902344738-963b516087b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Masjid Interior" className="about-img" />
      </div>
      <div className="about-content">
        <h2>Tentang Kami</h2>
        <h3 className="title-pacifico">Pusat Dakwah & Ukhuwah Islamiyah</h3>
        <p>
          Masjid Al-Barokah didirikan dengan visi menjadi pusat peribadatan dan peradaban Islam yang rahmatan lil 'alamin. Kami berkomitmen untuk melayani umat dan membangun masyarakat yang madani.
        </p>
        <ul className="check-list">
          <li><i className="fa fa-check-circle"></i> Fasilitas ibadah yang memadai dan ramah jamaah</li>
          <li><i className="fa fa-check-circle"></i> Program kajian rutin bersama ustadz berkompeten</li>
          <li><i className="fa fa-check-circle"></i> Kegiatan sosial untuk kesejahteraan umat sekitar</li>
        </ul>
        <button className="btn-primary">Kenali Lebih Jauh</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <h4 className="title-pacifico">Masjid Al-Barokah</h4>
          <p>Membangun umat yang bertaqwa, cerdas, dan sejahtera melalui optimalisasi peran masjid sebagai pusat ibadah dan peradaban.</p>
          <div className="topbar-social" style={{ marginTop: '1rem' }}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Tautan Cepat</h4>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Jadwal Kajian</a></li>
            <li><a href="#">Laporan ZIS</a></li>
            <li><a href="#">Hubungi Kami</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Hubungi Kami</h4>
          <ul>
            <li><i className="fa fa-map-marker-alt me-2"></i> Plered, Purwakarta, Jawa Barat</li>
            <li><i className="fa fa-phone-alt me-2"></i> +62 8 515 61 727 61</li>
            <li><i className="fa fa-envelope me-2"></i> albarokahplered@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Masjid Al-Barokah Plered. All Rights Reserved.
      </div>
    </footer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading spinner similar to template
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      )}
      
      <Topbar />
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
