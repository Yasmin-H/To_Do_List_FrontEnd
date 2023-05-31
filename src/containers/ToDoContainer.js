import { useState, useEffect } from "react";
import ToDoList from "../components/ToDoList";

const ToDoContainer = ({onEdit, onLogout}) => {

    const[toDoLists, setToDoLists] = useState([]);
    const [newToDo, setNewToDo] = useState ({listName : "", itemIds: [1], userIds: [1]})
    const [completed, setCompleted] = useState(false);

    const postList = async (newList) => {
        const response = await fetch("http://localhost:8080/lists", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newList)
        })
        const allLists = await response.json();
        const savedList = allLists.pop();
        setToDoLists([...toDoLists, savedList])
        console.log(savedList)
    }

    const deleteList = async (id) => {
        const response = await fetch(`http://localhost:8080/lists/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })

        const newLists = toDoLists.filter((toDoList) => toDoList.id !== id);
        setToDoLists(newLists);
    }

    const updateCompleted = async (isCompleted, id) => {
        const response = await fetch(`http://localhost:8080/lists/complete/${id}?completed=${!isCompleted}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" }
        })
        const updatedList = await response.json();
        const updatedLists = toDoLists.map((toDoList) => toDoList.id === updatedList.id ? updatedList : toDoList);
        setToDoLists(updatedLists);
    }

    
    useEffect(() => {
        const fetchLists = async () => {
            const response = await fetch(`http://localhost:8080/lists?completed=${completed}`);
            const data = await response.json();
            setToDoLists(data);
        }
        fetchLists()
    }, [completed])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if(newToDo.listName !== ""){
            postList(newToDo);
        }
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedList = {...newToDo};
        copiedList[propertyName]= event.target.value;
        setNewToDo(copiedList);


    }
    return ( 
        <>
        <button onClick={()=> onLogout()}>Logout</button>
         <form onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="enter list name"
            value={newToDo.listName}
            name="listName"
            onChange={handleChange}/>
            <button type="submit">Create new list</button>

        </form>
        <button onClick={()=> setCompleted(!completed)}>{!completed ? "Show Completed Lists" : "Show Incompleted Lists"}</button>
        <ToDoList toDoLists={toDoLists} onEdit={onEdit} deleteList={deleteList} updateCompleted={updateCompleted}/>
        </>
     );
}
 
export default ToDoContainer;