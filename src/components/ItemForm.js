import { useState,useEffect } from "react";
import "../cssFiles/itemCssFiles/ItemForm.css";

const ItemForm = ( {postItem, itemToUpdate, saveItem, currentToDo} ) => {

    const [newItem, setNewItem] = useState({taskName: "", dueDate: "", priority: "", listId: currentToDo.id})

    useEffect(() => {
        if(itemToUpdate !== null && itemToUpdate.id){
          setNewItem(itemToUpdate);
        }
    }, [itemToUpdate])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveItem(newItem);
        setNewItem({taskName: "", dueDate: "", priority: "", listId:1})
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedItem = {...newItem};
        copiedItem[propertyName]= event.target.value;
        setNewItem(copiedItem);
    }

    return ( 
        <>
        <form className="form" onSubmit={handleFormSubmit}>
            <input type="text"
                placeholder="task name"
                onChange={handleChange}
                name="taskName"
                value={newItem.taskName}/>

            <input type="text"
                placeholder="dd/mm/yyyy"
                onChange={handleChange}
                name="dueDate"
                value={newItem.dueDate}/> 

            <select class="type" name="priority" onChange={handleChange}>
                <option disabled-value="">priority</option>
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HIGH">HIGH</option>
            </select>

            <button>submit</button>  
        </form>
        
        </>
    );
}
 
export default ItemForm;