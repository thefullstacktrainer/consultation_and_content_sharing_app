import React from 'react';
import PropTypes from 'prop-types';

const ContentCard = ({ title, description, author }) => {
    return (
        <div className="content-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Author: {author}</p>
        </div>
    );
};

// Prop types validation
ContentCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default ContentCard;
