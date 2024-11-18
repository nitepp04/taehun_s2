import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelectScreen from './components/CategorySelectScreen';
import JobListPage from './category/JobListPage';
import Main from './components/Main';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CategorySelectScreen />} />
                <Route path="/jobList" element={<JobListPage />} />
                <Route path='/main' element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;