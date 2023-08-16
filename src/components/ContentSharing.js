import React, { useState, useEffect } from 'react';
import ContentCard from './ContentCard';

const ContentSharing = ({ contentList, userId }) => {
    useEffect(() => {
        // This runs when userId prop changes (equivalent to componentDidUpdate)
        // Fetch content shared by the new user

        return () => {
            // Cleanup function for the previous effect (equivalent to componentWillUnmount)
            // Perform cleanup tasks if needed
        };
    }, [userId]);
    return (
        <div className="content-sharing">
            <h2>Shared Content</h2>
            {contentList.map((content, index) => (
                <ContentCard
                    key={index}
                    title={content.title}
                    description={content.description}
                    author={content.author}
                />
            ))}
        </div>
    );
};

export default ContentSharing;
