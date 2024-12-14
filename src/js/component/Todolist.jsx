import React, { useState } from "react";

export const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="container">
            <h1>Lista de la compra</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                setTodos(todos.concat([inputValue]));
                                setInputValue("");
                            }
                        }}
                        placeholder="¿Qué necesitas para comprar?"></input>
                </li>
                {todos.map((item, index) => (
                    <li>
                        {item}{" "}
                        <i
                            className="fas fa-trash-alt"
                            onClick={() =>
                                setTodos(
                                    todos.filter(
                                        (t, currentIndex) =>
                                            index != currentIndex
                                    )
                                )
                            }></i>
                    </li>
                ))}
            </ul>
            <div>{todos.length} tareas</div>
        </div>
    )
}