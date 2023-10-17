import React, { useState } from 'react';

const ShareContentForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submission logic using title and description
        console.log('Title:', title);
        console.log('Description:', description);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
            <textarea value={description} onChange={handleDescriptionChange} placeholder="Description" />
            <button type="submit">Share</button>
        </form>
    );
};


export default ShareContentForm;