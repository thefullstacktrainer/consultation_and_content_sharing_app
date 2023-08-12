import React, { useState } from 'react';

const ConsultationCard = ({ userName, consultationDate, topic }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="consultation-card">
            <h3>{userName}</h3>
            <p>Date: {consultationDate}</p>
            <p>Topic: {topic}</p>
            <button onClick={handleLike}>Like</button>
            <p>Likes: {likes}</p>
        </div>
    );
};

export default ConsultationCard;
