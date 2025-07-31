import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/main.jpg'; // Replace this with your actual image path

function Home() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const navigate = useNavigate();

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(1);

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) category = 'Fit';
    else category = 'Overweight';

    navigate('/bmi', {
      state: {
        bmi: roundedBMI,
        category,
      },
    });
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h1 style={styles.heading}>🏋️ Welcome to <span style={{ color: '#ffc107' }}>FitQuest</span></h1>
          <p style={styles.subheading}>Start your fitness journey with our BMI calculator</p>

          <form onSubmit={calculateBMI}>
            <input
              style={styles.input}
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              style={styles.input}
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <input
              style={styles.input}
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <select style={styles.input} value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button style={styles.button} type="submit">Calculate BMI</button>
          </form>
        </div>
        <div style={styles.imageContainer}>
          <img src={image} alt="Fitness" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
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
    width: '100%',
    maxWidth: '1200px',
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    width: '50%',
    color: '#2c3e50',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '10px',
    color:'#CD5C5C',
  },
  subheading: {
    marginBottom: '20px',
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#e67e22',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  imageContainer: {
    width: '45%',
    padding: '20px',
  },
  image: {
    width: '130%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  }
};

export default Home;
