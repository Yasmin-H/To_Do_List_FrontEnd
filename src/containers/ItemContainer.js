import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";


const ItemContainer = () => {

    const[items, setItems] = useState([]);
    const[itemToUpdate, setItemToUpdate] = useState(null);

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
        const editedItem = response.json();
        const itemsToKeep = items.filter((item) => item.id !== updatedItem.id)
        setItems([...itemsToKeep, editedItem])
    
        setItemToUpdate(null);
      }

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("http://localhost:8080/items");
            const data = await response.json();
            setItems(data);
        }
        fetchItems()
    }, [])

    const selectItemForEditing = (item) => {
        setItemToUpdate(item);
      }

    return ( 
        <>
         <ItemList items={items} deleteItem={deleteItem} selectItemForEditing={selectItemForEditing}/>
         <ItemForm postItem={postItem} itemToUpdate={itemToUpdate}/>
        </>
     );
}
 
export default ItemContainer;