import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>İletişim</h3>
            <p>Adres: Örnek Mahallesi, No: 123, İstanbul</p>
            <p>Telefon: +90 123 456 78 90</p>
            <p>Email: info@isletme.com</p>
          </div>
          <div className="footer-section">
            <h3>Hızlı Bağlantılar</h3>
            <ul>
              <li><a href="/">Anasayfa</a></li>
              <li><a href="/hakkimizda">Hakkımızda</a></li>
              <li><a href="/hizmetler">Hizmetler</a></li>
              <li><a href="/iletisim">İletişim</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://x.com">X</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 İşletme Adı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;