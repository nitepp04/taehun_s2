import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CategorySelectScreen from './components/CategorySelectScreen';
import JobListPage from './category/JobListPage';
import Main from './components/Main';
import Policy from './components/Policy';
import Home from './components/Home';

function App() {
    const navigate = useNavigate();

    useEffect(function() {
        navigate('/home');
    }, [navigate]);
    
    return (
            <Routes>
                <Route path="/" element={<CategorySelectScreen />} />
                <Route path="/categoryselect" element={<CategorySelectScreen />} />
                <Route path="/jobList" element={<JobListPage />} />
                <Route path='/main' element={<Main />} /> 
                <Route path='/home' element={<Home />} />
            </Routes>
    );
}

export default App;