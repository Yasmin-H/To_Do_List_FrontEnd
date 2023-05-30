import Item from "./Item";

const ItemList = ( {items, deleteItem, selectItemForEditing, updateCompleted} ) => {

    const itemComponents = items.map((item) => {
        return <Item key={item.id} item={item} deleteItem={deleteItem} selectItemForEditing={selectItemForEditing} updateCompleted={updateCompleted}/>
    })
    return ( 
        <>
        {itemComponents}
        </>
     );

}
 
export default ItemList;