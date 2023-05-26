import { useState } from "react";

const ItemForm = ( {postItem} ) => {

    const [newItem, setNewItem] = useState({taskName: "", dueDate: "", priority: "", toDoList:{}})

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postItem(newItem);
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedItem = {...newItem};
        copiedItem[propertyName]= event.target.value;
        setNewItem(copiedItem);
    }

    return ( 
        <>
        <form onSubmit={handleFormSubmit}>
            <input type="text"
                placeholder="task name"
                onChange={handleChange}
                name="taskName"
                value={newItem.taskName}/>

            <input type="text"
                placeholder="due date"
                onChange={handleChange}
                name="dueDate"
                value={newItem.dueDate}/> 

            <input type="text"
                placeholder="priority"
                onChange={handleChange}
                name="priority"
                value={newItem.priority}/> 

            <button>submit</button>  
        </form>
        
        </>
    );
}
 
export default ItemForm;