import React from 'react';

function CheckboxGroup() {
    const handleCheckboxChange = (event) => {
        const selectedOption = event.target.value;
        console.log(selectedOption)
    };

    return (
        <div>
            <label>Select Tags:</label>
            <label>
                <input type="checkbox" value="technology" onChange={handleCheckboxChange} />
                Technology
            </label>
            <label>
                <input type="checkbox" value="science" onChange={handleCheckboxChange} />
                Science
            </label>
        </div>
    );
}

export default CheckboxGroup;
