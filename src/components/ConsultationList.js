import React, { useState, useEffect } from 'react';
import ConsultationCard from './ConsultationCard';
import AddConsultationForm from './AddConsultationForm';

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

    const [consultationsList, setConsultationsList] = useState(consultations);

    const handleAddConsultation = (newConsultation) => {
        // Add the new consultation to the list
        setConsultationsList([...consultationsList, newConsultation]);
    };

    return (
        <div className="consultation-list">
            <h2>Consultations</h2>
            {consultationsList.map((consultation, index) => (
                <ConsultationCard
                    key={index}
                    userName={consultation.userName}
                    consultationDate={consultation.consultationDate}
                    topic={consultation.topic}
                    likes={consultation.likes}
                />
            ))}
            <br />
            <div>
                <AddConsultationForm onAddConsultation={handleAddConsultation} />
            </div>
            <br />
        </div>
    );
};

export default ConsultationList;
