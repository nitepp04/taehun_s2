import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const jobData = location.state?.jobData; // 전달받은 jobData
  if (!jobData) {
    return <p>잘못된 접근입니다. 다시 시도해주세요.</p>;
  }

  // 사진찍기 페이지로 이동
  const navigateToCameraScreen = (jobName) => {
    navigate(`/camera`, {
      state: { jobData: jobData, jobName: jobName },
    });
  };

  // 이전 화면(카테고리 선택)으로 돌아가기
  const navigateToCategorySelect = () => {
    navigate("/categoryselect");
  };

  return (
    <div style={styles.container}>
      <button onClick={navigateToCategorySelect} style={styles.backButton}>
        뒤로가기
      </button>
      <h2 style={styles.title}>{jobData.name}</h2>
      <div style={styles.list}>
        {jobData.list.map((job, idx) => (
          <p
            key={idx}
            style={styles.listItem}
            onClick={() => navigateToCameraScreen(job)}
          >
            {job}
          </p>
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
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh", // 화면 전체 채우기
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "80%", // 적당한 리스트 너비
    maxWidth: "600px", // 최대 리스트 너비
  },
  listItem: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
    transition: "background-color 0.3s ease, transform 0.2s",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  },
  listItemHover: {
    backgroundColor: "#007BFF",
    color: "#fff",
    transform: "translateY(-3px)",
  },
  backButton: {
    alignSelf: "flex-start", // 버튼을 왼쪽 정렬
    marginBottom: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default JobListPage;
