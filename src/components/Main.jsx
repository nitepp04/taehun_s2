import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Main({ inputKey }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  
  const navigate = useNavigate();
  const { jobData, jobName } = useLocation().state;
  
  const post_test_url = `http://127.0.0.1:1101/post/img?key=${inputKey}`;
  const r_url = 'https://49y0g7b24k.execute-api.ap-northeast-1.amazonaws.com/clientToServer'

  useEffect(() => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream; // 비디오 스트림 연결
    });
  }, []);
  

  const getWebcam = (callback) => {
    const constraints = {
      video: true,
      audio: false,
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(callback)
      .catch(err => console.log('Error accessing webcam:', err));
  };

  function navigateToJobListWithJobName() {
    navigate('/jobList', {
      state : { jobData : jobData }
    });
  };

  // 스크린샷 캡처
  const screenshot = () => {
    setIsCapturing(true);
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
  
    context.scale(-1, 1); // 좌우 반전
    context.translate(-canvas.width, 0);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('캡처 블롭 생성 실패');
        setIsCapturing(false);
        return;
      }
  
      const file = new File([blob], `${inputKey}.jpg`, { type: 'image/jpeg' });
      const formData = new FormData();
      formData.append('img', file);
      formData.append('key', inputKey);
      formData.append('jobName', jobName);
  
      const url = URL.createObjectURL(blob);
      setImgUrl(url);
  
      // 비디오 재생 상태 확인 후 일시 정지
      if (!video.paused) {
        video.pause();
      }
  
      const confirmUpload = window.confirm('이미지를 서버에 업로드 하시겠습니까?');
      if (confirmUpload) {
        axios.post(post_test_url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log('업로드 성공:', res.data);
        })
        .catch((err) => {
          console.error('업로드 중 에러 발생:', err);
          alert('업로드에 실패했습니다. 다시 시도해주세요.');
        });
      }
  
      // 업로드 후 재생 상태 확인
      if (video.paused) {
        video.play().catch((err) => console.error('비디오 재생 중 에러 발생:', err));
      }
  
      setIsCapturing(false);
      setImgUrl('');
    }, 'image/jpeg');
  };
  
  
  // 비디오 화면과 캡처 버튼 표시
  return (
    <div style={{ position: "relative", zIndex: "100", width: "1024px", backgroundColor: "white" }}>
      <button onClick={function() {navigateToJobListWithJobName()}}>뒤로가기</button>
      <video
        id="videoCam"
        ref={videoRef}
        autoPlay
        style={{
          width: "1024px",
          height: "768px",
          transform: "scaleX(-1)"
        }}
      />
      <canvas ref={canvasRef} width="1024" height="768" style={{ display: 'none' }}></canvas>
      
      {/* 캡처 중일 때 이미지 표시 */}
      {isCapturing && (
        <img 
          src={imgUrl} 
          alt="Screenshot" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1024px',
            height: '768px',
            objectFit: 'cover',
            zIndex: 99 // 비디오보다 위에 표시
          }} 
        />
      )}
      
      {/* 캡처 버튼 */}
      <div
        onClick={screenshot}
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
      
      <p>{jobName}</p>
    </div>
  );
}

export default Main;
