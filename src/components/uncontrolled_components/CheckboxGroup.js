import React, { useRef } from 'react';

function CheckboxGroup() {
    let selectedOption = "";
    let elementRef = useRef();
    const handleCheckboxChange = (event) => {
        selectedOption = event.target.value;
        console.log(selectedOption)
        elementRef.current.value = selectedOption;
    };

    return (
        <div>
            <label>Select Tags:</label>
            <label>
                <input type="checkbox" value="technology" onChange={handleCheckboxChange} ref={elementRef} />
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
