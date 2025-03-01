import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h2>Hakkımızda</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Biz Kimiz?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
              id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia
              ipsum quam nec dui.
            </p>
            <h3>Misyonumuz</h3>
            <p>
              Quisque lobortis facilisis sapien, ac dignissim lorem. Nulla facilisi. Proin euismod
              nisi a ante tincidunt, nec tincidunt nisi tincidunt. Sed euismod, nisi a tincidunt
              tincidunt, nisi nisi tincidunt nisi, nec tincidunt nisi nisi a nisi.
            </p>
            <h3>Vizyonumuz</h3>
            <p>
              Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis
              porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper,
              magna diam porttitor mauris, quis sollicitudin sapien justo in libero.
            </p>
          </div>
          <div className="about-image">
            <img src="/img/about-us.avif" alt="Hakkımızda" />
          </div>
        </div>

        <div className="team-section">
          <h3>Ekibimiz</h3>
          <div className="team-members">
            <div className="team-member">
              <img src="/img/profile1.jpeg" alt="Avukat 1" />
              <h4>Ahmet Yılmaz</h4>
              <p>Kurucu Ortak</p>
            </div>
            <div className="team-member">
              <img src="/img/profile2.jpeg" alt="Avukat 2" />
              <h4>Ayşe Demir</h4>
              <p>Kıdemli Avukat</p>
            </div>
            <div className="team-member">
              <img src="/img/profile3.jpeg" alt="Avukat 3" />
              <h4>Mehmet Kaya</h4>
              <p>İş Hukuku Uzmanı</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;