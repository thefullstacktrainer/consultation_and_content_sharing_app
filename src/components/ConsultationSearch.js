import React, { useRef } from 'react';

const ConsultationSearch = ({ onSearch }) => {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = inputRef.current.value;
        onSearch(searchValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} placeholder="Search consultations" />
            <button type="submit">Search</button>
        </form>
    );
};

export default ConsultationSearch;
