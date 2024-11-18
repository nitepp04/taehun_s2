import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JobListPage = () => {
    const { jobData } = useLocation().state;
    const navigate = useNavigate();

    function navigateToMainWithMain(jobName) {
        navigate(`/main`, {
            state: { jobData : jobData, jobName : jobName }
        });
    };
    function navigateToCategorySelect() {
        navigate('/');
    };
    
    return (
        <div>
            <button onClick={function() {navigateToCategorySelect()}}>뒤로가기</button>
            <h2>{jobData.name}</h2>
            <div>
                {jobData.list.map((job, idx) => (
                    <p
                        onClick={function() {navigateToMainWithMain(job)}} 
                        key={idx}
                    >
                        {job}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default JobListPage;
