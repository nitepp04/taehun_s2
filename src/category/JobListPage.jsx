import React, { useState } from 'react';
import { JobList } from '../data/JobList';
import JobListViewer from './JobListViewer';
import { useNavigate, useRoutes } from 'react-router-dom';

function JobListScreen({idx, onClick}) {
    const hello = useRoutes().props;

    console.log(hello);
    
    return (
        <div onClick={onClick} style={{cursor: 'pointer'}}>
            {
                JobList.map(function(i) {
                    return null;
                })
            }
        </div>
    );
}

export default JobListScreen;
