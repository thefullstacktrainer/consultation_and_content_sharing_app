import React from 'react';
import { useLocation } from 'react-router-dom';

function NewContentSharing() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    return (
        <div>
            <h2>Content Sharing</h2>
            <p>Query Parameter: {queryParams.get('type')}</p>
            {/* Add content sharing logic */}
        </div>
    );
}

export default NewContentSharing;