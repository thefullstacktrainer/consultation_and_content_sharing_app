import React from 'react'
import { useState, useEffect, useRef } from "react";


function UseRefExample1() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);


    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
            <div>Tracking the changes</div>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>

            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>



        </>
    );
}

export default UseRefExample1