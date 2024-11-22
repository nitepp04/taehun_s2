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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa", // 밝은 배경색
    minHeight: "100vh", // 전체 화면 채우기
    margin: 0, // 기본 마진 제거
  },
  title: {
    fontSize: "32px", // 더 큰 타이틀 폰트
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2열 레이아웃
    gap: "20px",
    width: "80%", // 태블릿 화면에서 적절한 너비
    maxWidth: "600px", // 최대 너비 제한
  },
  card: {
    padding: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과
  },
  cardHover: {
    backgroundColor: "#007BFF",
    color: "#fff",
    transform: "translateY(-5px)", // 호버 시 올라오는 효과
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
  },
};

export default CategorySelectScreen;
