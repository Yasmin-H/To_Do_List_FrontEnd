import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";
import "../cssFiles/itemCssFiles/ItemContainer.css";

const ItemContainer = ({onSave, currentToDo}) => {

    const[items, setItems] = useState([]);
    const[itemToUpdate, setItemToUpdate] = useState(null);
    const [sortByDueDate, setSortByDueDate] = useState(false);
    const [sortByPriority, setSortByPriority] = useState(false);
    
    const postItem = async (newItem) => {
        const response = await fetch("http://localhost:8080/items", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        const savedItem = await response.json();
        setItems([...items, savedItem])
    }

    const deleteItem = async (id) => {
        const response = await fetch(`http://localhost:8080/items/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })

        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    const updateItem = async (updatedItem) => {
        const response = await fetch(`http://localhost:8080/items/update/${updatedItem.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedItem),
        })
        const editedItem = await response.json();
        const itemsToKeep = items.filter((item) => item.id !== updatedItem.id)
        setItems([...itemsToKeep, editedItem])

        setItemToUpdate(null);
    }

    const updateCompleted = async (isCompleted, id) => {
        const response = await fetch(`http://localhost:8080/items/${id}?completed=${!isCompleted}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" }
        })
        const updatedItem = await response.json();
        const updatedItems = items.map((item) => item.id === updatedItem.id ? updatedItem : item);
        setItems(updatedItems);
    }

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("http://localhost:8080/items");
            const data = await response.json();
            const listsItems = data.filter((item) => item.toDoList.id === currentToDo.id);
            setItems(listsItems);
        }
        fetchItems()
    }, [currentToDo])

    const selectItemForEditing = (item) => {
          setItemToUpdate(item);
    }

    const saveItem = (item) => {
        item.id ? updateItem(item): postItem(item);
    }

    const sortItemsByDueDate = () => {
        const sortedItems = [...items];
        sortedItems.sort((firstItem, secondItem) => {
          if (firstItem.dueDate < secondItem.dueDate) {
            return sortByDueDate ? 1 : -1;
          } else if (firstItem.dueDate > secondItem.dueDate) {
            return sortByDueDate ? -1 : 1;
          } else {
            return 0;
          }
        });
        setItems(sortedItems);
        setSortByDueDate(!sortByDueDate);
    };
    
    const sortItemsByPriority = () => {
        const sortedItems = [...items];
        sortedItems.sort((firstItem, secondItem) => {
          const priorityValues = { LOW: 0, MEDIUM: 1, HIGH: 2 };
          const firstPriority = priorityValues[firstItem.priority];
          const secondPriority = priorityValues[secondItem.priority];
    
          if (firstPriority < secondPriority) {
            return sortByPriority ? 1 : -1;
          } else if (firstPriority > secondPriority) {
            return sortByPriority ? -1 : 1;
          } else {
            return 0;
          }
        });
        setItems(sortedItems);
        setSortByPriority(!sortByPriority);
    };


    return ( 
        <>
        <div className="container">
            <div className="column-titles">
                <p>Task name</p>
                <button onClick={sortItemsByDueDate}>Due Date {sortByDueDate ? "↑" : "↓"}</button>
                <button onClick={sortItemsByPriority}>Priority {sortByPriority ? "↓" : "↑"}</button>
            </div>
            <ItemList items={items} deleteItem={deleteItem} selectItemForEditing={selectItemForEditing} updateCompleted={updateCompleted}/>
            <ItemForm  itemToUpdate={itemToUpdate} saveItem={saveItem} currentToDo={currentToDo}/>
         </div>
         <div class="save-button">
            <button onClick={()=> onSave()}>Save</button>
         </div>
         
        </>
     );
}
 
export default ItemContainer;