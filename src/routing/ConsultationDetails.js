import React from 'react';
import { useParams } from 'react-router-dom';

function ConsultationDetails() {
    const { consultationId } = useParams();

    return (
        <div>
            <h2>Consultation Details</h2>
            <p>Consultation ID: {consultationId}</p>
        </div>
    );
}

export default ConsultationDetails;
