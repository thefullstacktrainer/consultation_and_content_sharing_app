import React, { useState } from 'react';

const AddConsultationForm = ({ onAddConsultation }) => {
    const [userName, setUserName] = useState('');
    const [consultationDate, setConsultationDate] = useState(new Date());
    const [topic, setTopic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newConsultation = {
            userName,
            consultationDate,
            topic,
            likes: 0, // Initial likes
        };

        onAddConsultation(newConsultation);

        // Reset form inputs
        setUserName('');
        setConsultationDate('');
        setTopic('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User Name</label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label>Consultation Date</label>
                <input
                    type="date"
                    value={consultationDate}
                    onChange={(e) => setConsultationDate(e.target.value)}
                />
            </div>
            <div>
                <label>Topic</label>
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddConsultationForm;
