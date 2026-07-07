import React, { useState, useEffect } from 'react';

function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-container">
      {/* WhatsApp Button */}
      <a href="https://wa.me/6285156172761" target="_blank" rel="noreferrer" className="float-btn float-wa" title="Hubungi kami via WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Back to Top Button */}
      {isVisible && (
        <a href="#" onClick={scrollToTop} className="float-btn float-top" title="Kembali ke atas">
          <i className="fa fa-arrow-up"></i>
        </a>
      )}
    </div>
  );
}

export default FloatingButtons;
