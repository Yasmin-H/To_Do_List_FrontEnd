import Item from "./Item";

const ItemList = ( {items, deleteItem, selectItemForEditing} ) => {

    const itemComponents = items.map((item) => {
        return <Item key={item.id} item={item} deleteItem={deleteItem} selectItemForEditing={selectItemForEditing}/>
    })
    return ( 
        <>
        {itemComponents}
        </>
     );

}
 
export default ItemList;