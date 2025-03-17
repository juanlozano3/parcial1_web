import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Login from './components/Login';
import Robots from './components/Robots';

function App() {
    const { i18n } = useTranslation();

    return (
        <Router>
            <div style={{ textAlign: 'right', padding: '10px' }}>
                <button onClick={() => i18n.changeLanguage('es')}>Español</button>
                <button onClick={() => i18n.changeLanguage('en')}>English</button>
            </div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/robots" element={<Robots />} />
            </Routes>
        </Router>
    );
}

export default App;
