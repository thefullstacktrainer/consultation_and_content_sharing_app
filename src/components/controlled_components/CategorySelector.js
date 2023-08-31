import React, { useState } from 'react';

function CategorySelector() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
        </select>
    );
}

export default CategorySelector;
