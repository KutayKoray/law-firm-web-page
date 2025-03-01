import React from 'react';
import './ReferencesSection.css';

const ReferencesSection = () => {
  const references = [
    { id: 1, logo: '/img/logo1.png', name: 'Şirket 1' },
    { id: 2, logo: '/img/logo2.png', name: 'Şirket 2' },
    { id: 3, logo: '/img/logo3.jpeg', name: 'Şirket 3' },
    { id: 4, logo: '/img/logo4.png', name: 'Şirket 4' },
    { id: 5, logo: '/img/logo5.png', name: 'Şirket 5' },
    { id: 6, logo: '/img/logo6.png', name: 'Şirket 6' },
  ];

  return (
    <div className="references-section">
      <h2>Referanslarımız</h2>
      <div className="references-grid">
        {references.map((reference) => (
          <div key={reference.id} className="reference-item">
            <img src={reference.logo} alt={reference.name} className="reference-logo" />
            <p>{reference.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferencesSection;