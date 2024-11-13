import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Main({ inputKey }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false); // 캡처 상태를 나타내는 변수
  const [imgUrl, setImgUrl] = useState(''); // 스크린샷 이미지 URL을 저장할 상태

  const post_test_url = `http://127.0.0.1:1101/post/img?key=${inputKey}`;
  const r_url = 'https://49y0g7b24k.execute-api.ap-northeast-1.amazonaws.com/clientToServer'

  useEffect(() => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream;
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

  const sreenShot = () => {
    setIsCapturing(true); // 캡처 상태 설정
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.scale(-1, 1); // 좌우 반전
    context.translate(-1024, 0); // 좌우 반전
    context.drawImage(videoRef.current, 0, 0, 1024, 768);

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Failed to create blob from canvas');
        setIsCapturing(false);
        return;
      }

      let file = new File([blob], `${inputKey}.jpg`, { type: "image/jpeg" }); // 파일 이름 설정
      const formData = new FormData();
      formData.append('img', file); // 'img'라는 키로 파일 추가
      formData.append('key', inputKey); // key 추가

      // Blob URL 생성
      const url = URL.createObjectURL(blob);
      setImgUrl(url); // 스크린샷 URL 상태 설정

      // 사용자에게 업로드할 것인지 물어보기
      videoRef.current.pause(); // 비디오 일시 정지

      const confirmUpload = window.confirm("이미지를 서버에 업로드 하시겠습니까?");
      if (confirmUpload) {
        // 확인 시 서버에 이미지 업로드
        axios.post(r_url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          console.log('Upload response:', res.data);
        })
        .catch(err => {
          console.error('파일 업로드 중 에러 발생:', err);
        });
      }

      // 캡처 완료 후 상태 초기화
      setIsCapturing(false);
      setImgUrl(''); // 이미지 URL 초기화
      videoRef.current.play(); // 비디오 재생
    }, 'image/jpeg');
  };

  return (
    <div style={{ position: "relative", zIndex: "100", width: "1024px", backgroundColor: "white" }}>
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
      <div
        onClick={sreenShot}
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
    </div>
  );
}

export default Main;
