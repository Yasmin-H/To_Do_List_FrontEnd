import Item from "./Item";

const ItemList = ( {items} ) => {

    const itemComponents = items.map((item) => {
        return <Item key={item.id} item={item}/>
    })
    return ( 
        <>
        {itemComponents}
        </>
     );

}
 
export default ItemList;