import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../assets/image.png';
import RobotDetail from './RobotDetail';

const Robots = () => {
    const { t } = useTranslation();
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/robots') // Se conecta al backend
            .then(response => response.json())
            .then(data => setRobots(data))
            .catch(error => console.error("Error fetching robots:", error));
    }, []);

    return (
        <div className="container mt-5 text-center">
            <h2>{t('robot_lovers')}</h2> {/* Traducción agregada */}
            <div className="card p-4">
                <img src={banner} alt="Banner" className="img-fluid mb-3" />
                <h3>{t('robot_list')}</h3>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>{t('id')}</th>
                            <th>{t('name')}</th>
                            <th>{t('model')}</th>
                            <th>{t('manufacturer')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {robots.map((robot) => (
                            <tr key={robot.id} onClick={() => setSelectedRobot(robot)} style={{ cursor: "pointer" }}>
                                <td>{robot.id}</td>
                                <td>{robot.nombre}</td>
                                <td>{robot.modelo}</td>
                                <td>{robot.empresaFabricante}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedRobot && <RobotDetail robot={selectedRobot} onClose={() => setSelectedRobot(null)} />}
            <p className="mt-3">Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </div>
    );
};

export default Robots;
