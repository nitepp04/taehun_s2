import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Main({ inputKey }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const { jobData, jobName: rawJobName } = useLocation().state;

  const jobName = rawJobName.replace(/\s*\([^)]*\)/g, "");
  const post_test_url = `http://127.0.0.1:1101/post/img?key=${inputKey}`;

  useEffect(() => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  const getWebcam = (callback) => {
    const constraints = { video: true, audio: false };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(callback)
      .catch((err) => console.log("Error accessing webcam:", err));
  };

  const navigateToJobListWithJobName = () => {
    navigate("/jobList", { state: { jobData: jobData } });
  };

  const screenshot = () => {
    setIsCapturing(true);
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    context.scale(-1, 1);
    context.translate(-canvas.width, 0);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          console.error("캡처 블롭 생성 실패");
          setIsCapturing(false);
          return;
        }

        const url = URL.createObjectURL(blob);
        setImgUrl(url);
        setShowPopup(true);
        setIsCapturing(false);
      },
      "image/jpeg"
    );
  };

  const handleUpload = () => {
    const canvas = canvasRef.current;
    canvas.toBlob(
      (blob) => {
        const file = new File([blob], `${inputKey}.jpg`, { type: "image/jpeg" });
        const formData = new FormData();
        formData.append("img", file);
        formData.append("key", inputKey);
        formData.append("jobName", jobName);

        axios
          .post(post_test_url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            console.log("업로드 성공:", res.data);
            alert("이미지가 성공적으로 업로드되었습니다!");
          })
          .catch((err) => {
            console.error("업로드 중 에러 발생:", err);
            alert("업로드에 실패했습니다. 다시 시도해주세요.");
          });

        setShowPopup(false);
        setImgUrl("");
      },
      "image/jpeg"
    );
  };

  const retakePhoto = () => {
    setShowPopup(false);
    setImgUrl("");
  };

  return (
    <div style={styles.container}>
      <button onClick={navigateToJobListWithJobName} style={styles.backButton}>
        뒤로가기
      </button>
      <video
        ref={videoRef}
        autoPlay
        style={styles.video}
      />
      <canvas ref={canvasRef} width="1024" height="768" style={{ display: "none" }} />

      {imgUrl && (
        <img
          src={imgUrl}
          alt="Screenshot"
          style={styles.capturedImage}
        />
      )}

      {!showPopup && (
        <div onClick={screenshot} style={styles.captureButton}>
          <div style={styles.innerCircle}></div>
        </div>
      )}

      {showPopup && (
        <div style={styles.popup}>
          <h2>얼굴이 잘 나왔는지 확인하세요</h2>
          <img src={imgUrl} alt="Captured" style={styles.popupImage} />
          <div style={styles.buttonContainer}>
            <button onClick={handleUpload} style={styles.popupButton}>
              전송하기
            </button>
            <button onClick={retakePhoto} style={styles.popupButton}>
              다시 찍기
            </button>
          </div>
        </div>
      )}

      <p>{rawJobName}</p>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    zIndex: 100,
    width: "1024px",
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 102,
  },
  video: {
    width: "1024px",
    height: "768px",
    transform: "scaleX(-1)",
  },
  capturedImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "1024px",
    height: "768px",
    objectFit: "cover",
    zIndex: 99,
  },
  captureButton: {
    position: "absolute",
    zIndex: 101,
    bottom: "5%",
    left: "46%",
    cursor: "pointer",
    backgroundColor: "white",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: "60px",
    height: "60px",
    border: "2px solid",
    borderRadius: "50%",
  },
  popup: {
    position: "absolute",
    top: "20%",
    left: "25%",
    width: "50%",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    zIndex: 200,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  popupImage: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  popupButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "white",
  },
};

export default Main;
