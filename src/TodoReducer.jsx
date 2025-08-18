
import { useContext, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";

const initialstate = [];

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "TOGGLE":
            return state.map(todo => todo.id === action.payload
                ? { ...todo, status: !todo.status }
                : todo
            );

        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;

    }
}

function DemoReducer() {

    const [todos, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState("");

    const { style } = useContext(GlobalContext);

    const handleAdd = () => {
        if (!title || title.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            status: false,
        };
        dispatch({ type: "ADD", payload: newTodo });
        setTitle("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h4>TODO LIST</h4>

            <input
                type="text"
                style={{
                    padding: "8px 16px",
                    marginRight: "10px",
                    border: "2px solid black",
                    borderRadius: "5px",
                    color: "black",
                    backgroundColor: "lightgreen",
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the task"
            />

            <button
                onClick={handleAdd}
                style={{
                    ...style, 
                    color: "green",
                    cursor: "pointer",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    padding: "8px 16px",
                    marginLeft: "8px",
                    border : "3px solid green"
                }}
            >
                Adding
            </button>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            marginTop: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span
                            onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
                            style={{
                                cursor: "pointer",
                                padding: "6px 12px",
                                marginRight: "10px",
                                color: "red",
                            }}
                        >
                            {todo.title}{" "}
                            <strong>{todo.status ? "Done" : "Pending"}</strong>
                        </span>

                        <button
                            onClick={() => dispatch({ type: "Delete", payload: todo.id })}
                            style={{
    
                            }}
                        >
                            
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default DemoReducer;