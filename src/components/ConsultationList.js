import React, { useState, useEffect } from 'react';
import ConsultationCard from './ConsultationCard';
import styles from './ConsultationList.module.css';

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
    const cbFun = (name) => console.log(name)
    return (
        <div className="consultation-list">
            <h2>Consultations</h2>
            {consultations.map((consultation, index) => (
                <ConsultationCard
                    key={index}
                    userName={consultation.userName}
                    consultationDate={consultation.consultationDate}
                    topic={consultation.topic}
                    onLike={cbFun}
                />
            ))}
            <ul className={styles['consultation-list']}>
                {consultations.map((consultation, index) => (
                    <li key={index} className={styles['consultation-item']}>
                        <div>
                            <h3 className={styles['consultation-title']}>{consultation.userName}</h3>
                            <p className={styles['consultation-description']}>{consultation.topic}</p>
                        </div>
                        <span className={styles['consultation-action']}>View Details</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultationList;
