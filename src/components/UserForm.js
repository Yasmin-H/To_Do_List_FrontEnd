import { useState } from "react";

const UserForm = ({users, postUser}) => {

    const [newUser, setNewUser] = useState({name: "", masterList: []});

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if(users.findIndex(users.name === newUser.name) < 0){
            postUser(newUser);
        }
        console.log("user added");
    
    }

    const handleChange = (event) => {
        setNewUser(event.target.value);

    }


    return ( 
        <>
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="enter name..."
            value={newUser.name}
            onChange={handleChange}/>
            <button type="submit">Join</button>

        </form>
        
        </>
     );
}
 
export default UserForm;