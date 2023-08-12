import React from 'react';
import ConsultationCard from './ConsultationCard';

const ConsultationList = ({ consultations }) => {
    return (
        <div className="consultation-list">
            <h2>Consultations</h2>
            {consultations.map((consultation, index) => (
                <ConsultationCard
                    key={index}
                    userName={consultation.userName}
                    consultationDate={consultation.consultationDate}
                    topic={consultation.topic}
                />
            ))}
        </div>
    );
};

export default ConsultationList;
