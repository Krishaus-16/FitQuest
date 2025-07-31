import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Motivation from './Motivation'; // Adjust path if needed

const Footer = () => {
  const location = useLocation();

  return (
    <footer style={styles.footer}>
      <div>
        <p>© {new Date().getFullYear()} FitQuest. All rights reserved.</p>
      </div>

      {/* Show Motivation only if not on /motivation route */}
      {location.pathname !== '/motivation' && (
        <div>
          <Motivation />
        </div>
      )}
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#117a65',
    color: '#273746',
    textAlign: 'center',
    padding: '15px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Footer;
