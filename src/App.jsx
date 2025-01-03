import React, { useState } from 'react';
import './App.css'; // Ensure this file contains your external CSS styles

function App() {
  const [count, setCount] = useState(0);

  const applyNow = () => {
    alert('We are working on it');
    // Add redirection logic here
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>Naman Finlease</h1>
      </header>

      {/* About Us Section */}
      <div style={contentStyle} id="about">
        <h2 style={{ textAlign: 'center', color: '#004d4d' }}>About Us</h2>
        <p style={{ textAlign: 'justify', color: '#333333' }}>
          At NamanFinlease, we are committed to empowering individuals and businesses with customized solutions tailored to your unique aspirations.
          Our mission is to equip you with the resources and support needed to achieve both personal and professional success. Whether you're focused
          on expanding your horizons or scaling your operations, we're here to guide you every step of the way.
        </p>
        <p style={{ textAlign: 'justify', color: '#333333' }}>
          Our dedicated team of experts prioritizes quality service, transparency, and simplicity. We specialize in transforming challenges into
          opportunities, offering the tools you need to confidently shape your future. With NamanFinlease, you can trust that your goals are our priority.
        </p>
      </div>

      {/* Why Us Section */}
      <div style={contentStyle} id="why-us">
        <h2 style={{ textAlign: 'center', color: '#004d4d' }}>Why Choose Us</h2>
        <ul
          style={{
            color: '#333333',
            marginTop: '20px',
            paddingLeft: '20px',
            listStyleType: 'disc',
            listStylePosition: 'inside', // Ensures bullets align with text
          }}
        >
          <li style={{ marginBottom: '10px' }}>
            <strong>Tailored Solutions:</strong> Services designed to address the unique challenges and goals of individuals and businesses.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Dependable and Trustworthy:</strong> Built on a foundation of reliability and trust, ensuring consistent support.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Experienced Professionals:</strong> A team of experts offering valuable guidance to help you navigate opportunities and challenges.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Success-Oriented:</strong> A commitment to helping you achieve growth and meet your objectives.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Seamless Accessibility:</strong> Streamlined processes to ensure efficient access to our services.
          </li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div style={contentStyle} id="contact">
        <h2 style={{ textAlign: 'center', color: '#004d4d' }}>Contact Us</h2>
        <p>
          <strong>Address:</strong> S-370, BASEMENT PANCHSHEEL PARK , NEW DELHI, Delhi, India - 110017
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info.namanfinlease@gmail.com">info.namanfinlease@gmail.com</a>
        </p>
        <p>
          <strong>Mobile:</strong> <a href="tel:+918073605468">8073605468</a>
        </p>
      </div>

      <footer style={footerStyle}>
        <p>&copy; 2024 NamanFinlease. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// Inline styles
const headerStyle = {
  background: '#004d4d',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '20px auto',
  color: 'black',
  padding: '30px',
  backgroundColor: '#f7f7f7',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  lineHeight: '1.8',
};

const footerStyle = {
  background: '#004d4d',
  color: 'white',
  textAlign: 'center',
  padding: '15px 0',
  marginTop: '20px',
  boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
};

export default App;
