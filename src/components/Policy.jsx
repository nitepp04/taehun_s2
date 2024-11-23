import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Policy() {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const goToCategorySelectScreen = () => {
    navigate("/categoryselect");
  };

  return (
    <div>
      <p>Policy</p>
      <input
        type="checkbox"
        checked={agree}
        onChange={function () {
          setAgree(!agree);
        }}
      ></input>
      {agree && <button onClick={goToCategorySelectScreen}>시작</button>}
    </div>
  );
}

export default Policy;
