import React from 'react'
import Todos from './Todos';
import { useState, useCallback } from "react";

function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}

export default UseCallbackExample