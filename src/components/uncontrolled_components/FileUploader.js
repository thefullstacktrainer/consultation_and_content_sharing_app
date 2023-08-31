import React from 'react';

function FileUploader() {
    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
}

export default FileUploader;
