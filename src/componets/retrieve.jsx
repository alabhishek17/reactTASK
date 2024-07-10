

// function RETRIEVE(){
//     return (
//         <div>
//             <h1>menthid</h1>
//         </div>
//     )
// }

// export default RETRIEVE;

import { useState, useEffect } from "react";



function RETRIEVE() {
    const [aadharSearch, setAadharSearch] = useState("");
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Retrieve tasks from local storage when the component mounts
        const storedTasks = JSON.parse(localStorage.getItem("task"));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    const findTask = () => {
        // Filter tasks by Aadhar number
        const filtered = tasks.filter(task => task.aadhar === aadharSearch);
        setFilteredTasks(filtered);
    };

    return (
        <div>
            <h1>Retrieve Info</h1>
            <input
            
                type="number"
                placeholder="Enter Aadhar Number"
                value={aadharSearch}
                onChange={(e) => setAadharSearch(e.target.value) }
            style={{padding:"10px"}}/>
            <button onClick={findTask} style={{padding:"10px 20px",background:"blue",color:"white"}}>Find</button>

            {filteredTasks.length > 0 ? (
                <div style={{marginTop:"20px"}}>
                    {filteredTasks.map((e, index) => (
                        <div style={{ border: "2px solid black", display: "flex", flexDirection: "column", width: "30%",padding:"10px" }} key={index}>
                            <span>Name:{e.name}</span>
                            <span>Date:{e.date}</span>
                            <span>Aadhar:{e.aadhar}</span>
                            <span>Phone:{e.phone}</span>
                            <span>Age:{e.age}</span>
                        </div>
                    ))}
                </div>

            ) : (
                <p>No tasks found for this Aadhar number</p>
            )}
        </div>
    );
}

export default RETRIEVE;

