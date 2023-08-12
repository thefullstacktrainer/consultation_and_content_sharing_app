import React from 'react';
import PropTypes from 'prop-types';

const ConsultationCard = ({ userName, consultationDate, topic }) => {
    return (
        <div className="consultation-card">
            <h3>{userName}</h3>
            <p>Date: {consultationDate}</p>
            <p>Topic: {topic}</p>
        </div>
    );
};

// Prop types validation
ConsultationCard.propTypes = {
    userName: PropTypes.string.isRequired,
    consultationDate: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired
};

export default ConsultationCard;
