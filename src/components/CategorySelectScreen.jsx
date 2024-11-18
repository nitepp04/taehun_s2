import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JobList } from '../data/JobList';

const CategorySelectScreen = () => {
    const navigate = useNavigate();  // navigate 훅을 사용

    function navigateToJobListWithJobData(jobData) {
        navigate(`/jobList`, {
            state: { jobData : jobData }
        });
    };

    return (
        <div>
            {
                JobList.map(jobData => {
                    return (
                        <p key={jobData.name} onClick={() => navigateToJobListWithJobData(jobData)}>
                            {jobData.name}
                        </p>
                    );
                })
            }
        </div>
    );
};

export default CategorySelectScreen;
