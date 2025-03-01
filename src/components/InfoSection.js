import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="container">
        <div className="info-content">
          <div className="info-text">
            <h2>Neden Biz?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
              id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia
              ipsum quam nec dui. Quisque lobortis facilisis sapien, ac dignissim lorem. Nulla facilisi.
              Proin euismod nisi a ante tincidunt, nec tincidunt nisi tincidunt.
            </p>
          </div>
          <div className="info-image">
            <img src="/img/content2.jpeg" alt="Neden Biz?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;