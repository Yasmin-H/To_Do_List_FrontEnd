import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";


const ItemContainer = () => {

    const[items, setItems] = useState([]);

    const postItem = async (newItem) => {
        const response = await fetch("http://localhost:8080/items", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        const savedItem = await response.json();
        setItems([...items, savedItem])
    }

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("http://localhost:8080/items");
            const data = await response.json();
            setItems(data);
        }
        fetchItems()
    }, [])

    return ( 
        <>
         <ItemList items={items}/>
         <ItemForm postItem={postItem}/>
        </>
     );
}
 
export default ItemContainer;