import React, { useState } from 'react';

function ContentEditor() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
            <textarea value={content} onChange={handleContentChange} placeholder="Content" />
            <button type="submit">Save</button>
        </form>
    );
}

export default ContentEditor;
