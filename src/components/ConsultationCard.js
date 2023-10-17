import React, { useState } from 'react';

const ConsultationCard = ({ userName, consultationDate, topic, onLike }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
        onLike(userName);
    };

    const cardStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: '#f5f5f5',
    };

    return (
        <div className="consultation-card" style={cardStyle}>
            <h3>{userName}</h3>
            <p>Date: {consultationDate}</p>
            <p>Topic: {topic}</p>
            <button onClick={handleLike}>Like</button>
            <p>Likes: {likes}</p>
        </div>
    );
};

export default ConsultationCard;
