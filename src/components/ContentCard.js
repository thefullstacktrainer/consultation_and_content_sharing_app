import React, { useState } from 'react';
import './ContentCard.css';

const ContentCard = ({ title, description, author }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const isSelected = false;
    return (
        <div className={`content-card ${isSelected ? 'selected' : ''}`} >
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Author: {author}</p>
            <button onClick={handleLike}>Like</button>
            <p>Likes: {likes}</p>
        </div>
    );
};

export default ContentCard;
