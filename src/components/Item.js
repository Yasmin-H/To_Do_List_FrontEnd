const Item = ({item}) => {

    return ( 
        <>
        <h3>{item.taskName}</h3>
        <h3>{item.dueDate}</h3>
        <h3>{item.priority}</h3>
        <button>Edit</button>
        <button>Delete</button>
        <hr/>
        </>
     );
    
}
 
export default Item;