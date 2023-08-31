import React from 'react';

function MultiSelectDropdown() {
    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.options)
            .filter(option => option.selected)
            .map(option => option.value);
        console.log(selectedOptions)
    };

    return (
        <div>
            <label>Select Categories:</label>
            <select multiple onChange={handleSelectChange}>
                <option value="technology">Technology</option>
                <option value="science">Science</option>
                <option value="react">ReactJS</option>
            </select>
        </div>
    );
}

export default MultiSelectDropdown;
