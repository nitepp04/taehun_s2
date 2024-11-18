import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function JobListScreen({ onClick }) {
  const location = useLocation();
  const jobData = location.state;

  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {jobData.list.map(function (jobName) {
        return <div key={jobName}>{jobName}</div>;
      })}
    </div>
  );
}

export default JobListScreen;
