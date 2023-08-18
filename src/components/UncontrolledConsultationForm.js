import React, { useRef } from 'react';

const UncontrolledConsultationForm = ({ onAddConsultation }) => {
    const userNameInputRef = useRef();
    const consultationDateInputRef = useRef();
    const topicInputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newConsultation = {
            userName: userNameInputRef.current.value,
            consultationDate: consultationDateInputRef.current.value,
            topic: topicInputRef.current.value,
            likes: 0, // Initial likes
        };

        onAddConsultation(newConsultation);

        // Clear form inputs
        userNameInputRef.current.value = '';
        consultationDateInputRef.current.value = '';
        topicInputRef.current.value = '';
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>User Name</label>
                <input type="text" ref={userNameInputRef} />
            </div>
            <div>
                <label>Consultation Date</label>
                <input type="date" ref={consultationDateInputRef} />
            </div>
            <div>
                <label>Topic</label>
                <input type="text" ref={topicInputRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledConsultationForm;
