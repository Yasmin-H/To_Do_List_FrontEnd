import { useState, useEffect } from "react";
import ToDoList from "../components/ToDoList";

const ToDoContainer = () => {

    const[toDoLists, setToDoLists] = useState([]);
    const [newToDo, setNewToDo] = useState ({listName : "", itemIds: [1], userIds: [1]})

    const postList = async (newList) => {
        const response = await fetch("http://localhost:8080/lists", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newList)
        })
        const savedList = await response.json();
        setToDoLists([...toDoLists, savedList])
    }
    
    useEffect(() => {
        const fetchLists = async () => {
            const response = await fetch("http://localhost:8080/lists");
            const data = await response.json();
            setToDoLists(data);
        }
        fetchLists()
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // if(toDoLists.findIndex((toDoLists) => toDoLists.name === newToDo.name) < 0){
        //     postList(newToDo);
        //     console.log("list added");
        // } else{
        //     console.log("list already exists");
        // }
        postList(newToDo);
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedList = {...newToDo};
        copiedList[propertyName]= event.target.value;
        setNewToDo(copiedList);

    }
    return ( 
        <>
         <form onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="enter list name"
            value={newToDo.listName}
            name="listName"
            onChange={handleChange}/>
            <button type="submit">Create new list</button>

        </form>
        <button>Show completed lists</button>
        <ToDoList toDoLists={toDoLists}/>
        </>
     );
}
 
export default ToDoContainer;