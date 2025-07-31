import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for contacting us.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Send Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button style={styles.button} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  background: {
    background: 'linear-gradient(135deg, #f3e7e9, #e3eeff)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxShadow: 'inset 0 0 50px #a1c4fd',
  },
  container: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '50px',
    boxShadow: '0 0 20px 5px rgba(230, 126, 34, 0.6)',
    width: '100%',
    maxWidth: '600px',
    color: '#2c3e50',
    textAlign: 'center',
    border: '1px solid rgba(230, 126, 34, 0.4)',
  },
  heading: {
    marginBottom: '25px',
    color: '#e67e22',
    textShadow: '0 0 8px #e67e22',
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '14px',
    margin: '12px 0',
    borderRadius: '12px',
    border: '1px solid #e67e22',
    fontSize: '1.1rem',
    boxShadow: '0 0 8px rgba(230, 126, 34, 0.5)',
    transition: 'box-shadow 0.3s ease-in-out',
  },
  textarea: {
    width: '100%',
    padding: '14px',
    margin: '12px 0',
    borderRadius: '12px',
    border: '1px solid #e67e22',
    fontSize: '1.1rem',
    minHeight: '120px',
    resize: 'vertical',
    boxShadow: '0 0 8px rgba(230, 126, 34, 0.5)',
    transition: 'box-shadow 0.3s ease-in-out',
  },
  button: {
    width: '100%',
    padding: '14px',
    marginTop: '15px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#e67e22',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    cursor: 'pointer',
    boxShadow: '0 0 15px #e67e22',
    transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  },
};

export default Contact;
