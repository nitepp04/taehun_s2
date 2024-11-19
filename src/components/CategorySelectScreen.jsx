import React from "react";
import { useNavigate } from "react-router-dom";
import { JobList } from "../data/JobList";

const CategorySelectScreen = () => {
  const navigate = useNavigate();

  function navigateToJobListWithJobData(jobData) {
    navigate(`/jobList`, {
      state: { jobData: jobData },
    });
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>카테고리를 선택하세요</h2>
      <div style={styles.grid}>
        {JobList.map((category) => (
          <div
            key={category.name}
            style={styles.card}
            onClick={() => navigateToJobListWithJobData(category)}
          >
            <p style={styles.cardTitle}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  card: {
    padding: "15px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    transition: "background-color 0.3s",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default CategorySelectScreen;
