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

// Default props
ContentCard.defaultProps = {
    title: 'Untitled',
    description: 'No description available',
    author: 'Unknown'
};

export default ContentCard;
