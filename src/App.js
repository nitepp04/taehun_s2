import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelectScreen from './components/CategorySelectScreen';
import JobListPage from './category/JobListPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CategorySelectScreen />} />
                <Route path="/jobList" element={<JobListPage />} />
                
                {/* <Route path="/category/:category" element={<Specific />} /> 카테고리별 페이지 */}
            </Routes>
        </Router>
    );
}

export default App;