import React, { useState } from 'react';

function OptionsSelector() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (event) => {
        const optionValue = event.target.value;
        if (selectedOptions.includes(optionValue)) {
            setSelectedOptions(selectedOptions.filter(opt => opt !== optionValue));
        } else {
            setSelectedOptions([...selectedOptions, optionValue]);
        }
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value="newsletter"
                    checked={selectedOptions.includes('newsletter')}
                    onChange={handleOptionChange}
                />
                Subscribe to Newsletter
            </label>
            <label>
                <input
                    type="radio"
                    value="daily"
                    checked={selectedOptions.includes('daily')}
                    onChange={handleOptionChange}
                />
                Daily Updates
            </label>
            <label>
                <input
                    type="radio"
                    value="weekly"
                    checked={selectedOptions.includes('weekly')}
                    onChange={handleOptionChange}
                />
                Weekly Updates
            </label>
        </div>
    );
}

export default OptionsSelector;