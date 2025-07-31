import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import underweightImage from '../assets/underweight-image.jpg';
/* Removed import of local fitImage since we will use external URL */
// Removed import of overweightImage from local assets

const BMI = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bmi, category } = location.state || {};

  if (!bmi) {
    return (
      <div style={resultStyles.background}>
        <div style={resultStyles.card}>
          <h2>No BMI data found</h2>
          <button onClick={() => navigate('/')} style={resultStyles.button}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const categoryColors = {
    Underweight: '#f39c12',
    Fit: '#2ecc71',
    Overweight: '#e74c3c'
  };

  const categoryImages = {
    Underweight: underweightImage,
    Fit: "https://barmethod.com/wp-content/uploads/2023/02/POST-WORKOUT_0564-1024x681.jpg",
    Overweight: "https://diabetes.org/sites/default/files/styles/large/public/2024-03/featured_card_size_15.png?itok=1xI5OZ4U",
  };
  return (
    <div style={resultStyles.background}>
      <div style={resultStyles.container}>
        <div style={resultStyles.cardLeft}>
          <h2 style={{ marginBottom: '20px' }}>🎯 Your BMI Result</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>BMI: {bmi}</p>
          <p style={{ fontSize: '1.5rem', color: categoryColors[category] || 'white' }}>
            Category: {category}
          </p>
          <button onClick={() => navigate('/')} style={resultStyles.button}>
            Recalculate
          </button>
          <button
            onClick={() => navigate('/workout', { state: { category } })}
            style={{ ...resultStyles.button, backgroundColor: '#239b56', marginTop: '10px' }}
          >
            View Suggested Workouts
          </button>
          {/* Button for navigating to the Diet page */}
        <button
          onClick={() => navigate('/diet', { state: { category } })}
          style={{ ...resultStyles.button, backgroundColor: '#2471a3 ', marginTop: '10px' }}
        >
          View 7-Day Meal Plan
        </button>
        </div>

        <div style={resultStyles.imageContainer}>
          <img
            src={categoryImages[category] || 'default-image.jpg'}  // Default image if category not found
            alt={`${category} Image`}
            style={resultStyles.image}
          />
        </div>
      </div>
    </div>
  );
};

const resultStyles = {
  background: {
    background: 'linear-gradient(to right, #f3e7e9, #e3eeff)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
  },
  cardLeft: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    color: '#2c3e50',
    textAlign: 'left',
    width: '50%',
  },
  imageContainer: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  button: {
    marginTop: '20px',
    padding: '12px',
    width: '100%',
    backgroundColor: '#e67e22',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  }
};

export default BMI;
