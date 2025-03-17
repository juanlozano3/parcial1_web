import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../assets/image.png';

const Login = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login: username, password })
            });

            const data = await response.json();
            if (response.ok) {
                navigate('/robots'); // Redirige a la lista de robots
            } else {
                setError(t('authentication_error'));
            }
        } catch (error) {
            setError(t('authentication_error'));
        }
    };

    return (
        <div className="container mt-5 text-center">
            <h2>{t('robot_lovers')}</h2>  {/* Traducción agregada */}
            <div className="card mx-auto mt-3 p-4" style={{ maxWidth: '400px' }}>
                <img src={banner} alt="Banner" className="img-fluid mb-3" />
                <h3>{t('login')}</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">{t('login')}</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">{t('password')}</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">{t('enter')}</button>
                    <button type="button" className="btn btn-danger ms-2" onClick={() => { setUsername(''); setPassword(''); setError(''); }}>
                        {t('cancel')}
                    </button>
                </form>
            </div>
            <p className="mt-3">Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </div>
    );
};

export default Login;
