import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Main from './components/Main.jsx';

export default function App() {
  const [key, setKey] = useState(null);

  useEffect(function() {
    const inputKey = prompt("키 입력 ㄱ");
    setKey(inputKey);
  }, []);

  if (key !== null) {
    return (
      <Main inputKey={key}></Main>
    )
  }
}
