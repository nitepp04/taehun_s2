import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const jobData = location.state?.jobData; // 전달받은 jobData
  if (!jobData) {
    return <p>잘못된 접근입니다. 다시 시도해주세요.</p>;
  }

  // 특정 직업으로 이동하는 함수
  const navigateToMainWithMain = (jobName) => {
    navigate(`/main`, {
      state: { jobData: jobData, jobName: jobName },
    });
  };

  // 카테고리 선택 페이지로 돌아가는 함수
  const navigateToCategorySelect = () => {
    navigate("/");
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
            onClick={() => navigateToMainWithMain(job)}
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
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
    marginTop: "20px",
  },
  listItem: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    textAlign: "center",
    transition: "background-color 0.3s",
  },
  backButton: {
    marginBottom: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default JobListPage;
