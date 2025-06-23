// // export default Todo;
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Create from "./Create";
// import "../App.css";

// // Get the API URL from the .env file
// const API_URL = import.meta.env.VITE_API_URL;

// function Todo() {
//     const [todos, setTodos] = useState([]);
//     const [completed, setCompleted] = useState({});

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     const fetchTasks = () => {
//         axios.get(`${API_URL}/api/task/`)
//             .then(result => {
//                 setTodos(result.data);
//                 const initialCompleted = {};
//                 result.data.forEach(todo => {
//                     initialCompleted[todo._id] = false;
//                 });
//                 setCompleted(initialCompleted);
//             })
//             .catch(err => console.log("Fetch error:", err.response ? err.response.data : err.message));
//     };

//     const handleDelete = (id) => {
//         axios.delete(`${API_URL}/api/task/delete/${id}`)
//             .then(() => {
//                 fetchTasks(); // Refresh tasks after deletion
//             })
//             .catch(err => {
//                 console.log("Delete error:", err.response ? err.response.data : err.message);
//             });
//     };

//     const toggleComplete = (id) => {
//         setCompleted(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     return (
//         <div className="todo-container">
//             <h2 className="todo-title">✅ Track Your Progress</h2>
//             <Create refreshTasks={fetchTasks} />
//             {todos.length === 0 ? (
//                 <div className="no-tasks">No Records Found 🚀</div>
//             ) : (
//                 todos.map(todo => (
//                     <div key={todo._id} className="todo-item">
//                         {/* Checkbox icon */}
//                         <span
//                             className="checkmark"
//                             onClick={() => toggleComplete(todo._id)}
//                             title="Mark as done"
//                         >
//                             {completed[todo._id] ? "☑️" : "☐"}
//                         </span>

//                         {/* Task text */}
//                         <span className={`task-text ${completed[todo._id] ? "completed" : ""}`}>
//                             {todo.task}
//                         </span>

//                         {/* Delete icon */}
//                         <span
//                             className="delete-icon"
//                             onClick={() => handleDelete(todo._id)}
//                             title="Delete task"
//                         >
//                             🗑️
//                         </span>
//                     </div>
//                 ))
//             )}
//             <p>Click below to navigate to the home page:</p>
//       <button
//         //onClick={handleLogout}
//         onClick={() => navigate('/')} 
//         style={{
//           backgroundColor: "#d81b60",
//           color: "white",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginBottom: "20px",
//         }}
//       >
//          Go to Home Page
//       </button>
//         </div>
//     );
// }

// export default Todo;



















// export default Todo;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import axios from "axios";
import Create from "./Create";
import "../App.css";

const API_URL = import.meta.env.VITE_API_URL;

function Todo() {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState({});
    const navigate = useNavigate(); // ✅ Initialize navigate

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get(`${API_URL}/api/task/`)
            .then(result => {
                setTodos(result.data);
                const initialCompleted = {};
                result.data.forEach(todo => {
                    initialCompleted[todo._id] = false;
                });
                setCompleted(initialCompleted);
            })
            .catch(err => console.log("Fetch error:", err.response ? err.response.data : err.message));
    };

    const handleDelete = (id) => {
        axios.delete(`${API_URL}/api/task/delete/${id}`)
            .then(() => {
                fetchTasks(); // Refresh tasks after deletion
            })
            .catch(err => {
                console.log("Delete error:", err.response ? err.response.data : err.message);
            });
    };

    const toggleComplete = (id) => {
        setCompleted(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="todo-container"
        style={{
            maxWidth: "600px",
            margin: "40px auto",
            padding: "20px",
            backgroundColor: "#1e1e1e", // dark background
            color: "#f5f5f5", // light text
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)", // deeper shadow
            fontFamily: "Arial, sans-serif"
        }}
        
        >
            <h2 className="todo-title">📈 Track Your Progress</h2>
            <Create refreshTasks={fetchTasks} />
            {todos.length === 0 ? (
                <div className="no-tasks">No Records Found 🚀</div>
            ) : (
                todos.map(todo => (
                    <div key={todo._id} className="todo-item">
                        <span
                            className="checkmark"
                            onClick={() => toggleComplete(todo._id)}
                            title="Mark as done"
                        >
                            {completed[todo._id] ? "☑️" : "☐"}
                        </span>

                        <span className={`task-text ${completed[todo._id] ? "completed" : ""}`}>
                            {todo.task}
                        </span>

                        <span
                            className="delete-icon"
                            onClick={() => handleDelete(todo._id)}
                            title="Delete task"
                        >
                            🗑️
                        </span>
                    </div>
                ))
            )}

            <p>Click below to navigate to the home page:</p>
            <button
                onClick={() => navigate('/')} // ✅ Navigate to home
                style={{
                    backgroundColor: "#d81b60",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "20px",
                }}
            >
                Go to Home Page
            </button>
        </div>
    );
}

export default Todo;
