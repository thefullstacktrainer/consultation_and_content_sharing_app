import React from 'react';

const ContentCard = ({ title, description, author }) => {
    return (
        <div className="content-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Author: {author}</p>
        </div>
    );
};

export default ContentCard;
