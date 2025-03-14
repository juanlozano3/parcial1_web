import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Robots from './components/Robots';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/robots" element={<Robots />} />
            </Routes>
        </Router>
    );
}

export default App;
