import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../assets/image.png';
import RobotDetail from './RobotDetail';


const Robots = () => {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);


    useEffect(() => {
        const robotsData = [
            { id: 1, name: "Omar", modelo: "1", empresa: "Santa Fe" , anio: 1981, capacidad_procesamiento:1.8, humor: "chistoso" },
            { id: 2, name: "robot", modelo: "2", empresa: "Robots",  anio: 1989, capacidad_procesamiento:1.8, humor: "chistoso y bueno"  },
            { id: 3, name: "C3PO", modelo: "1", empresa: "Starwars", anio: 1281, capacidad_procesamiento:1.8, humor: "chistoso y actor"  },
            { id: 4, name: "a", modelo: "3", empresa: "Robots", anio: 2981, capacidad_procesamiento:1.8, humor: "chistoso"  },
        ];

        setRobots(robotsData);
    }, []);

    return (
        <div className="container mt-5 text-center">
            <h2>Adopta un Robot con Robot Lovers!</h2>
            <div className="card p-4">
                <img src={banner} alt="Banner" className="img-fluid mb-3" />
                <h3>Listado de Robots</h3>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Modelo</th>
                            <th>Empresa Fabricante</th>
                        </tr>
                    </thead>
                    <tbody>
                        {robots.map((robot) => (
                            <tr key={robot.id} onClick={() => setSelectedRobot(robot)} style={{ cursor: "pointer" }}>
                                <td>{robot.id}</td>
                                <td>{robot.name}</td>
                                <td>{robot.modelo}</td>
                                <td>{robot.empresa}</td>
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
