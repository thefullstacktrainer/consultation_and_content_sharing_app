import React, { useState, useEffect } from 'react';
import ConsultationCard from './ConsultationCard';

const ConsultationList = ({ consultations }) => {
    useEffect(() => {
        // This runs after the component is first rendered (equivalent to componentDidMount)
        // Fetch consultation data from an API
        // Update component state with fetched data

        return () => {
            // This cleanup function runs when the component is unmounted (equivalent to componentWillUnmount)
            // Perform cleanup tasks like canceling subscriptions or timers
        };
    }, []);

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
