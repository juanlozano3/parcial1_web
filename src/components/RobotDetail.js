import React from 'react';
import { useTranslation } from 'react-i18next';

const RobotDetail = ({ robot, onClose }) => {
    const { t } = useTranslation();
    
    if (!robot) return null; // Si no hay robot seleccionado, no se muestra nada

    return (
        <div className="card mt-4 p-4 text-start">
            <h3>{robot.nombre}</h3>
            <img src={robot.imagen} alt={robot.nombre} className="img-fluid mb-3" style={{ maxWidth: "200px" }} />
            <p><strong>{t('id')}:</strong> {robot.id}</p>
            <p><strong>{t('model')}:</strong> {robot.modelo}</p>
            <p><strong>{t('manufacturer')}:</strong> {robot.empresaFabricante}</p>
            <p><strong>{t('fabrication_year')}:</strong> {robot.añoFabricacion}</p>
            <p><strong>{t('processing_capacity')}:</strong> {robot.capacidadProcesamiento}</p>
            <p><strong>{t('humor')}:</strong> {robot.humor}</p>
        </div>
    );
};

export default RobotDetail;
