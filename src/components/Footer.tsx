import React from 'react';
import Image from 'next/image';
import logo from '../app/H.png'; // Adjust the path if necessary

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #1a73e8 0%, #2e8bff 100%)',
        color: 'white',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px',
          paddingBottom: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={logo}
            alt="My Logo"
            width={50} // Adjust width as needed
            height={50} // Adjust height as needed
            style={{ marginRight: '20px' }} // Inline styles for additional styling
          />
          <h2 style={{ fontFamily: 'Cursive, sans-serif', fontSize: '2rem' }}>My Logo</h2>
        </div>
        <div>
          <h2 style={{ fontFamily: 'Cursive, sans-serif', fontSize: '2rem' }}>My Contact</h2>
          <p>03073827158</p>
        </div>
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Thank you for visiting my project.</li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
