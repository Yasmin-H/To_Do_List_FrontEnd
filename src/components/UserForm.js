import { useState } from "react";

const UserForm = ({users, postUser}) => {

    const [newUser, setNewUser] = useState({name: "", masterList: []});

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if(users.findIndex((user) => user.name === newUser.name) < 0){
            postUser(newUser);
            console.log("user added")
        } else{
            console.log("user already exists");
        }
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedUser = {...newUser};
        copiedUser[propertyName]= event.target.value;
        setNewUser(copiedUser);

    }


    return ( 
        <>
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="enter name..."
            value={newUser.name}
            name="name"
            onChange={handleChange}/>
            <button type="submit">Join</button>

        </form>
        
        </>
     );
}
 
export default UserForm;