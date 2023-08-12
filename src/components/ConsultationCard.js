import React from 'react';

const ConsultationCard = ({ userName, consultationDate, topic }) => {
    return (
        <div className="consultation-card">
            <h3>{userName}</h3>
            <p>Date: {consultationDate}</p>
            <p>Topic: {topic}</p>
        </div>
    );
};

export default ConsultationCard;
