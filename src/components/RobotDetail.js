import React from 'react';

const RobotDetail = ({ robot, onClose }) => {
    if (!robot) return null; 

    return (
        <div className="card mt-4 p-4 text-start">
            <h3>{robot.name}</h3>
            <img src={robot.image} alt={robot.name} className="img-fluid mb-3" style={{ maxWidth: "150px" }} />
            <p><strong>Año de Fabricación:</strong> {robot.anio}</p>
            <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidad_procesamiento}</p>
            <p><strong>Humor:</strong> {robot.humor}</p>
        </div>
    );
};

export default RobotDetail;
