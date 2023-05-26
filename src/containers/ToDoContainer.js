import { useState, useEffect } from "react";
import ToDoList from "../components/ToDoList";

const ToDoContainer = () => {

    const[toDoLists, setToDoLists] = useState([]);

    
    useEffect(() => {
        const fetchLists = async () => {
            const response = await fetch("http://localhost:8080/lists");
            const data = await response.json();
            setToDoLists(data);
        }
        fetchLists()
    }, [])

    return ( 
        <>
        <button>Create list</button>
        <ToDoList toDoLists={toDoLists}/>
        </>
     );
}
 
export default ToDoContainer;