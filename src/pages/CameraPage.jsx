import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/styles";

function makeUniqueID() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

const formatFileName = (jobName) => {
  const formattedJobName = jobName.toLowerCase().replace(/\s+/g, "");
  return `future-${formattedJobName}-${makeUniqueID()}.jpg`;
};

function Main({ inputKey }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [captured, setCaptured] = useState(false);

  const navigate = useNavigate();
  const { jobData, jobName: rawJobName } = useLocation().state;

  const jobName = rawJobName.replace(/\s*\([^)]*\)/g, "");

  const uploadUrl = "https://49y0g7b24k.execute-api.ap-northeast-1.amazonaws.com/clientToServer"; // 환경 변수 가져오기
  // const uploadUrl = process.env.REACT_APP_API_URL; // 환경 변수 가져오기

  // const post_test_url = `http://127.0.0.1:1101/post/img?key=${inputKey}`;

  useEffect(() => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.style.transform = "scaleX(-1)";  // 좌우 반전 추가
  
      videoRef.current.onloadedmetadata = () => {
        const videoWidth = videoRef.current.videoWidth;
        const videoHeight = videoRef.current.videoHeight;
  
        const canvas = canvasRef.current;
        canvas.width = videoWidth;
        canvas.height = videoHeight;
      };
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
    navigate("/jobSelect", { state: { jobData: jobData } });
  };

  const screenshot = () => {
    setIsCapturing(true);
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    context.save();
    context.scale(-1, 1);
    context.translate(-canvas.width, 0);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    context.restore();

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("캡처 블롭 생성 실패");
        setIsCapturing(false);
        return;
      }

      const url = URL.createObjectURL(blob);
      setImgUrl(url);
      setCaptured(true);
      setIsCapturing(false);
    }, "image/jpeg");
  };

  // 전시 화면 next.js로 이미지 업로드 성공시 전송
  function notifySuccessToNextJs() {
    const apiUrl = process.env.REACT_APP_NOTIFY_SUCCESS_API_URL;

    axios
      .post(apiUrl, { status: "success" })
      .then((response) => {
        console.log("Next.js notified successfully:", response.data);
        alert("Next.js 서버에 신호를 보냈습니다!");
      })
      .catch((error) => {
        if (error.response) {
          // 서버 응답이 있지만 상태 코드가 2xx가 아닐 경우
          console.error(
            `Server responded with status: ${error.response.status}`
          );
          console.error("Response data:", error.response.data);
        } else if (error.request) {
          // 요청이 전송되었지만 응답을 받지 못한 경우
          console.error("No response received from the server:", error.request);
        } else {
          // 요청 설정 중 발생한 오류
          console.error("Error setting up the request:", error.message);
        }
        alert("Next.js 서버에 신호를 보내는 데 실패했습니다.");
      });
  }

  const handleUpload = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("캡처 블롭 생성 실패");
        setIsCapturing(false);
        return;
      }

      const fileName = formatFileName(jobName);
      const file = new File([blob], fileName, { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("img", file);
      formData.append("key", inputKey);
      formData.append("jobName", jobName);

      console.log(Array.from(formData.entries()));

      axios
        .post(uploadUrl, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          notifySuccessToNextJs();

          navigate("/"); // 사진 업로드 성공 후 정책 확인 페이지(첫 화면)로 돌아가기
          console.log("업로드 성공:", res.data);
          alert("이미지가 성공적으로 업로드되었습니다!");
        })
        .catch((err) => {
          console.error("업로드 중 에러 발생:", err);
          alert("업로드에 실패했습니다. 다시 시도해주세요.");
        });

      setCaptured(false);
      setImgUrl("");
    }, "image/jpeg");
  };

  const retakePhoto = () => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream; // 스트림을 다시 설정
      videoRef.current.play(); // 비디오 재생
    });
    setCaptured(false); // 상태 초기화
    setImgUrl(""); // 이미지 URL 초기화
  };

  return (
    <div style={styles.container}>
      <button onClick={navigateToJobListWithJobName} style={styles.backButton}>
        뒤로가기
      </button>
      {!captured ? (
        <video ref={videoRef} autoPlay style={styles.video} />
      ) : (
        <img src={imgUrl} alt="Captured" style={styles.capturedImage} />
      )}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {!captured && (
        <div onClick={screenshot} style={styles.captureButton}>
          <div style={styles.innerCircle}></div>
        </div>
      )}

      {captured && (
        <div style={styles.retakeButtonContainer}>
          <button onClick={retakePhoto} style={styles.retakeButton}>
            다시 찍기
          </button>
        </div>
      )}

      {captured && (
        <div style={styles.uploadButtonContainer}>
          <button onClick={handleUpload} style={styles.uploadButton}>
            전송하기
          </button>
        </div>
      )}
      <div
        onClick={function() {screenshot()}}
        style={{
          position: "absolute",
          zIndex: "101",
          bottom: '5%',
          left: "46%",
          cursor: "pointer",
          backgroundColor: "white",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{
          textAlign: "center",
          width: "60px",
          height: "60px",
          border: "2px solid",
          borderRadius: "50%",
        }}></div>
      </div>
      <p>{rawJobName}</p>
    </div>
  );
}

export default Main;
