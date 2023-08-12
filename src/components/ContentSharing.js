import React from 'react';
import ContentCard from './ContentCard';

const ContentSharing = ({ contentList }) => {
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
