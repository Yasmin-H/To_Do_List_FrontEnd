import Item from "./Item";
import "../cssFiles/itemCssFiles/ItemList.css";


const ItemList = ( {items, deleteItem, selectItemForEditing, updateCompleted} ) => {

    const itemComponents = items.map((item) => {
        return <Item 
        key={item.id} 
        item={item} 
        deleteItem={deleteItem} 
        selectItemForEditing={selectItemForEditing} 
        updateCompleted={updateCompleted}/>
    })
    return ( 

        <div className="item-list">
        {itemComponents}
        </div>
     );

}
 
export default ItemList;