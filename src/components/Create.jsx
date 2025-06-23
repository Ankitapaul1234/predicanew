// export default Create; 
import React, { useState } from "react";
import axios from "axios";

const Create = ({ refreshTasks }) => {
    const [task, setTask] = useState("");
    const API_URL = import.meta.env.VITE_API_URL;

    const handleAdd = () => {
        if (task.trim() === "") return;  // Prevent adding empty tasks

        axios.post(`${API_URL}/api/task/add`, { task })
            .then(() => {
                setTask("");
                refreshTasks(); // Refresh the task list after adding
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="create-form">
            <input 
                type="text" 
                className="create-form-input"  
                placeholder="Enter task..."
                value={task}  
                onChange={(e) => setTask(e.target.value)} 
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    width: "250px",
                    marginRight: "10px"
                }}
            />
            <button type="button" className="create-form-button" onClick={handleAdd}>
                Add
            </button>
        </div>
    );
};

export default Create;