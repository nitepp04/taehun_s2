import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/styles";

function Home() {
  const navigate = useNavigate();
  
  return (
    <div style={styles.container}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <h1 style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          color: '#ffffff',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          marginBottom: '2rem'
        }}>
          IGRUS Bedrock Gallery
        </h1>
        <button
          style={{
            padding: '15px 40px',
            fontSize: '2rem',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
              backgroundColor: '#45a049'
            }
          }}
          onClick={() => navigate('/policy')}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;