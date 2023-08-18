import React from 'react';
import { Link } from 'react-router-dom';

function ConsultationListRouting() {
    return (
        <div>
            <h2>Consultations</h2>
            <ul>
                <li>
                    <Link to="/consultations/123">Consultation 123</Link>
                </li>
            </ul>
            <Link to="/content-sharing?type=article">Share an Article</Link>
        </div>
    );
}

export default ConsultationListRouting;
