import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2>İletişim</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <p>
              <strong>Adres:</strong> Örnek Mahallesi, No: 123, İstanbul
            </p>
            <p>
              <strong>Telefon:</strong> +90 123 456 78 90
            </p>
            <p>
              <strong>Email:</strong> info@isletme.com
            </p>
            <p>
              <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma, 09:00 - 18:00
            </p>
          </div>

          <div className="contact-form">
            <h3>Bize Ulaşın</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Gönder
              </button>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <h3>Harita</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279637423833!2d28.978858315411836!3d41.00846297929967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9eb9d587135%3A0x8aa0bb6b1dd6ffb7!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1631025941237!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;