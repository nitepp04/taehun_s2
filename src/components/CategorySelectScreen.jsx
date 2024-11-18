import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Specific from '../category/JobListPage';
import { JobList } from '../data/JobList';

const CategorySelectScreen = () => {
    const navigate = useNavigate();  // navigate 훅을 사용

    function navigateWithJobData(jobData) {
        // 선택한 카테고리로 이동
        navigate(`/jobList`,{
           jobData : jobData
        });
    };

    // '기술 엔지니어링' 등이 있는 카테고리 화면
    // 특정 카테고리를 누르면, 그 카테고리에 해당하는 jobList를 navigate할때 같이 넘겨 줌

    return (
        <div style={{}}>
            {JobList.map(jobData => {
                <div onClick={()=>{
                    navigateWithJobData(jobData);
                }}>dfaskljdjfaskldfajsklj{jobData.name}</div>
                // 하나하나 jobData가 들어올거임
                // 내부에는 name,list 존재
                // return <Specific jobCategory={jobData.name} jobList={jobData.list}/>
            })}
        </div>
    );
};

export default CategorySelectScreen;