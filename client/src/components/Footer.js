import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const footerStyle = {
    backgroundColor: 'rgba(22, 22, 22)',
    position: isScrolled ? 'relative' : 'fixed',
    bottom: 0,
    width: '100%',
    height: '150px',
    padding: '10px 0',
    maxWidth: '100%',
    color: '#fff',
  };

  return (
    <footer style={footerStyle}>
      <center>
        <h1>Interview Preparation Application</h1>
        <p>The number-one way to learn how to ace an interview is to come prepared with strong answers to interview questions.</p>
      </center>
      <hr style={{ borderTop: '1px solid #b5a9a9', margin: '10px 0' }} />
      <center>
        <p style={{ color: '#b5a9a9' }}>&copy; 2023 by E-Team(JK).</p>
      </center>
    </footer>
  );
};

export default Footer;
