import React from 'react';

function RichTextEditor() {
    const handleContentChange = (event) => {
        const content = event.target.innerHTML;
        console.log(content)
    };

    return (
        <div>
            <label>Content:</label>
            <div contentEditable={true} onBlur={handleContentChange}></div>
        </div>
    );
}

export default RichTextEditor;
