import React from 'react';
import bgImage from '../assets/contactus.jpeg';

const ContactUs = () => {
  return (
    <div style={styles.contactContainer}>
      <div style={styles.blurBackground}></div>
      <div style={styles.content}>
        <h2 style={styles.header}>Contact Us</h2>
        <div style={styles.info}>
          <p style={styles.infoItem}><strong>Email:</strong> abc@gmail.com</p>
          <p style={styles.infoItem}><strong>Phone Number:</strong> 123-456-7890</p>
        </div>
        <div style={styles.feedback}>
          <h3 style={styles.subHeader}>Remarks / Feedback</h3>
          <textarea style={styles.textArea} placeholder="Enter your feedback here..."></textarea>
          <button style={styles.submitButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(8px)',
    zIndex: -1,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    maxWidth: '800px',
    textAlign: 'center',
  },
  header: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#142d4c',
    marginBottom: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  info: {
    marginBottom: '30px',
  },
  infoItem: {
    fontSize: '20px',
    color: '#333',
    margin: '10px 0',
    fontFamily: 'Arial, sans-serif',
  },
  feedback: {
    textAlign: 'left',
  },
  subHeader: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#142d4c',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  textArea: {
    width: '100%',
    height: '150px',
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '18px',
    marginBottom: '20px',
    resize: 'vertical',
    fontFamily: 'Arial, sans-serif',
  },
  submitButton: {
    backgroundColor: '#64b5f6',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
    transition: 'background-color 0.3s ease',
  },
};

export default ContactUs;
