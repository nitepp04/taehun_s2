const styles = {   
  /* Global container styles */
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#151739", // Dark blue background
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontFamily: "'Poppins', 'Arial', sans-serif",
  },
  
  /* Back button styles */
  backButton: {
    position: "absolute",
    top: "15px",
    left: "15px",
    padding: "25px 30px",
    fontSize: "24px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  
  backButtonHover: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },

  /* Title styles */
  title: {
    fontSize: "7rem",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "100px",
    fontWeight: '550'
  },

  /* Policy container styles */
  policyExplainContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "15px",
    margin: "10px",
    maxWidth: "80%",
    width: "60%",
    color: "#ffffff",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  },

  /* PolicyBox content styles */
  policyBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "10px",
    maxHeight: "50%",
    overflowY: "auto",
  },

  policyBoxHeader: {
    marginBottom: "0px",
    fontSize: "1.2rem",
    fontWeight: "600",
  },

  policyBoxSubHeader: {
    marginTop: "0px",
    fontSize: "1rem",
    fontWeight: "400",
  },

  /* Scrollbar styles */
  policyBoxScrollbar: {
    width: "8px",
  },

  policyBoxScrollbarTrack: {
    background: "rgba(255, 255, 255, 0.1)",
  },

  policyBoxScrollbarThumb: {
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "4px",
  },

  /* Action buttons container */
  actionButtonsContainer: {
    display: "flex",
    flexDirection: "column", // 세로 정렬
    alignItems: "center", // 가로 방향으로 중앙 정렬
    justifyContent: "center", // 세로 방향으로 중앙 정렬
    gap: "1rem", // 각 요소 간 간격
    marginTop: "1rem",
  },

  /* Button for retake and upload */
  retakeButton: {
    backgroundColor: "#ff5722",
    color: "white",
    padding: "12px 24px",
    fontSize: "2rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  retakeButtonHover: {
    backgroundColor: "#f4511e",
  },

  uploadButton: {
    backgroundColor: "#2196f3",
    color: "white",
    padding: "12px 24px",
    fontSize: "2rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "30px",
    marginLeft: "30px"
  },

  uploadButtonHover: {
    backgroundColor: "#1976d2",
  },

  /* Checkbox styles */
  checkbox: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },

  agreeMent: {
    fontSize: "1.3rem"
  },

  /* Agree button styles */
  agreeButton: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1.3rem",
    backgroundColor: "#000000",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  agreeButtonDisabled: {
    backgroundColor: "#a9a9a9",
    cursor: "not-allowed",
  },

  /* Capture button styles */
  captureButton: {
    position: "absolute",
    bottom: "5%", // Below screen
    left: "50%", // Center horizontally
    transform: "translateX(-50%)", // Keep centered
    width: "140px", // Button size
    height: "140px",
    backgroundColor: "#ffffff",
    borderRadius: "50%", // Circular button
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
  },

  innerCircle: {
    width: "120px", // Inner circle size
    height: "120px",
    border: "4px solid #000000",
    borderRadius: "50%",
  },

  video: {
    width: "50%",
    borderRadius: "50px"
  },

  jobListContainer: {
    borderRadius: "20px",
    padding: "30px",
    margin: "20px",
    maxWidth: "100%",
    width: "90%",
  },

  /* PolicyBox content styles */
  jobList: {
    padding: "20px",
    borderRadius: "15px",
    marginTop: "10px",
    maxHeight: "800px",
    overflowY: "auto",
  },

  /* Media queries for different screen resolutions */
  "@media (max-width: 2960px) and (max-height: 1848px)": {
    container: {
      padding: "15px",
      fontSize: "1rem",
    },
    policyExplainContainer: {
      maxWidth: "80%", // Adjusted for responsiveness
      padding: "25px",
    },
    policyBox: {
      maxHeight: "450px",
    },
  },

  "@media (max-width: 2560px) and (max-height: 1600px)": {
    container: {
      padding: "10px",
      fontSize: "0.9rem",
    },
    policyExplainContainer: {
      maxWidth: "70%", // Adjusted for responsiveness
      padding: "20px",
    },
    policyBox: {
      maxHeight: "400px",
    },
  },

  explain: {
    fontSize: "2.4rem", // 글씨 크기를 2배로 설정
    lineHeight: "2.4", // 줄 간격도 조정
  },

  "@media (max-width: 768px)": {
    container: {
      padding: "10px",
      fontSize: "0.8rem",
    },
    policyExplainContainer: {
      maxWidth: "90%", // Adjusts well for smaller screens
      padding: "15px",
    },
    policyBox: {
      maxHeight: "350px",
    },
    retakeButton: {
      fontSize: "1rem", // Smaller button text on mobile
    },
    uploadButton: {
      fontSize: "1rem", // Smaller button text on mobile
    },
  },

  "@media (max-width: 480px)": {
    title: {
      fontSize: "1.5rem", // Adjusted title size for smaller screens
    },
    actionButtonsContainer: {
      flexDirection: "column", // Stack buttons on top of each other
      gap: "0.5rem",
    },
    retakeButton: {
      padding: "10px 20px", // Smaller padding on mobile
    },
    uploadButton: {
      padding: "10px 20px", // Smaller padding on mobile
    },
  },

  
};

export default styles;
