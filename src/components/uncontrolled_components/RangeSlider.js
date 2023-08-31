import React from 'react';

function RangeSlider() {
    return (
        <div>
            <label>Adjust value:</label>
            <input type="range" min="0" max="100" step="1" />
        </div>
    );
}

export default RangeSlider;
