import React from "react";
import { useNavigate } from "react-router-dom";
import { JobList } from "../data/JobList";
import styles from "../styles/styles";

const CategorySelectScreen = () => {
  const navigate = useNavigate();

  function navigateToJobListWithJobData(jobData) {
    navigate(`/jobSelect`, {
      state: { jobData: jobData },
    });
  }

  return (
    <div style={styles.container}>
      <button 
        onClick={() => navigate('/policy')} 
        style={styles.backButton}
      >
        뒤로가기
      </button>
      
      <h2 style={styles.title}>직업 카테고리 선택</h2>
<div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))',
        gap: '1.3rem',
        width: '100%',
        maxWidth: '95%',
        padding: '0.5rem',
        overflowY: "auto"
      }}>
        {JobList.map((category) => (
          <div
          key={category.name}
          onClick={() => navigateToJobListWithJobData(category)}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            '&:hover': {
              transform: 'translateY(-5px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }
          }}
          >
            <p style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#ffffff',
              textAlign: 'center',
              margin: 0
            }}>
              {category.name}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelectScreen;