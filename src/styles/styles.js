export const styles = {
  // Global container styles
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#151739", // 짙은 푸른색 배경
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontFamily: "'Poppins', 'Arial', sans-serif",
  },

  // Back button styles
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "10px 20px",
    fontSize: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },

  // Title styles
  title: {
    fontSize: "2rem",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "2rem",
  },

  // Policy container styles
  policy_explain_container: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "30px",
    margin: "20px",
    maxWidth: "800px",
    width: "90%",
    color: "#ffffff",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  },

  // PolicyBox content styles
  policyBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "20px",
    maxHeight: "500px",
    overflowY: "auto",
    "& h5": {
      marginBottom: "0px",
      fontSize: "1.2rem", // h5의 fontSize 지정
      fontWeight: "600",
    },
    "& h6": {
      marginTop: "0px",
      fontSize: "1rem", // h6의 fontSize 지정
      fontWeight: "400",
    },
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(255, 255, 255, 0.1)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "4px",
    },
  },

  // Action buttons container
  actionButtonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },

  // Button for retake and upload
  retakeButton: {
    backgroundColor: "#ff5722",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f4511e",
    },
  },

  uploadButton: {
    backgroundColor: "#2196f3",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1976d2",
    },
  },

  // Checkbox styles
  checkbox: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },

  // Agree button styles
  agreeButton: {
    width: "100%",
    padding: "1rem",
    fontSize: "1.1rem",
    backgroundColor: "#000000",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:disabled": {
      backgroundColor: "#a9a9a9",
      cursor: "not-allowed",
    },
  },

  
};

export default styles;
