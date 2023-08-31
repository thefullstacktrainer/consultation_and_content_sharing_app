import React from 'react';

function ToggleSwitch() {
    const handleToggleChange = (event) => {
        const isChecked = event.target.checked;
        console.log(isChecked)
    };

    return (
        <div>
            <label>Enable Notifications:</label>
            <input type="checkbox" onChange={handleToggleChange} />
        </div>
    );
}

export default ToggleSwitch;
