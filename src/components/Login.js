import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../assets/image.png';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const credenciales = {
        username: "admin",
        password: "pass"
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === credenciales.username && password === credenciales.password) {
            navigate('/robots'); 
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="container mt-5 text-center">
            <h2>Adopta un Robot con Robot Lovers!</h2>
            <div className="card mx-auto mt-3 p-4" style={{ maxWidth: '400px' }}>
            <img src={banner} alt="Banner" className="img-fluid mb-3" />
                <h3>Inicio de sesión</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Nombre de usuario</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                    <button type="button" className="btn btn-danger ms-2" onClick={() => { setUsername(''); setPassword(''); setError(''); }}>Cancelar</button>
                </form>
            </div>
            <p className="mt-3">Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </div>
    );
};

export default Login;
