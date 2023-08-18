import React, { useState } from 'react';

const ConsultationCard = ({ userName, consultationDate, topic, likes }) => {
    const [updatedLikes, setLikes] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(updatedLikes + 1);
            setIsLiked(true);
        }
    };


    return (
        <div className="consultation-card">
            <h3>{userName}</h3>
            <p>Date: {consultationDate}</p>
            <p>Topic: {topic}</p>
            <button onClick={handleLike}>
                {isLiked ? 'Liked' : 'Like'} ({updatedLikes})
            </button>
        </div>
    );
};

export default ConsultationCard;
