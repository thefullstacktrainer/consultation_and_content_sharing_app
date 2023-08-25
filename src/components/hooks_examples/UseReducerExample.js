import React from 'react'
import { useReducer } from "react";
const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

const reducer = (state, action) => {
    console.log("reducer called")
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};


function UseReducerExample() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        console.log("handleComplete")
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}

export default UseReducerExample